import Image from 'next/image';
type CompanyHeaderProps = {
  coverPhotoUrl: string;
  profilePhotoUrl: string;
};
export default function CompanyHeader({ coverPhotoUrl, profilePhotoUrl }: CompanyHeaderProps) {
  return (
    <header className="relative lg:mb-16">
      <div className="hidden items-center justify-center lg:flex">
        <Image src={'/assets/company/cover.png'} alt="cover photo" width={1600} height={456} />
      </div>
      <div className="absolute left-8 top-96 hidden h-[150px] w-[150px] items-center justify-center rounded-full bg-white lg:flex">
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
