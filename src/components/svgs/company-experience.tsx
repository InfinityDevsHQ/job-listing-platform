export default function CompanyExperience({ width, height }: SvgProps) {
  return (
    <span>
      <svg
        width={`${width || "27"}`}
        height={`${height || "27"}`}
        viewBox={`0 0 ${width || "27"} ${height || "27"}`}
        fill="fillCurrent"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.125 1.8125V2.75H7.875V1.8125C7.875 1.71875 7.78125 1.625 7.6875 1.625H4.3125C4.19531 1.625 4.125 1.71875 4.125 1.8125ZM3 2.75V1.8125C3 1.10938 3.58594 0.5 4.3125 0.5H7.6875C8.39062 0.5 9 1.10938 9 1.8125V2.75H10.5C11.3203 2.75 12 3.42969 12 4.25V7.0625V10.25C12 11.0938 11.3203 11.75 10.5 11.75H1.5C0.65625 11.75 0 11.0938 0 10.25V7.0625V4.25C0 3.42969 0.65625 2.75 1.5 2.75H3ZM1.125 7.625V10.25C1.125 10.4609 1.28906 10.625 1.5 10.625H10.5C10.6875 10.625 10.875 10.4609 10.875 10.25V7.625H7.5V8C7.5 8.42188 7.14844 8.75 6.75 8.75H5.25C4.82812 8.75 4.5 8.42188 4.5 8V7.625H1.125ZM4.5 6.5H7.5H10.875V4.25C10.875 4.0625 10.6875 3.875 10.5 3.875H8.4375H3.5625H1.5C1.28906 3.875 1.125 4.0625 1.125 4.25V6.5H4.5Z"
          fill={`fillCurrent`}
        />
      </svg>
    </span>
  );
}
