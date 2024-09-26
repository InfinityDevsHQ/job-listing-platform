import Image from 'next/image';
type CompanyHeaderProps = {
  coverPhotoUrl: string;
  profilePhotoUrl: string;
};
export default function CompanyHeader({ coverPhotoUrl, profilePhotoUrl }: CompanyHeaderProps) {
  return (
    <header className="relative lg:mb-16">
      <div className="hidden items-center justify-center lg:flex">
        <Image
          src={coverPhotoUrl}
          alt="cover photo"
          width={1600}
          height={456}
          quality={100}
          className="rounded-lg"
        />
      </div>
      <div className="absolute bottom-0 left-8 hidden translate-y-1/2 items-center justify-center rounded-full border border-dark-background3 bg-dark-primary lg:flex lg:h-[150px] lg:w-[150px]">
        <Image
          src={profilePhotoUrl}
          alt="profile"
          width={150}
          height={150}
          className=" h-auto w-auto rounded-full"
        />
      </div>
    </header>
  );
}
