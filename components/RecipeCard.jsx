"use client";

import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

import { Heart } from "lucide-react";

export default function RecipeCard({ recipe }) {

  const [isFavorite, setIsFavorite] = useState(() => {

    if (typeof window === "undefined") {
      return false;
    }

    const savedFavorites = localStorage.getItem("favorites");

    if (!savedFavorites) {
      return false;
    }

    try {

      const favorites = JSON.parse(savedFavorites);

      if (!Array.isArray(favorites)) {
        return false;
      }

      return favorites.some(
        (item) => item.id === recipe.id
      );

    } catch {

      return false;
    }
  });


  const handleFavorite = (event) => {

    event.preventDefault();

    event.stopPropagation();

    const savedFavorites = localStorage.getItem("favorites");

    let favorites = [];

    try {

      if (savedFavorites) {

        const parsedFavorites = JSON.parse(savedFavorites);

        if (Array.isArray(parsedFavorites)) {
          favorites = parsedFavorites;
        }
      }

    } catch {

      favorites = [];
    }


    const exists = favorites.some(
      (item) => item.id === recipe.id
    );


    let updatedFavorites;


    if (exists) {

      updatedFavorites = favorites.filter(
        (item) => item.id !== recipe.id
      );

      setIsFavorite(false);

    } else {

      updatedFavorites = [...favorites, recipe];

      setIsFavorite(true);
    }


    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );


    window.dispatchEvent(new Event("favoritesUpdated"));
  };


  if (!recipe) return null;


  const totalTime =
    (recipe.prepTimeMinutes || 0) +
    (recipe.cookTimeMinutes || 0);


  return (

    <article className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_25px_rgba(45,20,15,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(45,20,15,0.16)]">

      <div className="relative h-52 overflow-hidden">

        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

        <span className="absolute bottom-4 left-4 z-10 text-xs font-medium uppercase tracking-[0.15em] text-white">
          {recipe.cuisine}
        </span>

        <button
          type="button"
          onClick={handleFavorite}
          className="absolute right-4 top-4 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >

          <Heart
            size={20}
            strokeWidth={1.8}
            className={
              isFavorite
                ? "fill-[#8B1E1E] text-[#8B1E1E]"
                : "text-[#8B1E1E]"
            }
          />

        </button>

      </div>


      <div className="p-5">

        <Link href={`/recipes/${recipe.id}`}>

          <h2 className="line-clamp-2 text-xl font-semibold leading-7 text-[#321717] transition-colors duration-300 hover:text-[#8B1E1E]">
            {recipe.name}
          </h2>

        </Link>


        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#756966]">
          {recipe.description}
        </p>


        <div className="mt-4 flex items-center justify-between">

          <div>

            <span className="block text-[9px] font-semibold uppercase tracking-wider text-[#9A8F8B]">
              Cooking time
            </span>

            <span className="mt-1 block text-sm font-semibold text-[#321717]">
              {totalTime} min
            </span>

          </div>


          <Link
            href={`/recipes/${recipe.id}`}
            className="rounded-lg bg-[#8B1E1E] px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#6F1515]"
          >
            View Recipe
          </Link>

        </div>

      </div>

    </article>
  );
}