"use client";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import React, { useState } from "react";

const CodeEditorComponent = ({
  defaultCode,
  problemId,
}: {
  defaultCode: string;
  problemId: string;
}) => {
  const [activeTab, setActiveTab] = useState("Submit");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(defaultCode);

  async function handleProblemCodeSubmit() {
    try {
      const result = await axios.post("/api/submission", { problemId, code });
      console.log(result);
    } catch (error) {
      console.log("Error");
    }
  }
  return (
    <div className="border-2 bg-white shadow flex flex-col p-4 m-1">
      <div className="flex border-b mx-2">
        {[{ name: "Submit" }, { name: "Submissions" }].map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 text-sm font-medium w-1/2 ${
              activeTab === tab.name
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-2 border-b">
        <label className="text-sm font-medium mr-2">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="javascript">JavaScript</option>
        </select>
      </div>

      <div className="flex-1 p-4">
        {activeTab === "Submit" ? (
          <Editor
            height="70vh"
            language={language}
            value={code}
            theme="vs-dark"
            options={{ fontSize: 14, scrollBeyondLastLine: false }}
            onChange={(value) => setCode(value || "")}
          />
        ) : (
          <div className="text-sm text-gray-600 p-4 border rounded bg-gray-50">
            No submissions yet.
          </div>
        )}
      </div>

      {activeTab === "Submit" && (
        <button
          className="bg-blue-500 text-white py-2 rounded-b hover:bg-blue-600 transition"
          onClick={handleProblemCodeSubmit}
        >
          Submit Code
        </button>
      )}
    </div>
  );
};

export default CodeEditorComponent;
