"use client";

import { LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Appbar = () => {
  const session = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/auth");
    }
  }, []);
  console.log(session);
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-widest">
              CODEX {"< /   >"}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/problems"
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                pathname === "/problems" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Problems
            </Link>
            <Link
              href="/submissions"
              className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                pathname === "/submissions" ? "text-blue-600" : "text-gray-600"
              }`}
            >
              Submissions
            </Link>
          </div>
          <div>
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 flex flex-col">
                  <span className="text-neutral-600">
                    {session.data?.email}
                  </span>
                  <span className="text-neutral-400">
                    {session.data?.id.slice(0, 8)}
                  </span>
                </span>
                <LogOut />
              </div>
            ) : (
              <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;
