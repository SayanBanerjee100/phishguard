import { useState } from "react";
import { analyzeEmail } from "../utils/emailAnalyzer";
import ResultCard from "./ResultCard";

export default function EmailScanner({ addHistory }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleScan = () => {
    if (!text.trim()) return alert("Paste email content first!");

    const finalResult = analyzeEmail(text);
    setResult(finalResult);
    addHistory("Email Scan", finalResult.risk);
  };

  return (
    <div className="bg-gray-50 border rounded-xl p-4 shadow">
      <h2 className="font-bold text-xl mb-2">📧 Email Phishing Detector</h2>

      <textarea
        rows="6"
        className="w-full border p-2 rounded-lg"
        placeholder="Paste email content here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleScan}
        className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
      >
        Scan Email
      </button>

      <ResultCard result={result} />
    </div>
  );
}
