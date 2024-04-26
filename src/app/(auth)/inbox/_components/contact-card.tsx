import Image from 'next/image';
type ContactCardProps = {
  senderImgUrl?: string;
  senderName: string;
  senderType: string;
  notifications?: number;
  date: string;
  time: string;
  message: string;
};
const ContactCard = ({
  senderImgUrl = '/assets/inbox/avatar.png',
  senderName = 'Avatar',
  senderType,
  notifications,
  date,
  time,
  message,
}: ContactCardProps) => {
  return (
    <li className="flex flex-col gap-2.5 bg-white p-2.5 lg:gap-4 lg:p-4">
      <header className="flex items-center gap-5">
        <div className="flex items-center justify-center rounded-full">
          <Image src={senderImgUrl} alt={`${senderName} Image`} width={50} height={40} />
        </div>
        <div className="flex flex-1 flex-col">
          <h4 className="text-base font-bold text-gray-700">{senderName}</h4>
          <p className="text-xs text-gray-500">{senderType}</p>
        </div>
        <div className="flex flex-col">
          {notifications && (
            <span className="mb-auto flex h-4 w-4  items-center justify-center self-end rounded-full bg-red-500 text-center text-xs text-gray-50">
              {notifications}
            </span>
          )}
          <span className="hidden text-xxs text-gray-500 lg:inline-block">
            {date} {time}
          </span>
          <span className="self-end text-xxs text-gray-500 lg:hidden">{date}</span>
          <span className="self-end text-xxs text-gray-500">{time}</span>
        </div>
      </header>
      <p className="h-12 overflow-hidden text-xs text-gray-500">{message}</p>
    </li>
  );
};
export default ContactCard;
