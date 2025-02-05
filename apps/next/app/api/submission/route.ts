import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import { getProblem } from "../../_actions/getProblem";
import axios from "axios";
import { getUser } from "../../_actions/getUser";

const HEADERS = {
  "x-rapidapi-key": process.env.API_KEY ?? "",
  "x-rapidapi-host": process.env.API_HOST ?? "",
  "Content-Type": "application/json",
};

export async function POST(req: NextRequest) {
  const session = await getUser();
  if (!session) {
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
  }

  try {
    const { problemId, code } = await req.json();

    const dbProblem = await prisma.problem.findUnique({
      where: { id: problemId },
    });
    if (!dbProblem) {
      return NextResponse.json({ message: "Invalid problem" }, { status: 400 });
    }

    const problem = await getProblem(dbProblem.slug);
    if (!problem) {
      return NextResponse.json({ message: "No boilerplate code" });
    }

    const fullCode = problem.fullBoilerplateCode.replace(
      "##USER_CODE_HERE##",
      code
    );

    const submissionPayload = problem.inputs.map((input, index) => ({
      language_id: 102,
      source_code: fullCode,
      stdin: input,
      expected_output: problem.outputs[index],
    }));

    const result = await axios.post(
      process.env.BATCH_SUBMISSION_URL ?? "",
      { submissions: submissionPayload },
      { headers: HEADERS }
    );

    await Promise.all(
      result.data.map((res: any, index: number) =>
        prisma.submission.create({
          data: {
            tokenId: res.token,
            problemId: dbProblem.id,
            userId: session.id,
            input: problem.inputs[index],
          },
        })
      )
    );

    const polledResult = await pollResults(result.data);

    await Promise.all(
      polledResult.map((res) =>
        prisma.submission.update({
          where: { tokenId: res.token },
          data: {
            memory: res.memory,
            time: res.time,
            status: res.status.description,
            output: res.stdout,
          },
        })
      )
    );

    const finalResponse = await Promise.all(
      polledResult.map((entry) =>
        prisma.submission.findUnique({
          where: { tokenId: entry.token },
          select: {
            memory: true,
            time: true,
            status: true,
            output: true,
            input: true,
          },
        })
      )
    );

    return NextResponse.json({ message: "Judge Response", finalResponse });
  } catch (error: any) {
    console.error("ERROR:", error?.response?.data?.message || error.message);
    return NextResponse.json(
      {
        message: "Error",
        error: error,
      },
      { status: 500 }
    );
  }
}

async function pollResults(tokens: { token: string }[]) {
  const maxRetries = 5;
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const pollSingleToken = async (token: string) => {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await axios.get(
          `${process.env.GET_TOKEN_URL}${token}`,
          {
            headers: HEADERS,
          }
        );

        const statusId = response.data.status.id;
        if (statusId !== 1 && statusId !== 2) {
          return response.data;
        }

        await delay(2000);
      } catch (error) {
        console.error(`Error polling token ${token}:`, error.message);
        break;
      }
    }
    return {
      token,
      status: { description: "Timeout after multiple attempts" },
    };
  };

  return Promise.all(tokens.map((entry) => pollSingleToken(entry.token)));
}
