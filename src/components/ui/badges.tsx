import { BadgeProps } from '@/types/types';

import Badge from '@/components/ui/badge';

type BadgesProps = {
  badges?: BadgeProps[];
};

const Badges = ({ badges }: BadgesProps) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-2.5">
      {badges?.map((badge, index) => (
        <Badge key={index} text={badge?.text} color={badge?.color} bgColor={badge?.bgColor} />
      ))}
    </div>
  );
};

export default Badges;
