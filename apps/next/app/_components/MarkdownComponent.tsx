"use client";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownComponent = ({ description }: { description: string }) => {
  return (
    <div className="prose prose-lg p-4 m-1 border-2">
      <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
    </div>
  );
};

export default MarkdownComponent;
