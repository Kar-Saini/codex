import * as fs from "fs";
import * as path from "path";
import prisma from "@repo/db/client";
const MOUNT_PATH = "../../problems/";

async function main(slug: string) {
  const pathToProblemStatement = path.join(
    __dirname,
    MOUNT_PATH,
    slug,
    "/Problem.md"
  );
  try {
    const problemDescription = fs.readFileSync(pathToProblemStatement, "utf-8");
    console.log("Description read");
    const problem = await prisma.problem.upsert({
      where: { slug },
      create: { description: problemDescription, slug },
      update: { description: problemDescription },
    });
    console.log("Problem created");
    const pathToProblemBoilerplate = path.join(
      __dirname,
      MOUNT_PATH,
      slug,
      "/boilerplate/function.js"
    );
    const problemCode = fs.readFileSync(pathToProblemBoilerplate, "utf-8");
    const language = await prisma.language.findUnique({
      where: { name: "js" },
    });
    await prisma.defaultCode.upsert({
      where: { problemId: problem.id },
      create: {
        code: problemCode,
        languageId: language?.id as string,
        problemId: problem.id,
      },
      update: { code: problemCode },
    });
    console.log("Problem Added");
  } catch (error) {
    console.log("Problem wih slug present");
  }
}
main(process.env.SLUG || "");
