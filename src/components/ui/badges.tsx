import { BadgeProps } from '@/types/types';

import Badge from '@/components/ui/badge';

type BadgesProps = {
  badges?: BadgeProps[];
};

const Badges = ({ badges }: BadgesProps) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 lg:gap-4">
      {badges?.map((badge, index) => <Badge key={index} text={badge?.text} />)}
    </div>
  );
};

export default Badges;
