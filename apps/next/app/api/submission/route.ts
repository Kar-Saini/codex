import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import { getProblem } from "../../_actions/getProblem";
import axios from "axios";
import { input } from "framer-motion/client";
const HEADERS = {
  "x-rapidapi-key": process.env.API_KEY as string,
  "x-rapidapi-host": process.env.API_HOST as string,
  "Content-Type": "application/json",
};
export async function POST(req: NextRequest) {
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
      return NextResponse.json({ message: "No boilerplate code " });
    }
    const replacedFullBoilerPlateCode = problem?.fullBoilerplateCode.replace(
      `##USER_CODE_HERE##`,
      code
    ) as string;
    problem.fullBoilerplateCode = replacedFullBoilerPlateCode;
    const result = await axios.post(
      process.env.BATCH_SUBMISSION_URL as string,
      {
        submissions: problem.inputs.map((input, index) => ({
          language_id: 102,
          source_code: problem.fullBoilerplateCode,
          stdin: input,
          expected_output: problem.outputs[index],
        })),
      },
      {
        headers: HEADERS,
      }
    );
    problem.inputs.map(async (input, index) => {
      await prisma.submission.create({
        data: {
          tokenId: result.data[index].token,
          problemId: dbProblem.id,
        },
      });
    });
    let polledResult = await pollResults(result.data);
    return NextResponse.json({ message: "Recevied" });
  } catch (error) {
    console.log("ERROR");
    return NextResponse.json({ message: "Error" });
  }
}

async function pollResults(tokens: { [key: string]: string }[]) {
  try {
    const response = await axios(
      `${process.env.BATCH_SUBMISSION_URL}?tokens=${tokens.map((entry) => entry.token).join("%")}_encoded=true&fields=*`,
      { headers: HEADERS }
    );
    if (!response.data.submissions[0]) {
      pollResults(tokens);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    console.log("ERROR in Polling results");
  }
}
