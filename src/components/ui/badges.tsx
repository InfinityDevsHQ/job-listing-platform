import { BadgeProps } from '@/types/types';

import Badge from '@/components/ui/badge';
import { getColorClasses } from '@/lib/utils';

type BadgesProps = {
  badges?: BadgeProps[];
};

const Badges = ({ badges }: BadgesProps) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-4">
      {badges?.map((badge, index) => (
        <Badge
          key={index}
          text={badge?.text}
          color={getColorClasses(index)?.textColor}
          bgColor={getColorClasses(index)?.bgColor}
        />
      ))}
    </div>
  );
};

export default Badges;
