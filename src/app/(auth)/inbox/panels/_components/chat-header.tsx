import { Button } from '@/components/ui/button-new';
import { InfoIcon, MenuIcon } from 'lucide-react';
import Image from 'next/image';
const ChatHeader = () => {
  return (
    <header className="flex items-center justify-between gap-2 rounded-t-md border-b border-neutral-200 bg-white p-2">
      <div className="flex items-center gap-3">
        <Image
          src={'/assets/inbox/avatar.png'}
          width={40}
          height={40}
          alt="Avatar"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="text-base font-bold text-gray-700">Bob Powell</h4>
          <p className="text-xs text-gray-500">Company</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon-xs">
          <MenuIcon className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon-xs">
          <InfoIcon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};
export default ChatHeader;
