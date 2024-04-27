import Image from 'next/image';
export default function CompanyHeader() {
  return (
    <header className="relative lg:mb-16">
      <div className="flex items-center justify-center">
        <Image src={'/assets/company/cover.png'} alt="cover photo" width={1600} height={456} />
      </div>
      <Image
        src={'/assets/company/profile.png'}
        alt="profile"
        width={150}
        height={150}
        className="absolute left-8 top-96 hidden rounded-full lg:inline-block"
      />
    </header>
  );
}
