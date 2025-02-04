"use server";

import prisma from "@repo/db/client";
import { NextResponse } from "next/server";

export async function getProblemById(id: string) {
  try {
    const problem = await prisma.problem.findUnique({ where: { id } });

    if (!problem) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    return NextResponse.json(problem, { status: 200 });
  } catch (error) {
    console.error("Error fetching problem:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
