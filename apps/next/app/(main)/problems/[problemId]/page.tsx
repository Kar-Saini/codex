import prisma from "@repo/db/client";
import MarkdownComponent from "../../../_components/MarkdownComponent";
import CodeEditorComponent from "../../../_components/CodeEditorComponent";
import { getSubmissionsByProblemId } from "../../../_actions/getSubmissionsByProblemId";

const Problem = async ({ params }: { params: { problemId: string } }) => {
  const { problemId } = params;
  const problem = await prisma.problem.findUnique({ where: { id: problemId } });
  const submissions = await getSubmissionsByProblemId(problemId);
  if (!problem) {
    return <div>Invalid</div>;
  }
  const defaultCodeForProblem = await prisma.defaultCode.findUnique({
    where: { problemId: problem.id },
  });
  return (
    <div className="">
      <div className="grid lg:grid-cols-2 m-2 sm:grid-cols-1">
        <MarkdownComponent description={problem.description} />
        <CodeEditorComponent
          problemId={problemId}
          defaultCode={defaultCodeForProblem?.code || "No default code found"}
          submissions={submissions}
        />
      </div>
    </div>
  );
};

export default Problem;
