import prisma from "@repo/db/client";
async function main(langName: string, judge0Id: number) {
  try {
    await prisma.language.create({
      data: {
        judge0Id,
        name: langName,
      },
    });
    console.log("Added");
  } catch (error) {
    console.log(error);
    console.log("error");
  }
}

main(process.env.LANGUAGE_NAME || "", Number(process.env.JUDGE_ID) || 0);
//$env:LANGUAGE_NAME="js "$env:JUDGE_ID="47"; npm run seed:language
