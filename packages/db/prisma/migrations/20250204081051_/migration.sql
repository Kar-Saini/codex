/*
  Warnings:

  - A unique constraint covering the columns `[tokenId]` on the table `Submission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Submission_tokenId_key" ON "Submission"("tokenId");
