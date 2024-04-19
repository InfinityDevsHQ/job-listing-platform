import Image from "next/image";
type PosterProps = {
  imgUrl: string;
  heading: string;
  text: string;
};
export default function Poster({ imgUrl, heading, text }: PosterProps) {
  return (
    <div className="relative h-screen overflow-hidden hidden lg:flex justify-center items-center bg-primary-900/90">
      <Image
        src={"/assets/forms/poster_bg-1.png"}
        alt="Background"
        className="absolute top-0 left-0 -z-10"
        width={753}
        height={450}
      />
      <Image
        src={"/assets/forms/poster_bg-2.png"}
        alt="Background"
        className="absolute bottom-0 right-0 -z-10"
        width={1029}
        height={615}
      />
      <div className="flex flex-col gap-10">
        <div className="flex-center">
          <Image src={imgUrl} alt="poster" width={500} height={500} />
        </div>
        <div className="flex-center flex-col gap-5 text-white px-14">
          <h3 className="text-32 font-bold leading-40">{heading}</h3>
          <p className="text-16 text-center font-sans font-normal leading-6">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
