import { Button } from '@/components/ui/button-new';
import { EllipsisVertical, PhoneCallIcon, Pin } from 'lucide-react';
import Image from 'next/image';
const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between gap-2 border-b border-dark-primary bg-dark-background p-2">
      <div className="flex items-center gap-3">
        <Image
          src={'/assets/inbox/avatar.png'}
          width={40}
          height={40}
          alt="Avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-base font-bold text-dark-nameWhite">Bob Powell</h4>
          <p className="text-xs text-dark-nameWhite">Applied a week ago</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon-xs"
          className="rounded-full border-none bg-dark-primary p-1 text-dark-name hover:text-dark-nameWhite"
        >
          <Pin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-xs"
          className="rounded-full border-none bg-dark-primary p-1 text-dark-name hover:text-dark-nameWhite"
        >
          <PhoneCallIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon-xs"
          className="rounded-full border-none bg-dark-primary p-1 text-dark-name hover:text-dark-nameWhite"
        >
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
export default ChatHeader;
