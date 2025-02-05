"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SubmissionTableProblemId = ({ problemId }: { problemId: string }) => {
  const router = useRouter();
  return (
    <td
      className="px-4 py-2 border-b hover:underline hover:cursor-pointer"
      onClick={() => {
        router.push(`/problems/${problemId}`);
      }}
    >
      {problemId.slice(0, 8)}
    </td>
  );
};

export default SubmissionTableProblemId;
