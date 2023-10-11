"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Logo, Input } from "@/app/_components";
import menuIcon from "@/app/_assets/icons/menu.svg";
import loadingIcon from "@/app/_assets/icons/loading.svg";

export function Header({
  variation = "home",
}: {
  variation?: "home" | "search";
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState<string>(
    decodeURI(pathname.split("/")[2] || "")
  );
  const [avatar, setAvatar] = useState<string>("");

  const handleInputValue = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(searchTerm ? `/search/${searchTerm.toLowerCase()}` : "/search");
  };

  useEffect(() => {
    setAvatar(sessionStorage.getItem("Avatar") as string);
  }, [avatar]);

  const menuAvatarComponent = () => (
    <>
      <button>
        <Image src={menuIcon} width={30} height={30} alt="menu icon" />
      </button>
      <button>
        <Image
          src={avatar || loadingIcon}
          className="rounded-full"
          width={32}
          height={32}
          alt="user profile picture"
        />
      </button>
    </>
  );

  return (
    <header className="fixed w-full z-10 border bg-white">
      {variation === "home" ? (
        <nav className="flex justify-between max-w-screen-xl items-center h-20 mx-auto px-5">
          <div>
            <p className="font-bold text-lg">Animals</p>
          </div>
          <div className="flex gap-4">{menuAvatarComponent()}</div>
        </nav>
      ) : (
        <nav className="flex justify-between max-w-screen-xl items-center  mx-auto px-5 h-28 sm:h-20">
          <div className="w-full lg:w-fit">
            <div className="flex justify-center gap-4 flex-col sm:flex-row sm:items-center sm:gap-4">
              <Link href="/">
                <Logo fontSize="text-3xl sm:text-2xl" />
              </Link>
              <form
                className="sm:w-full sm:pr-2 lg:w-fit"
                onSubmit={handleSearch}
              >
                <Input
                  variation="search"
                  onChange={handleInputValue}
                  value={searchTerm}
                />
              </form>
            </div>
          </div>
          <div className="hidden sm:flex gap-4">{menuAvatarComponent()}</div>
        </nav>
      )}
    </header>
  );
}
