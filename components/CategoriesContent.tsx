
import Link from "next/link";

import {
  ArrowUpRight,
  Pizza,
  Soup,
  Utensils,
  ChefHat,
  Salad,
  Fish,
  Globe2,
  Flame,
} from "lucide-react";

export default async function CategoriesContent() {

  const response = await fetch("https://dummyjson.com/recipes", {
    cache: "force-cache",
  });

  const data = await response.json();

  const categories: string[] = [];

  data.recipes.forEach((recipe: any) => {

    if (!categories.includes(recipe.cuisine)) {
      categories.push(recipe.cuisine);
    }
  });

  const categoryImages: Record<string, string> = {

    Italian:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=90",

    Asian:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90",

    Mexican:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1000&q=90",

    American:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=90",

    Mediterranean:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=90",

    Indian:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=90",

    Japanese:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1000&q=90",

    French:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=90",
  };

  const fallbackImages = [

    "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1000&q=90",

    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=90",
  ];

  const icons = [
    Pizza,
    Soup,
    Utensils,
    ChefHat,
    Salad,
    Fish,
    Globe2,
    Flame,
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">

      {categories.map((category, index) => {

        const image =
          categoryImages[category] ||
          fallbackImages[index % fallbackImages.length];

        const Icon = icons[index % icons.length];

        return (
          <Link
            key={category}
            href={`/categories/${encodeURIComponent(category)}`}
            className="group relative h-[340px] overflow-hidden rounded-[2rem] shadow-xl sm:h-[390px]"
          >

            <img
              src={image}
              alt={category}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition duration-500 group-hover:from-[#8B1E1E]/90" />

            <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F4C95D] text-[#8B1E1E] shadow-xl transition duration-300 group-hover:scale-110 group-hover:rotate-6 sm:left-6 sm:top-6 sm:h-14 sm:w-14">

              <Icon size={26} strokeWidth={2} />

            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

              <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[#F4C95D] sm:text-sm">
                CUISINE
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {category}
              </h2>

              <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">

                <span className="text-xs font-semibold text-white/90 sm:text-sm">
                  Discover recipes
                </span>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4C95D] text-[#8B1E1E] transition duration-300 group-hover:scale-110 group-hover:bg-white sm:h-12 sm:w-12">

                  <ArrowUpRight size={22} />

                </div>

              </div>

            </div>

            <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent transition duration-300 group-hover:border-[#F4C95D]" />

          </Link>
        );
      })}

    </div>
  );
}