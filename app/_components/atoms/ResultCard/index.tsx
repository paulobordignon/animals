import IResultCard from "./types";

export function ResultCard({ data, handleShowDetails }: IResultCard) {
  return (
    <button
      className="text-left"
      onClick={(e) => {
        e.stopPropagation();
        handleShowDetails(data);
      }}
      data-cy="result-card"
    >
      <p className="text-xs text-gray-700">{data.url}</p>
      <p className="text-blue-800 text-lg my-1">{data.title}</p>
      <p className="text-sm text-gray-700">{data.description}</p>
    </button>
  );
}
