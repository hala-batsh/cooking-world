import Link from "next/link";

import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export default function Footer() {

    return (

        <footer className="bg-[#6B3A3A] text-white">

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-8">

                <div className="grid gap-10 md:grid-cols-3">

                    <div>

                        <h2 className="font-serif text-2xl font-bold tracking-wide text-[#F4C95D] sm:text-3xl">
                            Cooking World
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                            Discover delicious recipes and explore a world of flavors.
                        </p>

                    </div>

                    <div>

                        <h3 className="mb-5 font-serif text-xl font-bold text-[#F4C95D]">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-3">

                            <Link
                                href="/"
                                className="text-sm text-white/80 transition-colors duration-300 hover:text-[#F4C95D]"
                            >
                                Home
                            </Link>

                            <Link
                                href="/recipes"
                                className="text-sm text-white/80 transition-colors duration-300 hover:text-[#F4C95D]"
                            >
                                Recipes
                            </Link>

                            <Link
                                href="/categories"
                                className="text-sm text-white/80 transition-colors duration-300 hover:text-[#F4C95D]"
                            >
                                Categories
                            </Link>

                            <Link
                                href="/favorites"
                                className="text-sm text-white/80 transition-colors duration-300 hover:text-[#F4C95D]"
                            >
                                Favorites
                            </Link>

                            <Link
                                href="/login"
                                className="text-sm text-white/80 transition-colors duration-300 hover:text-[#F4C95D]"
                            >
                                Login
                            </Link>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-5 font-serif text-xl font-bold text-[#F4C95D]">
                            Contact Us
                        </h3>

                        <div className="mb-5 flex items-center gap-3">

                            <Phone
                                size={19}
                                className="shrink-0 text-[#F4C95D]"
                            />

                            <span className="break-all text-sm text-white/80">
                                +963 225 456 214
                            </span>

                        </div>

                        <div className="flex items-center gap-3">

                            <Mail
                                size={19}
                                className="shrink-0 text-[#F4C95D]"
                            />

                            <span className="break-all text-sm text-white/80">
                                info@cookingworld.com
                            </span>

                        </div>

                    </div>

                </div>

                <div className="my-8 border-t border-white/20" />

                <div className="text-center">

                    <p className="text-sm text-white/70">
                        © 2026 Cooking World. All rights reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}