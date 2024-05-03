import Image from 'next/image';
const ApplyJobSuccess = () => {
  return (
    <section className="relative mt-4 flex items-center justify-center bg-white lg:mt-8">
      <Image src="/assets/party.png" width={1684} height={1820} alt="party" />
      <div className="absolute flex flex-col gap-4 lg:gap-8">
        <h3 className="text-center font-sans text-xl font-bold text-gray-700 lg:text-6xl">
          Congratulations!
        </h3>
        <p className="text-center font-sans text-sm text-gray-500 lg:text-3xl">
          You Have Successfully Applied for position
        </p>
        <h4 className="text-center font-bold text-gray-500 lg:text-5xl">Python Developer</h4>
        <p className="text-center font-sans text-sm text-gray-500 lg:text-3xl">To Company</p>
        <h4 className="text-center font-bold text-gray-500 lg:text-3xl">Google</h4>
      </div>
    </section>
  );
};
export default ApplyJobSuccess;
