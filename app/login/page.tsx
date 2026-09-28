import Navbar from "../../components/Navbar";
import Link from "next/link";
import { loginAction } from "./actions";

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "invalid";

  return (
    <>
      <Navbar />

      {/* صفحة تسجيل الدخول */}
      {/* تم تعديل المسافات والأحجام فقط لتناسب شاشات الموبايل */}
      <main className="min-h-screen bg-[#F6E8DC] px-4 py-12 font-serif sm:px-6 sm:py-16">

        <div className="mx-auto flex min-h-[550px] max-w-7xl items-center justify-center sm:min-h-[650px]">

          {/* بطاقة تسجيل الدخول */}
          <div className="w-full max-w-md rounded-[2rem] bg-[#FFFDF8] p-6 shadow-2xl sm:p-8 md:p-10">

            <div className="mb-7 text-center sm:mb-8">

              <p className="mb-3 text-xs font-bold tracking-[0.2em] text-[#8B1E1E] sm:text-sm sm:tracking-[0.3em]">
                WELCOME BACK
              </p>

              <h1 className="text-3xl font-bold text-[#8B1E1E] sm:text-4xl">
                Login
              </h1>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Sign in to continue your Cooking World journey.
              </p>

            </div>

            {hasError && (
              <div className="mb-6 rounded-xl bg-[#F6E8DC] px-3 py-3 text-center text-sm font-semibold text-[#8B1E1E] sm:px-4">
                Invalid email or password.
              </div>
            )}

            <form action={loginAction} className="space-y-5">

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#321717]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-[#8B1E1E]/15 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#8B1E1E] sm:text-base"
                />

              </div>

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-[#321717]"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-[#8B1E1E]/15 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#8B1E1E] sm:text-base"
                />

              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#8B1E1E] px-5 py-3.5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4C95D] hover:text-[#8B1E1E] sm:px-6"
              >
                Login
              </button>

            </form>

            <div className="mt-6 text-center">

              <Link
                href="/recipes"
                className="text-sm font-semibold text-[#8B1E1E]"
              >
                Continue as guest
              </Link>

            </div>

          </div>

        </div>

      </main>
    </>
  );
}