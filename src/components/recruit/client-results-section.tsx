import Image from 'next/image';
export default function ClientResultsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-gray-700 lg:text-5xl">Our clients results</h2>
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-2 flex gap-4 lg:order-1 lg:col-span-1 lg:flex-col lg:gap-16">
          <div className="flex w-full flex-col items-center justify-center gap-1 border border-gray-200 p-2 lg:w-auto lg:border-none lg:p-0 ">
            <span className="text-lg font-bold text-gray-700 lg:text-6xl">4x</span>
            <span className="text-center text-sm font-light text-gray-700 lg:text-3xl">
              Attract 4x more direct candidates
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-1 border border-gray-200 p-2 lg:w-auto lg:border-none lg:p-0 ">
            <span className="text-lg font-bold text-gray-700 lg:text-6xl">50%</span>
            <span className="text-center text-sm font-light text-gray-700 lg:text-3xl">
              Cut time-to-hire by 50%
            </span>
          </div>
        </div>
        <div className="relative order-1 flex flex-col gap-4 lg:order-2 lg:col-span-3">
          <Image
            src="/assets/images/recruit/smart_solutions_for_big_challenges.png"
            width={800}
            height={602}
            alt="smart_solutions_for_big_challenges"
            className="mx-auto h-72 w-full max-w-lg lg:h-96"
          />
          <span className="relative -top-8 mx-auto max-w-xl text-center text-2xl font-semibold text-green-700 lg:-top-16 lg:text-4xl">
            Smart solutions for big challenges
          </span>
        </div>
        <div className="order-3 flex gap-4 lg:col-span-1 lg:flex-col  lg:gap-16">
          <div className="flex w-full flex-col items-center justify-center gap-1 border border-gray-200 p-2 lg:w-auto lg:border-none lg:p-0 ">
            <span className="text-lg font-bold text-gray-700 lg:text-6xl">70%</span>
            <span className="text-center text-sm font-light text-gray-700 lg:text-3xl">
              Speed up HR documentation by 70%
            </span>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-1 border border-gray-200 p-2 lg:w-auto lg:border-none lg:p-0 ">
            <span className="text-lg font-bold text-gray-700 lg:text-6xl">6x</span>
            <span className="text-center text-sm font-light text-gray-700 lg:text-3xl">
              Screen CVs 6 times faster
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
