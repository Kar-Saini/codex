-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "userId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
