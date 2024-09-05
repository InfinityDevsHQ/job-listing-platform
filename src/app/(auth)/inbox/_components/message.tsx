import Image from 'next/image';

type MessageProps = {
  type: 'incoming' | 'outgoing';
  text: string;
  sendImgUrl: string;
  timeStamp: string;
};
const Message = ({ type, text, sendImgUrl, timeStamp }: MessageProps) => {
  return (
    <div className={`flex w-56 gap-2 sm:w-1/2 lg:w-3/4 ${type === 'incoming' ? '' : 'ml-auto'}`}>
      <div className={`flex ${type === 'outgoing' ? 'order-1' : ''}`}>
        <div className="self-end">
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
          className={`rounded-md border p-2 lg:p-4 ${type === 'incoming' ? 'rounded-bl-none border-neutral-950 bg-primary-800 text-white' : 'rounded-br-none border-gray-200 bg-white text-mute-3'}`}
        >
          <p className="text-xs lg:text-sm">{text}</p>
        </div>
        <p className={`text-xs text-mute-3 ${type === 'outgoing' ? 'ml-auto' : ''}`}>{timeStamp}</p>
      </div>
    </div>
  );
};
export default Message;
