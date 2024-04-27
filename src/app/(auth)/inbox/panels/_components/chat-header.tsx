import Button from '@/components/ui/button';
import { InfoIcon, Menu } from 'lucide-react';
import Image from 'next/image';
const ChatHeader = () => {
  return (
    <header className="flex gap-2 border border-neutral-200 bg-white p-2">
      <div className="flex items-center justify-center">
        <Image
          src={'/assets/inbox/avatar.png'}
          width={40}
          height={40}
          alt="Avatar"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h4 className="text-base font-bold text-gray-700">Jan Filips</h4>
        <p className="text-xs text-gray-500">Company</p>
      </div>
      <div className="flex gap-2">
        <Button text="" className="h-full" leadingIcon={<Menu />} />
        <Button text="" className="h-full justify-center" leadingIcon={<InfoIcon />} />
      </div>
    </header>
  );
};
export default ChatHeader;
