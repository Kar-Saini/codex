"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};
