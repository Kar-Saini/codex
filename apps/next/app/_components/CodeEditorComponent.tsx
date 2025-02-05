"use client";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import React, { useState } from "react";
import SubmissionTable from "./SubmissionTables";

const CodeEditorComponent = ({
  defaultCode,
  problemId,
  submissions,
}: {
  defaultCode: string;
  problemId: string;
  submissions: any;
}) => {
  const [activeTab, setActiveTab] = useState("Submit");
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(defaultCode);
  const [loading, setLoading] = useState(false);
  const [submissionResults, setSubmissionResults] = useState<any[]>([]);
  const [allSubmissions, setAllSubmissions] = useState<any[]>(submissions);

  async function handleProblemCodeSubmit() {
    setLoading(true);
    try {
      const result = await axios.post("/api/submission", { problemId, code });
      console.log(result.data);
      setSubmissionResults(result.data.finalResponse);
    } catch (error) {
      console.log("Error:", error); // Log the entire error for debugging

      // Check if the error has a response (server error)
      if (error.response) {
        console.log("Response Error:", error.response); // Log response details

        const status = error.response.status;
        const message = error.response.data.message || "Internal Server Error";
        const details = error.response.data.error || "No additional details.";

        alert(`Error ${status}: ${message}\nDetails: ${details}`);
      }
      // Network error (no response from server)
      else if (error.request) {
        console.log("Request Error:", error.request); // Log request details
        alert("Network Error. Please check your internet connection.");
      }
      // Unexpected error
      else {
        console.log("Unexpected Error:", error.message);
        alert(`Unexpected Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }
  console.log(submissions);

  return (
    <div className="border-2 bg-white shadow flex flex-col p-4 m-1 relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-100 bg-opacity-75 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      )}

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
            <SubmissionTable submissions={allSubmissions} />
          </div>
        )}
      </div>

      {activeTab === "Submit" && (
        <button
          className={`bg-blue-500 text-white py-2 rounded-b hover:bg-blue-600 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleProblemCodeSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Code"}
        </button>
      )}

      <div className="mt-4 grid grid-cols-2 gap-4">
        {submissionResults.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded shadow ${
              result.status === "Accepted"
                ? "bg-green-100 border-l-4 border-green-500 text-green-700"
                : "bg-red-100 border-l-4 border-red-500 text-red-700"
            }`}
          >
            <h4 className="font-semibold">Test Case {index + 1}</h4>
            <p>
              Status: {result.status === "Accepted" ? "✅ Passed" : "❌ Failed"}
            </p>
            <p className="text-sm text-gray-600">Input: {result.input}</p>
            <p className="text-sm text-gray-600">Output: {result.output}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeEditorComponent;
