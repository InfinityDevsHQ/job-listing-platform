import { Button } from '@/components/ui/button-new';
import { EllipsisVertical } from 'lucide-react';
import CandidateCard2 from '../_components/candidate-card';
type AcceptedTabProps = {
  className?: string;
};
const AcceptedTab = ({ className }: AcceptedTabProps) => {
  const Notifications = [
    // {
    //   senderName: 'Joe Paul',
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellendus. Non eligendi
    //   nulla, possimus inventore quae magnam reiciendis a ab quo quis, laudantium quidem illum
    //   excepturi quibusdam ullam omnis corporis.`,
    //   notifications: 8,
    //   senderType: 'Candidate',
    //   date: '13 April,2024',
    //   time: '01:23 PM',
    //   open: false,
    // },
    {
      senderName: 'Bob Powell',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellendus. Non eligendi
      nulla, possimus inventore quae magnam reiciendis a ab quo quis, laudantium quidem illum
      excepturi quibusdam ullam omnis corporis.`,
      notifications: 8,
      senderType: 'Company',
      date: '15 April, 2024',
      time: '02:13 PM',
      open: true,
    },
  ];
  return (
    <div
      className={`flex-col rounded-r-2xl border border-inbox-primary p-4 text-inbox-name lg:w-72 xl:w-82 ${className}`}
    >
      <div className="flex items-center justify-end gap-3">
        <Button
          variant="outline"
          size="icon-xs"
          className="rounded-full border-none bg-inbox-primary p-1 text-inbox-name hover:text-inbox-nameWhite"
        >
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </div>
      <ol className="flex flex-col gap-4">
        {Notifications.map((notification, index) => (
          <CandidateCard2
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
export default AcceptedTab;
