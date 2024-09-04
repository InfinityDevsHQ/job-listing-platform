import MagnifyingGlassIcon from '@/components/svgs/magnifying-glass';
import { Button } from '@/components/ui/button-new';
import Input from '@/components/ui/input';
import { cn } from '@/lib/utils';
import ContactCard from '../_components/contact-card';
type InboxPanelProps = {
  className?: string;
};

const Notifications = [
  {
    senderName: 'Powell',
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellendus. Non eligendi
    nulla, possimus inventore quae magnam reiciendis a ab quo quis, laudantium quidem illum
    excepturi quibusdam ullam omnis corporis.`,
    notifications: 8,
    senderType: 'Company',
    date: '15 April,2024',
    time: '02:13 PM',
    open: true,
  },
  {
    senderName: 'Joe Paul',
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellendus. Non eligendi
    nulla, possimus inventore quae magnam reiciendis a ab quo quis, laudantium quidem illum
    excepturi quibusdam ullam omnis corporis.`,
    notifications: 8,
    senderType: 'Candidate',
    date: '13 April,2024',
    time: '01:23 PM',
    open: false,
  },
];
const InboxPanel = ({ className }: InboxPanelProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-l-2xl border border-inbox-primary  bg-white p-4 lg:w-48 xl:w-72',
        className
      )}
    >
      <div className="hidden w-full lg:block">
        <Input
          className="rounded-full bg-inbox-primary py-3 pl-8 text-inbox-name"
          placeholder="Search"
          leadingIcon={<MagnifyingGlassIcon className="text-inbox-name" />}
          // trailingIcon={<CompanyEye width={16} height={16} />}
        />
      </div>
      {/* <h2 className="w-full text-2xl font-bold text-black">Inbox</h2> */}
      <div className="flex items-center justify-between">
        <Button
          variant="tertiary"
          className="justify-start rounded-none border-transparent p-1 text-inbox-name  lg:h-8"
          size="lg"
        >
          All
        </Button>
        <Button
          variant="tertiary"
          className="justify-start rounded-none border-b border-inbox-name p-1 text-inbox-name lg:h-8"
          size="lg"
        >
          Unread
        </Button>
        <Button
          variant="tertiary"
          className="justify-start rounded-none border-transparent p-1 text-inbox-name hover:border-b lg:h-8"
          size="lg"
        >
          Sent
        </Button>
      </div>
      <ol className="flex flex-col gap-4">
        {Notifications.map((notification, index) => (
          <ContactCard
            key={index}
            senderName={notification.senderName}
            message={notification.message}
            notifications={notification.notifications}
            senderType={notification.senderType}
            date={notification.date}
            time={notification.time}
            open={notification.open}
          />
        ))}
      </ol>
    </div>
  );
};
export default InboxPanel;
