"use client";

import { useEffect, useState } from "react";

import { Header, ResultWarnText } from "@/app/_components";
import { getAnimals } from "@/app/_services/requests";

export default function Page({ params }: any) {
  const searchTerm = params.id;
  const [animals, setAnimals] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const result = getAnimals();

    setAnimals(
      result.filter((item) => {
        if (
          item.title.indexOf(searchTerm) > -1 ||
          item.type.indexOf(searchTerm) > -1
        ) {
          return item;
        }
      })
    );

    setLoading(false);
  }, []);

  return (
    <>
      <Header variation={"search"} />
      <main className="flex min-h-screen max-w-screen-xl pt-36 sm:pt-28 mx-auto px-5">
        {!loading ? (
          <>
            {animals?.length ? (
              <div className="flex flex-col">
                {animals.map((item) => (
                  <p key={item.id}>Post: {item.url}</p>
                ))}
              </div>
            ) : (
              <ResultWarnText searchTerm={searchTerm} />
            )}
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}
