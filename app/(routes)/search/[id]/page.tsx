"use client";

import { useEffect, useState } from "react";
import {
  Header,
  ResultCard,
  ResultCardDetails,
  ResultWarnText,
  Skeleton,
} from "@/app/_components";
import { getAnimals } from "@/app/_services/requests";

export default function Page({ params }: any) {
  const searchTerm = decodeURI(params.id);
  const [loading, setLoading] = useState<boolean>(true);
  const [animals, setAnimals] = useState<any[]>([]);
  const [animalSelected, setAnimalSelected] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const result = getAnimals();

    // THE FILTER METHOD TAKES SOME TIME TO RETRIEVE THE DATA IN THIS WAY
    // IT'LL NOT BE NECESSARY TO USE A PROMISE TO SIMULATE A DELAY AND SHOW A SKELETON.
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

  const handleShowDetails = (animal: any) => {
    setAnimalSelected(animal);
    // WHEN MOBILE/TABLET IF THE USER CLICKS OUTSIDE OF THE MODAL(IN ANOTHER RESULT LINK) THE MODAL WILL BE CLOSED.
    setShowModal((prevState) => !prevState);
  };

  // WHEN THE USER CLICKS ON THE HEADER USING MOBILE/TABLET THE MODAL WILL BE CLOSED.
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main onClick={handleCloseModal}>
      <Header variation={"search"} />
      <section className="flex justify-center min-h-screen max-w-screen-xl pt-36 sm:pt-28 mx-auto px-5">
        {!loading ? (
          <>
            {animals?.length ? (
              <div className="flex max-w-screen-lg gap-3">
                <>
                  <div className="flex flex-col lg:basis-2/3 gap-7">
                    {animals.map((item) => (
                      <ResultCard
                        key={item.id}
                        data={item}
                        handleShowDetails={handleShowDetails}
                      />
                    ))}
                  </div>
                  <div className="hidden lg:block lg:sticky lg:basis-1/3">
                    {animalSelected && (
                      <div className="bg-white sticky top-28">
                        <ResultCardDetails data={animalSelected} />
                      </div>
                    )}
                  </div>
                  {showModal && (
                    <div
                      className="fixed z-50 w-full px-6 lg:hidden
                  top-1/2 -translate-y-1/2 left-1/4 -translate-x-1/4 
                  sm:left-1/2 sm:-translate-x-1/2 sm:w-fit sm:px-0"
                    >
                      {animalSelected && (
                        <div className="shadow-3xl bg-white">
                          <ResultCardDetails data={animalSelected} />
                        </div>
                      )}
                    </div>
                  )}
                </>
              </div>
            ) : (
              <article className="w-[1024px]">
                <ResultWarnText searchTerm={searchTerm} />
              </article>
            )}
          </>
        ) : (
          <div className="flex flex-col w-full gap-7 max-w-screen-lg">
            {[...new Array(7)].map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
