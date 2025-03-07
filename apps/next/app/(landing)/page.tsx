"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/problems");
    }, 3000);
  }, [router]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center space-y-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter text-black animate-pulse">
          Code X
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-gray-800">
          Learn, practice, and excel in coding with our interactive platform.
          Start your coding journey today!
        </p>
      </div>
    </div>
  );
}
