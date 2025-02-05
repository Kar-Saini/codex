import React from "react";
import { getAllProblems } from "../../_actions/getAllProblems";
import ProblemCard from "../../_components/ProblemCard";

const Problems = async () => {
  const problems = await getAllProblems();
  console.log(problems);
  return (
    <div className="grid grid-col-4 sm:grid-cols-2 md:grid-cols-4 items-center justify-center h-full mx-auto sm:grid-1">
      {problems &&
        problems.map((problem) => (
          <ProblemCard
            key={problem.id}
            id={problem.id}
            slug={problem.slug}
            description={problem.description}
          />
        ))}
    </div>
  );
};

export default Problems;
