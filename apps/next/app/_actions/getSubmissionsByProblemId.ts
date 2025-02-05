"use server";

import prisma from "@repo/db/client";
import { getUser } from "./getUser";

export async function getSubmissionsByProblemId(problemId: string) {
  try {
    const session = getUser();
    if (session.id) {
      return null;
    }
    const submissions = await prisma.submission.findMany({
      where: { userId: session.id, problemId },
    });
    return submissions;
  } catch (error) {
    return null;
  }
}
