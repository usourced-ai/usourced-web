export function ProductSummaryView({ summary }: { summary: JSX.Element[] }) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white/50 p-4 px-6 text-left text-gray-800 shadow-xl backdrop-blur">
      <h2 className="mb-2 text-3xl">Order Summary</h2>
      {summary.length > 0 ? (
        summary
      ) : (
        <p>Summary of your chat with USourced AI will appear here.</p>
      )}
    </div>
  );
}
