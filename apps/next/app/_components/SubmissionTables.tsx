import { redirect } from "next/navigation";
import React from "react";
import SubmissionTableProblemId from "./SubmissionTableProblemId";

export default function SubmissionTable({ submissions, showProblemId }) {
  if (!submissions) return <div>No submission</div>;
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-xl items-center">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b">Submission ID</th>
              {showProblemId && (
                <th className="px-4 py-2 border-b">Problem ID</th>
              )}
              <th className="px-4 py-2 border-b">Memory</th>
              <th className="px-4 py-2 border-b">Time</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">
                  {submission.id.slice(0, 8)}
                </td>
                {showProblemId && (
                  <SubmissionTableProblemId problemId={submission.problemId} />
                )}
                <td className="px-4 py-2 border-b">{submission.memory}</td>
                <td className="px-4 py-2 border-b">{submission.time}</td>
                <td
                  className={`px-4 py-2 border-b ${submission.status === "Accepted" ? "text-green-600" : "text-red-600"}`}
                >
                  {submission.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
