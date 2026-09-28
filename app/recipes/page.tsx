import Navbar from "../../components/Navbar";
import RecipeCard from "../../components/RecipeCard";

export default async function Recipes() {

  const response = await fetch("https://dummyjson.com/recipes");

  const data = await response.json();

  const recipes = data.recipes || [];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#F6E8DC] px-4 py-12 font-serif sm:px-6 sm:py-16 md:px-8">

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="pointer-events-none absolute right-[-120px] top-[35%] h-96 w-96 rounded-full bg-[#F4C95D]/15" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-12 text-center sm:mb-14">

            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8B1E1E] sm:text-sm sm:tracking-[0.3em]">
              EXPLORE & DISCOVER
            </p>

            <h1 className="text-4xl font-bold text-[#8B1E1E] sm:text-5xl md:text-6xl">
              Our Recipes
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
              Discover delicious recipes, explore new flavors,
              and find your next favorite meal.
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">

            {recipes.map((recipe: any) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))}

          </div>

        </div>

      </main>
    </>
  );
}