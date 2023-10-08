export function ResultWarnText({ searchTerm }: { searchTerm?: string }) {
  return (
    <div>
      {searchTerm && (
        <p className="text-sm mb-4">
          No results found for: <strong>&apos;{searchTerm}&apos;</strong>
        </p>
      )}
      <p className="text-sm">
        Try looking for:{" "}
        <strong>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
          cat, snake, dog, bird.
        </strong>
      </p>
    </div>
  );
}
