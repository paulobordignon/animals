"use client";

import { useEffect, useState } from "react";
import { Header } from "@/app/_components";
import { getAnimals } from "@/app/_services/requests";

export default function Page({ params }: any) {
  const [animals, setAnimals] = useState<any[]>();

  useEffect(() => {
    setAnimals(getAnimals());
  }, []);
  return (
    <>
      <Header />
      <main className="">
        {animals && (
          <>
            {animals.map((item) => (
              <p key={item.id}>Post: {item.title}</p>
            ))}
          </>
        )}
      </main>
    </>
  );
}
