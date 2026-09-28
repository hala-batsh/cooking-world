import Link from "next/link";

export default function Navbar() {

    return (

        <nav className="w-full bg-[#6B3A3A] shadow-lg">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row md:gap-8 md:px-8 md:py-5">

                <div className="font-serif text-2xl font-bold tracking-wide text-[#F4C95D] sm:text-3xl">
                    Cooking World
                </div>

                <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-7 md:w-auto md:flex-nowrap md:gap-10">

                    <Link
                        href="/"
                        className="font-serif text-base text-white transition-all duration-300 hover:text-[#F4C95D] sm:text-lg"
                    >
                        Home
                    </Link>

                    <Link
                        href="/recipes"
                        className="font-serif text-base text-white transition-all duration-300 hover:text-[#F4C95D] sm:text-lg"
                    >
                        Recipes
                    </Link>

                    <Link
                        href="/categories"
                        className="font-serif text-base text-white transition-all duration-300 hover:text-[#F4C95D] sm:text-lg"
                    >
                        Categories
                    </Link>

                    <Link
                        href="/favorites"
                        className="font-serif text-base text-white transition-all duration-300 hover:text-[#F4C95D] sm:text-lg"
                    >
                        Favorites
                    </Link>

                    <Link
                        href="/login"
                        className="rounded-lg bg-[#F4C95D] px-4 py-2 font-serif text-base font-bold text-[#6B3A3A] transition-all duration-300 hover:bg-white hover:text-[#8B1E1E] sm:px-5 sm:text-lg"
                    >
                        Login
                    </Link>

                </div>

            </div>

        </nav>
    );
}