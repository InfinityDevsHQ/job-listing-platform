import Image from 'next/image';
type ContactCardProps = {
  senderImgUrl?: string;
  senderName: string;
  senderType: string;
  notifications?: number;
  date: string;
  time: string;
  message: string;
  open?: boolean;
};
const ContactCard = ({
  senderImgUrl = '/assets/inbox/avatar.png',
  senderName = 'Avatar',
  senderType,
  notifications,
  date,
  time,
  message,
  open,
}: ContactCardProps) => {
  return (
    <li
      className={`hover:inbox-primary flex cursor-pointer flex-col gap-2.5 rounded-2xl  border border-dark-primary p-2.5 hover:border lg:gap-4 lg:p-3 hover:lg:border-dark-primary ${open ? 'border bg-dark-primary lg:border-dark-primary' : 'border-y bg-dark-primary lg:border-dark-primary'}`}
    >
      <header className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-full">
          <Image src={senderImgUrl} alt={`${senderName} Image`} width={40} height={40} />
        </div>
        <div className="flex flex-1 flex-col">
          <h4 className="text-base text-dark-nameWhite">{senderName}</h4>
          {/* <p className="text-xs text-gray-500">{senderType}</p> */}
        </div>
        <div className="flex flex-col">
          <div>
            <p className="rounded-3xl bg-dark-greenDark px-2 py-0.5 text-dark-greenLight">Hiring</p>
          </div>
          {/* {notifications && (
            <span className="mb-auto flex h-4 w-4  items-center justify-center self-end rounded-full bg-red-500 text-center text-xs text-gray-50">
              {notifications}
            </span>
          )} */}
          {/* <span className="hidden text-xxs text-gray-500 lg:inline-block">{date}</span>
          <span className="self-end text-xxs text-gray-500 lg:hidden">{date}</span>
          <span className="self-end text-xxs text-gray-500">{time}</span> */}
        </div>
      </header>
      {/* <p className="h-12 overflow-hidden text-xs text-gray-500">{message}</p> */}
    </li>
  );
};
export default ContactCard;
