import Image from "next/image";
type PosterProps = {
  imgUrl: string;
  heading: string;
  text: string;
};
export default function Poster({ imgUrl, heading, text }: PosterProps) {
  return (
    <div className="hidden lg:flex justify-center items-center bg-primary-900 h-full">
      <div className="flex flex-col gap-10">
        <div className="flex-center">
          <Image src={imgUrl} alt="poster" width={535} height={535} />
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
