import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  Star,
  Users,
  Utensils,
  ChefHat,
} from "lucide-react";

export default async function RecipeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/recipes/${id}`,
    {
      cache: "no-store",
    }
  );

  const recipe = await response.json();

  return (
    <main className="min-h-screen bg-[#F6E8DC] font-serif">

      <div className="h-2 bg-[#8B1E1E]" />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-10">

        <Link
          href="/recipes"
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#8B1E1E] px-5 py-3 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4C95D] hover:text-[#8B1E1E] hover:shadow-xl sm:mb-8 sm:gap-3 sm:px-6 sm:text-base"
        >

          <ArrowLeft size={18} />

          <span>Back to Recipes</span>

        </Link>

        <section className="relative overflow-hidden rounded-[2rem] bg-[#2B1111] shadow-2xl sm:rounded-[2.5rem]">

          <div className="relative h-[420px] sm:h-[500px]">

            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-5 max-w-3xl sm:bottom-10 sm:left-8 md:left-12">

              <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">

                <span className="h-px w-8 bg-[#F4C95D] sm:w-10" />

                <span className="text-xs font-bold tracking-[0.2em] text-[#F4C95D] sm:text-sm sm:tracking-[0.3em]">
                  SIGNATURE RECIPE
                </span>

              </div>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
                {recipe.name}
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:mt-4 sm:text-lg sm:leading-8">
                {recipe.description}
              </p>

            </div>

          </div>

        </section>

        <section className="relative z-10 mx-2 -mt-8 rounded-[1.5rem] bg-[#FFFDF8] p-4 shadow-2xl sm:mx-4 sm:-mt-10 sm:rounded-[2rem] sm:p-6 md:mx-12 md:p-8">

          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">

            <div className="flex items-center gap-2 border-r border-[#8B1E1E]/10 px-2 sm:gap-4 sm:px-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B1E1E] text-[#F4C95D] sm:h-12 sm:w-12">

                <Clock3 size={20} className="sm:h-[22px] sm:w-[22px]" />

              </div>

              <div className="min-w-0">

                <p className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                  COOK TIME
                </p>

                <p className="mt-1 text-sm font-bold text-[#8B1E1E] sm:text-base">
                  {recipe.cookTimeMinutes} min
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 border-r border-[#8B1E1E]/10 px-2 sm:gap-4 sm:px-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4C95D] text-[#8B1E1E] sm:h-12 sm:w-12">

                <Star size={20} className="sm:h-[22px] sm:w-[22px]" />

              </div>

              <div className="min-w-0">

                <p className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                  RATING
                </p>

                <p className="mt-1 text-sm font-bold text-[#8B1E1E] sm:text-base">
                  {recipe.rating}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 border-r border-[#8B1E1E]/10 px-2 sm:gap-4 sm:px-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B1E1E] text-[#F4C95D] sm:h-12 sm:w-12">

                <Users size={20} className="sm:h-[22px] sm:w-[22px]" />

              </div>

              <div className="min-w-0">

                <p className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                  SERVINGS
                </p>

                <p className="mt-1 text-sm font-bold text-[#8B1E1E] sm:text-base">
                  {recipe.servings}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-2 px-2 sm:gap-4 sm:px-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4C95D] text-[#8B1E1E] sm:h-12 sm:w-12">

                <Utensils size={20} className="sm:h-[22px] sm:w-[22px]" />

              </div>

              <div className="min-w-0">

                <p className="text-[10px] font-bold tracking-wider text-gray-400 sm:text-xs">
                  CUISINE
                </p>

                <p className="mt-1 truncate text-sm font-bold text-[#8B1E1E] sm:text-base">
                  {recipe.cuisine}
                </p>

              </div>

            </div>

          </div>

        </section>

        <div className="mt-12 grid gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <section>

            <div className="mb-6 sm:mb-8">

              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#8B1E1E] sm:text-sm sm:tracking-[0.25em]">
                WHAT YOU NEED
              </p>

              <h2 className="flex items-center gap-2 text-3xl font-bold text-[#8B1E1E] sm:gap-3 sm:text-4xl">

                <ChefHat size={30} className="shrink-0 sm:h-[34px] sm:w-[34px]" />

                Ingredients

              </h2>

            </div>

            <div className="rounded-[1.5rem] bg-[#FFFDF8] p-5 shadow-xl sm:rounded-[2rem] sm:p-7">

              <div className="space-y-3">

                {recipe.ingredients.map(
                  (ingredient: string, index: number) => (
                    <div
                      key={index}
                      className="group flex items-center gap-3 rounded-xl border-b border-[#8B1E1E]/10 px-2 py-3 transition hover:bg-[#F6E8DC] sm:gap-4 sm:px-3 sm:py-4"
                    >

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4C95D] text-sm font-bold text-[#8B1E1E]">
                        {index + 1}
                      </div>

                      <span className="text-sm leading-6 text-gray-700 sm:text-base">
                        {ingredient}
                      </span>

                    </div>
                  )
                )}

              </div>

            </div>

          </section>

          <section>

            <div className="mb-6 sm:mb-8">

              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#8B1E1E] sm:text-sm sm:tracking-[0.25em]">
                COOK LIKE A CHEF
              </p>

              <h2 className="flex items-center gap-2 text-3xl font-bold text-[#8B1E1E] sm:gap-3 sm:text-4xl">

                <Utensils size={30} className="shrink-0 sm:h-[34px] sm:w-[34px]" />

                Instructions

              </h2>

            </div>

            <div className="space-y-5">

              {recipe.instructions.map(
                (instruction: string, index: number) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-[1.5rem] bg-[#FFFDF8] p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                  >

                    <div className="absolute left-0 top-0 h-full w-1 bg-[#F4C95D]" />

                    <div className="flex gap-3 sm:gap-5">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B1E1E] text-sm font-bold text-[#F4C95D] sm:h-12 sm:w-12 sm:text-base">
                        {index + 1}
                      </div>

                      <div className="min-w-0">

                        <p className="mb-2 text-xs font-bold tracking-[0.15em] text-[#8B1E1E] sm:tracking-[0.2em]">
                          STEP {index + 1}
                        </p>

                        <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                          {instruction}
                        </p>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>

          </section>

        </div>

        <div className="mt-12 flex items-center justify-center gap-3 pb-6 text-xs font-bold tracking-[0.15em] text-[#8B1E1E]/60 sm:mt-16 sm:pb-8 sm:text-sm sm:tracking-[0.2em]">

          ENJOY YOUR MEAL

        </div>

      </div>

    </main>
  );
}