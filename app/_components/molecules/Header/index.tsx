"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import menuIcon from "@/app/_assets/icons/menu.svg";
import loadingIcon from "@/app/_assets/icons/loading.svg";

export function Header() {
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    setAvatar(sessionStorage.getItem("Avatar") as string);
  }, []);
  return (
    <header className="fixed w-full z-10 border">
      <nav className="flex justify-between max-w-screen-xl items-center h-20 mx-auto px-5">
        <div>
          <p className="font-bold text-lg">Animals</p>
        </div>
        <div className="flex gap-4">
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
        </div>
      </nav>
    </header>
  );
}
