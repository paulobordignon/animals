import Image from "next/image";
import searchIcon from "@/app/_assets/icons/search.svg";
import IInput from "./types";

export function Input({ variation = "home", ...rest }: IInput) {
  return (
    <div>
      <Image
        className={`pointer-events-none absolute ${
          variation === "home" ? "mt-4 ml-3" : "mt-2 ml-3"
        }`}
        src={searchIcon}
        alt="search icon"
      />
      <input
        type="search"
        className={`border rounded-full w-full pl-10 ${
          variation === "home" ? "p-3" : "p-1"
        }`}
        {...rest}
      />
    </div>
  );
}
