import { BadgeProps } from '@/types/types';

import Badge from '@/components/ui/badge';
import { getColorClasses } from '@/lib/utils';

type BadgesProps = {
  badges?: BadgeProps[];
  multiColor?: boolean;
};

const Badges = ({ badges, multiColor = false }: BadgesProps) => {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 lg:gap-4">
      {badges?.map((badge, index) => (
        <Badge
          key={index}
          text={badge?.text}
          bgColor={multiColor ? getColorClasses(index).bgColor : ''}
          color={multiColor ? getColorClasses(index).textColor : ''}
        />
      ))}
    </div>
  );
};

export default Badges;
