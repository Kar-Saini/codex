"use server";
import prisma from "@repo/db/client";
export async function getAllProblems() {
  try {
    const problems = await prisma.problem.findMany({
      select: {
        id: true,
        slug: true,
        description: true,
      },
    });
    return problems;
  } catch (error) {
    console.log(error);
  }
}
