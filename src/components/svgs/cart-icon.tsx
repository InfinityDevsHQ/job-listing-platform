export default function CartIcon({ width = 17, height = 15 }: SvgProps) {
  return (
    <span>
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox={`0 0 ${width} ${height}`}
        fill="fillCurrent"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.44531 0.75H2.67578C3.27734 0.75 3.82422 1.10547 4.07031 1.625H15.3086C16.0195 1.625 16.5391 2.30859 16.3477 3.01953L15.2266 7.17578C15.0078 8.05078 14.2148 8.625 13.3398 8.625H5.4375L5.60156 9.41797C5.65625 9.71875 5.92969 9.9375 6.23047 9.9375H14.1328C14.4883 9.9375 14.7891 10.2383 14.7891 10.5938C14.7891 10.9766 14.4883 11.25 14.1328 11.25H6.23047C5.30078 11.25 4.48047 10.5938 4.31641 9.66406L2.89453 2.25391C2.86719 2.14453 2.78516 2.0625 2.67578 2.0625H1.44531C1.0625 2.0625 0.789062 1.78906 0.789062 1.40625C0.789062 1.05078 1.0625 0.75 1.44531 0.75ZM4.37109 2.9375L5.19141 7.3125H13.3398C13.6406 7.3125 13.8867 7.12109 13.9688 6.84766L15.0078 2.9375H4.37109ZM5.60156 14.75C5.10938 14.75 4.69922 14.5039 4.45312 14.0938C4.20703 13.7109 4.20703 13.1914 4.45312 12.7812C4.69922 12.3984 5.10938 12.125 5.60156 12.125C6.06641 12.125 6.47656 12.3984 6.72266 12.7812C6.96875 13.1914 6.96875 13.7109 6.72266 14.0938C6.47656 14.5039 6.06641 14.75 5.60156 14.75ZM14.7891 13.4375C14.7891 13.9297 14.5156 14.3398 14.1328 14.5859C13.7227 14.832 13.2031 14.832 12.8203 14.5859C12.4102 14.3398 12.1641 13.9297 12.1641 13.4375C12.1641 12.9727 12.4102 12.5625 12.8203 12.3164C13.2031 12.0703 13.7227 12.0703 14.1328 12.3164C14.5156 12.5625 14.7891 12.9727 14.7891 13.4375Z"
          fill="fillCurrent"
        />
      </svg>
    </span>
  );
}