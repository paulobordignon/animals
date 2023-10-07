import { Input, Header, Footer } from "@/app/_components";
import { getUserLogo } from "@/app/_services/requests";

export default async function Home() {
  const userLogo = await getUserLogo();

  return (
    <>
      <Header avatar={userLogo} />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form className="flex flex-col w-screen items-center">
          <p className="text-7xl font-bold mb-5">
            <span className="text-blue-600">A</span>
            <span className="text-red-500">n</span>
            <span className="text-yellow-300">i</span>
            <span className="text-blue-600">m</span>
            <span className="text-green-600">a</span>
            <span className="text-red-500">l</span>
            <span className="text-yellow-300">s</span>
          </p>
          <Input />
        </form>
      </main>
      <Footer />
    </>
  );
}
