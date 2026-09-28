
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#F6E8DC] px-4 py-12 font-serif sm:px-6 sm:py-16 md:px-8">

      <div className="mx-auto mb-12 max-w-7xl text-center sm:mb-16">

        <div className="mx-auto h-5 w-32 animate-pulse rounded-full bg-[#8B1E1E]/20 sm:w-40" />

        <div className="mx-auto mt-5 h-10 w-72 max-w-full animate-pulse rounded-xl bg-[#8B1E1E]/20 sm:h-12 sm:w-96" />

        <div className="mx-auto mt-5 h-5 max-w-2xl animate-pulse rounded-full bg-gray-300" />

      </div>

      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-[340px] animate-pulse rounded-[2rem] bg-[#FFFDF8] shadow-xl sm:h-[390px]"
          />
        ))}

      </div>

    </main>
  );
}