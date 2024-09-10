import Image from 'next/image';

export default function JobPostSuccess() {
  return (
    <section className="p-4 lg:p-8">
      <div className="lg:success relative mx-auto flex min-h-96 max-w-screen-2xl items-center justify-center rounded-lg border border-dark-background3 bg-dark-background lg:h-[70vh]">
        <Image
          src="/assets/party.png"
          width={1684}
          height={1820}
          alt="party"
          className="absolute top-0"
        />
        <div className="absolute bottom-16 flex flex-col justify-center gap-4 md:bottom-14 lg:bottom-4 lg:gap-8 xl:bottom-6">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/success.png"
              alt="Flowers"
              width={350}
              height={250}
              className="hidden lg:inline-block"
            />
            <Image
              src="/assets/success.png"
              alt="Flowers"
              width={200}
              height={200}
              className="lg:hidden"
            />
          </div>
          <h3 className="text-center font-sans text-xl font-bold text-dark-nameWhite sm:text-4xl md:text-5xl lg:text-6xl">
            Congratulations!
          </h3>
          <p className="text-center font-sans text-sm text-dark-name lg:text-3xl">
            You Have Successfully Posted Job
          </p>
        </div>
      </div>
    </section>
  );
}
