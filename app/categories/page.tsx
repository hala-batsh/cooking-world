import Navbar from "../../components/Navbar";

import { Suspense } from "react";

import CategoriesContent from "../../components/CategoriesContent";

export default function Categories() {
  return (
    <>

      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#F6E8DC] px-4 py-12 font-serif sm:px-6 sm:py-16 md:px-8">

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="pointer-events-none absolute right-[-120px] top-[35%] h-96 w-96 rounded-full bg-[#F4C95D]/15" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-12 text-center sm:mb-16">

            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#8B1E1E] sm:text-sm">
              TASTE THE WORLD
            </p>

            <h1 className="text-4xl font-bold text-[#8B1E1E] sm:text-5xl">
              Choose Your Cuisine
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base text-gray-600 sm:text-lg">
              One click can take you to a whole new world of flavors.
            </p>

          </div>

          <Suspense
            fallback={
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">

                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-[340px] animate-pulse rounded-[2rem] bg-[#FFFDF8] shadow-xl sm:h-[390px]"
                  />
                ))}

              </div>
            }
          >

            <CategoriesContent />

          </Suspense>

        </div>

      </main>
    </>
  );
}