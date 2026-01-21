export default function ResultCard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-4 bg-white border rounded-xl p-4 shadow">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">{result.type} Result</h2>
        <span className="font-semibold">{result.risk}</span>
      </div>

      <p className="mt-2 text-gray-700">
        Confidence: <span className="font-bold">{result.confidence}%</span>
      </p>

      <div className="mt-3">
        <h3 className="font-semibold">Reasons:</h3>
        <ul className="list-disc ml-5 text-gray-600 mt-1">
          {result.reasons.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
