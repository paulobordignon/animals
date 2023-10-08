"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Footer, Header, Input, Logo } from "@/app/_components";
import { getUserLogo } from "@/app/_services/requests";

export default function Home() {
  const router = useRouter();
  const searchTerm = useRef();

  const handleInputValue = (event: any) => {
    searchTerm.current = event.target.value;
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(
      searchTerm.current ? `/search/${searchTerm.current}` : "/search"
    );
  };

  useEffect(() => {
    if (!sessionStorage.getItem("Avatar")) {
      const userLogo = getUserLogo();
      sessionStorage.setItem("Avatar", userLogo);
    }
  }, []);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form
          className="flex flex-col w-screen items-center"
          onSubmit={handleSearch}
        >
          <Logo fontSize="text-7xl" />
          <div className="w-5/6 lg:w-3/6 xl:w-2/6 mt-6">
            <Input onChange={handleInputValue} value={searchTerm.current} />
          </div>
          <button
            className="rounded-md bg-gray-100 py-3 px-4 mt-8"
            type="submit"
          >
            Buscar
          </button>
        </form>
        <Footer />
      </main>
    </>
  );
}
