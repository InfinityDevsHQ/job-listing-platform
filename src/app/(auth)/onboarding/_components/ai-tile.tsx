import Image from 'next/image';

const AITile = () => {
  return (
    <div className="ai-tile-gradient flex items-center gap-2 rounded-md border border-primary-200 p-2">
      <div className="flex items-center justify-center">
        <Image
          src={'/assets/boarding/ai-logo.png'}
          alt="AI Vector Image"
          height={30}
          width={30}
          className="h-auto w-auto lg:hidden"
        />
        <Image
          src={'/assets/boarding/ai-logo.png'}
          alt="AI Vector Image"
          height={101}
          width={101}
          className="hidden h-auto w-auto lg:block"
        />
      </div>
      <p className="text-xs text-gray-500 lg:text-base">
        Our AI algorithms work behind the scenes, transforming your CV into a dynamic profile. This
        way, we match you with job opportunities that perfectly fit your skills and experience.
      </p>
    </div>
  );
};
export default AITile;
