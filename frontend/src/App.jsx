import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LinkScanner from "./components/LinkScanner";
import EmailScanner from "./components/EmailScanner";
import History from "./components/History";

export default function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("phishguard_history") || "[]");
    setHistory(saved);
  }, []);

  const addHistory = (input, risk) => {
    const item = { input, risk, time: new Date().toLocaleString() };
    const updated = [item, ...history].slice(0, 8);
    setHistory(updated);
    localStorage.setItem("phishguard_history", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-6xl mx-auto px-5 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Realtime Phishing Link & Email Detector
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <LinkScanner addHistory={addHistory} />
          <EmailScanner addHistory={addHistory} />
        </div>

        <History history={history} />

        <p className="text-center mt-6 text-gray-500 text-sm">
          ⚠️ Hackathon demo tool. URL scan uses Google Safe Browsing realtime database.
        </p>
      </div>
    </div>
  );
}
