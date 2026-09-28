import Image from "next/image";

import Navbar from "../components/Navbar";

import RecipeCard from "../components/RecipeCard";

import Link from "next/link";

export default async function Home() {

  const response = await fetch("https://dummyjson.com/recipes", {
    next: {
      revalidate: 3600,
    },
  });

  const data = await response.json();

  const recipes = data.recipes;

  return (
    <>

      <Navbar />

      <main className="min-h-screen bg-[#FFFDF8] font-serif">

        <section className="relative min-h-[620px] overflow-hidden bg-[#F8EDE3] sm:min-h-[700px]">

          <div className="absolute -left-16 top-8 h-44 w-56 rotate-[-8deg] overflow-hidden rounded-[2rem] shadow-2xl sm:-left-8 sm:h-56 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=90"
              alt="Gourmet pasta"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute left-[8%] top-[-25px] h-40 w-52 rotate-[5deg] overflow-hidden rounded-[2rem] shadow-2xl sm:left-[18%] sm:top-[-35px] sm:h-52 sm:w-64">

            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=90"
              alt="Fresh gourmet dish"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute right-[8%] top-[-20px] h-48 w-56 rotate-[-5deg] overflow-hidden rounded-[2rem] shadow-2xl sm:right-[15%] sm:top-[-30px] sm:h-60 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90"
              alt="Gourmet meal"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute -right-16 top-28 h-52 w-56 rotate-[8deg] overflow-hidden rounded-[2rem] shadow-2xl sm:-right-10 sm:top-32 sm:h-64 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=90"
              alt="Fresh healthy dish"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute -left-16 bottom-16 h-52 w-56 rotate-[7deg] overflow-hidden rounded-[2rem] shadow-2xl sm:-left-12 sm:bottom-20 sm:h-64 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=90"
              alt="Gourmet breakfast"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute left-[8%] bottom-[-25px] h-48 w-56 rotate-[-6deg] overflow-hidden rounded-[2rem] shadow-2xl sm:left-[17%] sm:bottom-[-35px] sm:h-60 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=90"
              alt="Beautiful food"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute right-[8%] bottom-[-30px] h-52 w-56 rotate-[6deg] overflow-hidden rounded-[2rem] shadow-2xl sm:right-[17%] sm:bottom-[-40px] sm:h-64 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=90"
              alt="Elegant food"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute -right-16 bottom-20 h-44 w-56 rotate-[-7deg] overflow-hidden rounded-[2rem] shadow-2xl sm:-right-10 sm:bottom-24 sm:h-56 sm:w-72">

            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=90"
              alt="Gourmet dinner"
              fill
              className="object-cover"
            />

          </div>

          <div className="absolute inset-0 bg-[#FFFDF8]/25" />

          <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center justify-center px-4 sm:min-h-[700px] sm:px-8">

            <div className="flex flex-col items-center text-center">

              <div className="mb-4 rounded-full bg-[#8B1E1E] px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#F4C95D] shadow-lg sm:mb-5 sm:px-6 sm:text-sm sm:tracking-[0.25em]">
                TASTE • DISCOVER • ENJOY
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#8B1E1E] drop-shadow-sm sm:text-6xl md:text-7xl">

                Welcome to

                <span className="block text-[#8B1E1E]">
                  Cooking World
                </span>

              </h1>

              <p className="mt-4 max-w-2xl px-2 text-base leading-7 text-gray-700 sm:mt-6 sm:text-xl sm:leading-8">
                Discover inspiring recipes, explore delicious flavors,
                and bring something extraordinary to your table.
              </p>

              <Link
                href="/recipes"
                className="mt-6 rounded-full bg-[#8B1E1E] px-7 py-3.5 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4C95D] hover:text-[#8B1E1E] sm:mt-8 sm:px-9 sm:py-4 sm:text-lg"
              >
                Explore Recipes
              </Link>

            </div>

          </div>

        </section>

        <section className="relative overflow-hidden bg-[#F6E8DC] px-4 py-14 sm:px-6 sm:py-20 md:px-8">

          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#8B1E1E]/5" />

          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#F4C95D]/15" />

          <div className="relative z-10 mx-auto max-w-7xl">

            <div className="mb-10 text-center sm:mb-12">

              <p className="mb-2 text-xs font-bold tracking-[0.18em] text-[#8B1E1E] sm:text-sm sm:tracking-[0.2em]">
                DISCOVER
              </p>

              <h2 className="text-3xl font-bold text-[#8B1E1E] sm:text-4xl">
                Popular Recipes
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8">
                Explore our most loved recipes and discover delicious dishes
                that are perfect for every occasion.
              </p>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">

              {recipes.slice(0, 15).map((recipe: any) => (

                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                />

              ))}

            </div>

          </div>

        </section>

      </main>

    </>
  );
}