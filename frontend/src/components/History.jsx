export default function History({ history }) {
  if (!history.length) return null;

  return (
    <div className="mt-6 bg-white border rounded-xl p-4 shadow">
      <h3 className="font-bold mb-3">🕒 Recent Scans</h3>

      <div className="space-y-2 text-sm">
        {history.map((h, i) => (
          <div key={i} className="flex justify-between border-b pb-1">
            <span className="text-gray-700">
              {h.input.length > 35 ? h.input.slice(0, 35) + "..." : h.input}
            </span>
            <span className="font-semibold">{h.risk}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
