import React from "react";
import Appbar from "../_components/Appbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Appbar />
      <main className="h-[clac(100vh-4em)]">{children}</main>
    </div>
  );
};

export default MainLayout;
