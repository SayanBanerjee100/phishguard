import { useState } from "react";
import ResultCard from "./ResultCard";

export default function LinkScanner({ addHistory }) {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const handleScan = async () => {
    if (!url.trim()) return alert("Enter a URL first!");

    setResult({
      type: "URL",
      risk: "Scanning... ⏳",
      confidence: 0,
      reasons: ["Checking realtime Google Safe Browsing database..."],
    });

    try {
      const res = await fetch("http://localhost:8080/api/check-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      const finalResult = {
        type: "URL",
        risk: data.risk,
        confidence: data.confidence,
        reasons: data.reasons,
      };

      setResult(finalResult);
      addHistory(url, finalResult.risk);
    } catch (err) {
      setResult({
        type: "URL",
        risk: "Error ⚠️",
        confidence: 0,
        reasons: ["Backend not running / API error."],
      });
    }
  };

  return (
    <div className="bg-gray-50 border rounded-xl p-4 shadow">
      <h2 className="font-bold text-xl mb-2">🔗 URL Realtime Scanner</h2>

      <input
        className="w-full border p-2 rounded-lg"
        placeholder="Paste URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={handleScan}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
      >
        Scan URL
      </button>

      <ResultCard result={result} />
    </div>
  );
}
