import { Button } from '@/components/ui/button-new';
import { AlignJustify, BellIcon, MailIcon } from 'lucide-react';

const MobileNav = () => {
  return (
    <div className="flex items-center gap-4 lg:hidden">
      <Button variant="outline" size="icon-xs">
        <MailIcon className="h-6 w-7" />
      </Button>
      <Button variant="outline" size="icon-xs">
        <BellIcon className="h-6 w-7" />
      </Button>
      <Button variant="outline" size="icon-xs">
        <AlignJustify className="h-7 w-7" />
      </Button>
    </div>
  );
};

export default MobileNav;
