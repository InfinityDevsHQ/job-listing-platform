import { Crosshair, Mail, Phone } from 'lucide-react';
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

const contactDetails = [
  {
    icon: <Phone size={20} className="text-inbox-name" />,
  },
  {
    icon: <Crosshair size={20} className="text-inbox-name" />,
  },
  {
    icon: <Mail size={20} className="text-inbox-name" />,
  },
];
const CandidateCard2 = ({
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
      className={`flex cursor-pointer flex-col  text-inbox-name  ${open ? '' : 'border-y lg:border-transparent'}`}
    >
      <header className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center rounded-full">
          <Image src={senderImgUrl} alt={`${senderName} Image`} width={80} height={80} />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <h4 className="text-base font-bold text-inbox-nameWhite">{senderName}</h4>
          <p className="text-xs ">Applied a week ago</p>
        </div>
      </header>
      <div className="border-b border-gray-400 pb-4">
        <h1 className="my-4 font-medium">APPLIED JOBS</h1>
        <div className="rounded-2xl bg-[#424348] p-4 text-inbox-nameWhite">
          <div>
            <h4 className="font-medium">Python Developer</h4>
            <p className="text-sm">{date}</p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <p>Full Time</p>
            <p>Location</p>
            <p className="rounded-3xl bg-inbox-statustext px-2 py-1 text-inbox-statusbg">status</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-4 font-medium">CONTACT DETAILS</h1>
        <div className=" space-y-4">
          {contactDetails.map((detail, index) => (
            <div className="flex items-center gap-4" key={index}>
              <span className="rounded-full bg-inbox-primary p-3">{detail.icon}</span>
              <div className="flex flex-col">
                <p>Phone</p>
                <p>000000000</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <p className="h-12 overflow-hidden text-xs text-gray-500">{message}</p> */}
    </li>
  );
};
export default CandidateCard2;
