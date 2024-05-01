import { InfoListProps } from '@/types/types';

const InfoList = ({ list, children }: InfoListProps) => {
  return (
    <ul className="list list-inside list-image-[url('/assets/images/jobs/send.png')] ">
      {children ? (
        <>{children}</>
      ) : (
        <>
          {list?.map((listItem, index) => (
            <li key={index} className="text-base text-gray-500">
              {listItem}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default InfoList;
