import Image from 'next/image';

const ContactCard = () => {
  return (
    <li className="flex flex-col gap-2.5 bg-white p-2.5 lg:gap-4 lg:p-4">
      <header className="flex items-center gap-5">
        <div className="flex items-center justify-center rounded-full">
          <Image src={'/assets/inbox/avatar.png'} alt="Avatar Png" width={50} height={40} />
        </div>
        <div className="flex flex-1 flex-col">
          <h4 className="text-base font-bold text-gray-700">Jan Filips</h4>
          <p className="text-xs text-gray-500">Company</p>
        </div>
        <div className="flex flex-col">
          <span className="mb-auto flex h-4 w-4  items-center justify-center self-end rounded-full bg-red-500 text-center text-xs text-gray-50">
            6
          </span>
          <span className="text-xxs text-gray-500 lg:hidden">24 August,2023 2:16 PM</span>
          <span className="hidden self-end text-xxs text-gray-500 lg:inline-block">
            24 August,2023
          </span>
          <span className="hidden self-end text-xxs text-gray-500 lg:inline-block">02:16 PM</span>
        </div>
      </header>
      <p className="h-12 overflow-hidden text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat exercitationem libero
        possimus quasi mollitia repudiandae voluptatem esse cumque labore doloribus recusandae
        ducimus, deserunt amet laboriosam, veniam reiciendis sed culpa totam!
      </p>
    </li>
  );
};
export default ContactCard;
