import Image from "next/image";
import { IHeader } from "./types";

export function Header(data: IHeader) {
  return (
    <header className="fixed w-full z-10 border">
      <nav className="flex justify-between max-w-screen-xl items-center h-20 mx-auto px-5">
        <div>
          <p className="font-bold">Animals</p>
        </div>
        <div>
          <Image
            src={`${data.avatar}`}
            className="rounded-full"
            width={30}
            height={30}
            alt="user profile picture"
          />
        </div>
      </nav>
    </header>
  );
}
