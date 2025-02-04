"use client";

import { useRouter } from "next/navigation";

export default function ProblemCard({
  id,
  slug,
  description,
}: {
  id: string;
  slug: string;
  description: string;
}) {
  const router = useRouter();
  return (
    <div className="border-2 border-gray-400 w-[350px] h-[250px] mx-10 mt-10  p-4 rounded-md flex flex-col justify-around">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{slug.toUpperCase()}</h1>
        <p className="text-sm text-gray-500">{id.slice(0, 8)}</p>
        <p className="text-sm text-gray-800">{description.split("\n")[2]}</p>
      </div>
      <div className="w-full">
        <button
          onClick={() => {
            router.push(`/problems/${id}`);
          }}
          className="w-full bg-gray-300 rounded-md text-neutral-800 py-2 font-bold hover:bg-gray-400 hover:text-neutral-900 transition"
        >
          Solve
        </button>
      </div>
    </div>
  );
}
