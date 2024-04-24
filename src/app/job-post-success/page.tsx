import Image from "next/image";

export default function JobPostSuccess() {
  return (
    <div className="flex items-center justify-center relative bg-white mt-4 lg:mt-8">
      <Image
        src="/assets/party.png"
        width={1684}
        height={1820}
        alt="party
      "
        className=""
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
        <h3 className="font-sans font-bold text-xl lg:text-6xl text-gray-700 text-center">
          Congratulations!
        </h3>
        <p className="text-center font-sans text-gray-500 text-sm lg:text-3xl">
          You Have Successfully Posted Job
        </p>
      </div>
    </div>
  );
}
