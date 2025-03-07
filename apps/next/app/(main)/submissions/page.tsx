import React from "react";
import { getSubmissionsForUser } from "../../_actions/getSubmissionsForUser";
import SubmissionTable from "../../_components/SubmissionTables";

const submissions = async () => {
  const submissions = await getSubmissionsForUser();
  if (!submissions) return <div>No submission</div>;
  return (
    <div className="mx-10 my-4">
      <SubmissionTable submissions={submissions} showProblemId={true} />
    </div>
  );
};

export default submissions;
