type InfoListProps = {
  list?: string[] | null;
  children?: React.ReactNode;
  variant?: string;
};

const InfoList = ({ list, children, variant = 'primary' }: InfoListProps) => {
  return (
    <ul className={`list list-inside list-image-[url('/assets/icons/send-${variant}.png')]`}>
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
