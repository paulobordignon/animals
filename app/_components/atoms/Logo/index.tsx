export function Logo({ fontSize }: { fontSize: string }) {
  return (
    <p className={`${fontSize} font-bold`}>
      <span className="text-blue-600">A</span>
      <span className="text-red-500">n</span>
      <span className="text-yellow-300">i</span>
      <span className="text-blue-600">m</span>
      <span className="text-green-600">a</span>
      <span className="text-red-500">l</span>
      <span className="text-yellow-300">s</span>
    </p>
  );
}
