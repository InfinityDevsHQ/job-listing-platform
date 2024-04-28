import CompanyEye from '@/components/svgs/company-eye';
import MagnifyingGlassIcon from '@/components/svgs/magnifying-glass';
import Input from '@/components/ui/input';
import ContactCard from '../_components/contact-card';
type AcceptedTabProps = {
  className?: string;
};
const AcceptedTab = ({ className }: AcceptedTabProps) => {
  const Notifications = [
    {
      senderName: 'Joe Paul',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellendus. Non eligendi
      nulla, possimus inventore quae magnam reiciendis a ab quo quis, laudantium quidem illum
      excepturi quibusdam ullam omnis corporis.`,
      notifications: 1,
      senderType: 'Candidate',
      date: '13 April,2024',
      time: '01:23 PM',
    },
    {
      senderName: 'Bob Powell',
      message: `mus inventore quae magnam reiciendis a ab quo quis, laudantium quidem illum
      excepturi quibusdam ullam omnis corporis.`,
      notifications: 3,
      senderType: 'Company',
      date: '15 April,2024',
      time: '02:13 PM',
    },
  ];
  return (
    <div className={`w-82 rounded-md border border-neutral-200  bg-white p-4 ${className}`}>
      <div className="hidden lg:block">
        <Input
          placeholder="Search"
          leadingIcon={<MagnifyingGlassIcon />}
          trailingIcon={<CompanyEye width={16} height={16} />}
        />
      </div>
      {Notifications.map((notification, index) => (
        <ContactCard
          key={index}
          senderName={notification.senderName}
          message={notification.message}
          notifications={notification.notifications}
          senderType={notification.senderType}
          date={notification.date}
          time={notification.time}
        />
      ))}
    </div>
  );
};
export default AcceptedTab;
