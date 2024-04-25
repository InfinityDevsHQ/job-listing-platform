import Image from 'next/image';
type JobHeaderProps = {
  title: string;
  is_hot: boolean;
  external_company_name: string;
};
export default function JobHeader({ title, is_hot, external_company_name }: JobHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-5">
        <span className="flex-center h-11 w-11 rounded-full bg-orange-100 lg:h-24 lg:w-24">
          <Image
            alt="logo"
            src={'/assets/icons/fire.svg'}
            width={35}
            height={40}
            className="hidden lg:block"
          />
          <Image
            alt="logo"
            src={'/assets/icons/fire.svg'}
            width={16}
            height={18}
            className="block lg:hidden"
          />
        </span>
        <div>
          <h3 className="flex items-center gap-4 text-base font-bold text-gray-700 lg:text-4xl">
            {title}
            {is_hot && (
              <span className="hidden max-w-max rounded-md bg-green-500 px-2 py-1 text-xxs font-bold text-white lg:block">
                Urgent
              </span>
            )}
          </h3>
          <p className="flex items-center gap-4 text-xs font-semibold text-gray-500 lg:text-lg lg:font-normal">
            {external_company_name}
            {is_hot && (
              <span className="block max-w-max rounded-md bg-green-500 px-2 py-1 text-xxs font-bold text-white lg:hidden">
                Urgent
              </span>
            )}
          </p>
        </div>
      </div>
      <button type="button">
        <Image
          alt="bookmarked"
          src={'/assets/icons/bookmarked.svg'}
          width={30}
          height={30}
          className="h-auto w-auto"
        />
        {/* <Image
      alt="bookmark"
      src={"/assets/icons/bookmark.svg"}
      width={30}
      height={30}
    /> */}
      </button>
    </div>
  );
}
