export function Footer() {
  return (
    <footer className="fixed w-full bg-gray-100 bottom-0">
      <nav className="flex justify-between max-w-screen-xl items-center h-14 mx-auto px-5">
        <p>@ Animals {new Date().getFullYear()}</p>
        <p>version: 0.1.0</p>
      </nav>
    </footer>
  );
}
