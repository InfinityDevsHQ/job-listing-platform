export default function MagnifyingGlassIcon({ width, height }: SvgProps) {
  return (
    <span>
        <svg
            width={`${width || "15"}`}
            height={`${height || "15"}`}
            viewBox={`0 0 ${width || "15"} ${height || "15"}`}
            fill="fillCurrent"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M13.7812 13.6289C14.0547 13.9023 14.0547 14.3125 13.7812 14.5586C13.6719 14.6953 13.5078 14.75 13.3438 14.75C13.1523 14.75 12.9883 14.6953 12.8516 14.5586L9.1875 10.8945C8.20312 11.6875 6.97266 12.125 5.66016 12.125C2.54297 12.125 0 9.58203 0 6.4375C0 3.32031 2.51562 0.75 5.66016 0.75C8.77734 0.75 11.3477 3.32031 11.3477 6.4375C11.3477 7.77734 10.9102 9.00781 10.1172 9.96484L13.7812 13.6289ZM1.3125 6.4375C1.3125 8.87109 3.25391 10.8125 5.6875 10.8125C8.09375 10.8125 10.0625 8.87109 10.0625 6.4375C10.0625 4.03125 8.09375 2.0625 5.6875 2.0625C3.25391 2.0625 1.3125 4.03125 1.3125 6.4375Z" 
                fill="fillCurrent"
            />
        </svg>
    </span>
  );
}