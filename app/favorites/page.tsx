"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import RecipeCard from "../../components/RecipeCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {

    const loadFavorites = () => {

      const savedFavorites = localStorage.getItem("favorites");

      if (savedFavorites) {

        setFavorites(JSON.parse(savedFavorites));

      } else {

        setFavorites([]);
      }
    };

    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
    };

  }, []);

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#F6E8DC] px-4 py-12 font-serif sm:px-6 sm:py-16 md:px-8">

        <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="pointer-events-none absolute right-[-120px] top-[35%] h-96 w-96 rounded-full bg-[#F4C95D]/15" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[35%] h-80 w-80 rounded-full bg-[#8B1E1E]/5" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="mb-12 text-center sm:mb-14">

            <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#8B1E1E] sm:text-sm">
              YOUR COLLECTION
            </p>

            <h1 className="text-4xl font-bold text-[#8B1E1E] sm:text-5xl md:text-6xl">
              Favorites
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Your favorite recipes, all in one place.
            </p>

          </div>

          {favorites.length > 0 ? (

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3">

              {favorites.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                />
              ))}

            </div>

          ) : (

            <div className="mx-auto max-w-xl rounded-2xl bg-white px-5 py-12 text-center shadow-[0_8px_25px_rgba(45,20,15,0.10)] sm:px-8 sm:py-16">

              <h2 className="text-2xl font-semibold text-[#321717]">
                No favorites yet
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Start exploring recipes and save the ones you love.
              </p>

            </div>

          )}

        </div>

      </main>
    </>
  );
}