import Image from 'next/image';

export default function JobPostSuccess() {
  return (
    <section className="success relative my-4 flex items-center justify-center rounded-md border border-gray-200 bg-gray-50 lg:my-8">
      <Image
        src="/assets/party.png"
        width={1684}
        height={1820}
        alt="party"
        className="absolute top-0"
      />
      <div className="absolute flex flex-col gap-4 lg:gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/success.png"
            alt="Flowers"
            width={400}
            height={305}
            className="hidden lg:inline-block"
          />
          <Image
            src="/assets/success.png"
            alt="Flowers"
            width={200}
            height={153}
            className="lg:hidden"
          />
        </div>
        <h3 className="text-center font-sans text-xl font-bold text-gray-700 lg:text-6xl">
          Congratulations!
        </h3>
        <p className="text-center font-sans text-sm text-gray-500 lg:text-3xl">
          You Have Successfully Posted Job
        </p>
      </div>
    </section>
  );
}
