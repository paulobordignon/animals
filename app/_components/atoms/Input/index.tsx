import { InputHTMLAttributes } from "react";
import Image from "next/image";
import searchIcon from "@/app/_assets/icons/search.svg";

export function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Image
        className="pointer-events-none absolute mt-3 ml-3"
        src={searchIcon}
        alt="search icon"
      />
      <input
        type="search"
        className="border p-3 rounded-full w-full pl-12"
        {...rest}
      />
    </div>
  );
}
