import { Header, ResultWarnText } from "@/app/_components";

export default function Page() {
  return (
    <>
      <Header variation="search" />
      <main className="flex min-h-screen max-w-screen-xl pt-36 sm:pt-28 mx-auto px-5">
        <ResultWarnText />
      </main>
    </>
  );
}
