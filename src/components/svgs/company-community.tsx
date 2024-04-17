export default function CompanyCommunity({ width, height }: SvgProps) {
  return (
    <span>
      <svg
        width={`${width || "18"}`}
        height={`${height || "15"}`}
        viewBox={`0 0 ${width || "18"} ${height || "15"}`}
        fill="fillCurrent"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.1875 5.125C3.39453 5.125 2.68359 4.71484 2.27344 4.03125C1.89062 3.375 1.89062 2.52734 2.27344 1.84375C2.68359 1.1875 3.39453 0.75 4.1875 0.75C4.95312 0.75 5.66406 1.1875 6.07422 1.84375C6.45703 2.52734 6.45703 3.375 6.07422 4.03125C5.66406 4.71484 4.95312 5.125 4.1875 5.125ZM14.25 5.125C13.457 5.125 12.7461 4.71484 12.3359 4.03125C11.9531 3.375 11.9531 2.52734 12.3359 1.84375C12.7461 1.1875 13.457 0.75 14.25 0.75C15.0156 0.75 15.7266 1.1875 16.1367 1.84375C16.5195 2.52734 16.5195 3.375 16.1367 4.03125C15.7266 4.71484 15.0156 5.125 14.25 5.125ZM0.25 8.92578C0.25 7.3125 1.53516 6 3.14844 6H4.32422C4.76172 6 5.17188 6.10938 5.55469 6.27344C5.5 6.46484 5.5 6.68359 5.5 6.875C5.5 7.94141 5.9375 8.87109 6.67578 9.5H6.64844H0.824219C0.496094 9.5 0.25 9.25391 0.25 8.92578ZM11.3242 9.5H11.2969C12.0352 8.87109 12.5 7.94141 12.5 6.875C12.5 6.68359 12.4727 6.46484 12.4453 6.27344C12.8008 6.10938 13.2109 6 13.6484 6H14.8242C16.4375 6 17.75 7.3125 17.75 8.92578C17.75 9.25391 17.4766 9.5 17.1484 9.5H11.3242ZM9 5.5625C8.50781 5.5625 8.09766 5.83594 7.85156 6.21875C7.60547 6.62891 7.60547 7.14844 7.85156 7.53125C8.09766 7.94141 8.50781 8.1875 9 8.1875C9.46484 8.1875 9.875 7.94141 10.1211 7.53125C10.3672 7.14844 10.3672 6.62891 10.1211 6.21875C9.875 5.83594 9.46484 5.5625 9 5.5625ZM9 9.5C8.04297 9.5 7.19531 9.00781 6.70312 8.1875C6.23828 7.39453 6.23828 6.38281 6.70312 5.5625C7.19531 4.76953 8.04297 4.25 9 4.25C9.92969 4.25 10.7773 4.76953 11.2695 5.5625C11.7344 6.38281 11.7344 7.39453 11.2695 8.1875C10.7773 9.00781 9.92969 9.5 9 9.5ZM7.38672 11.6875C6.29297 11.6875 5.39062 12.4531 5.11719 13.4375H12.8555C12.582 12.4531 11.6797 11.6875 10.5859 11.6875H7.38672ZM7.38672 10.375H10.5859C12.6094 10.375 14.25 12.0156 14.25 14.0391C14.25 14.4492 13.9219 14.75 13.5117 14.75H4.46094C4.05078 14.75 3.75 14.4219 3.75 14.0391C3.75 12.0156 5.36328 10.375 7.38672 10.375Z"
          fill={`fillCurrent`}
        />
      </svg>
    </span>
  );
}
