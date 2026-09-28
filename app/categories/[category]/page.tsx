import Navbar from "../../../components/Navbar";

import RecipeCard from "../../../components/RecipeCard";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {

  const { category } = await params;

  const response = await fetch("https://dummyjson.com/recipes");

  const data = await response.json();

  const recipes = data.recipes.filter(
    (recipe: any) =>
      recipe.cuisine.toLowerCase() === category.toLowerCase()
  );

  return (
    <>

      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#F6E8DC] px-8 py-16 font-serif">

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="pointer-events-none absolute right-[-120px] top-[35%] h-96 w-96 rounded-full bg-[#F4C95D]/15" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-2 text-sm font-bold tracking-[0.2em] text-[#8B1E1E]">
              EXPLORE
            </p>

            <h1 className="text-5xl font-bold text-[#8B1E1E]">
              {category} Recipes
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Discover delicious {category} recipes and find your next
              favorite meal.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

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