import Image from "next/image";
import IResultCardDetails from "./types";

export function ResultCardDetails({ data }: IResultCardDetails) {
  return (
    <div className="border">
      <div className="p-3">
        <Image
          className="ml-auto mr-auto"
          src={data.image}
          width={400}
          height={400}
          alt="animal image"
        />
        <p className="text-xs text-gray-700 mt-2">{data.url}</p>
        <p className="text-gray-800 font-bold my-1">{data.title}</p>
        <p className="text-sm text-gray-700 text-justify">{data.description}</p>
      </div>
    </div>
  );
}
