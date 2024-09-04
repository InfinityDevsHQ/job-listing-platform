import Image from 'next/image';

type MessageProps = {
  type: 'incoming' | 'outgoing';
  text: string;
  sendImgUrl: string;
  timeStamp: string;
};
const Message = ({ type, text, sendImgUrl, timeStamp }: MessageProps) => {
  return (
    <div className={`flex w-56 gap-4 sm:w-1/2 lg:w-3/4 ${type === 'incoming' ? '' : 'ml-auto'}`}>
      <div className={`flex ${type === 'outgoing' ? 'order-1' : ''}`}>
        <div className="self-start">
          <Image src={sendImgUrl} alt="Sender Image" width={30} height={30} className="xl:hidden" />
          <Image
            src={sendImgUrl}
            alt="Sender Image"
            width={40}
            height={40}
            className="hidden xl:inline-block"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div
          className={`rounded-2xl border bg-[#424348] p-2 lg:p-4 ${type === 'incoming' ? 'border-inbox-primary  text-inbox-name' : 'border-inbox-primary  text-inbox-name'}`}
        >
          <p className="text-xs lg:text-sm">{text}</p>
          <p className={`text-end text-xs  ${type === 'outgoing' ? 'ml-auto' : ''}`}>{timeStamp}</p>
        </div>
      </div>
    </div>
  );
};
export default Message;
