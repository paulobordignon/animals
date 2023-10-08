export function Skeleton() {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-3 py-1">
        <div className="h-3 bg-gray-100 w-3/5"></div>
        <div className="h-4 bg-gray-100 w-4/5"></div>
        <div className="h-3 bg-gray-100"></div>
      </div>
    </div>
  );
}
