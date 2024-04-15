export default function CompanyArrow({ width, height, fill }: SvgProps) {
  return (
    <span>
      <svg
        width={`${width || "27"}`}
        height={`${height || "27"}`}
        viewBox={`0 0 ${width || "27"} ${height || "27"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={`${fill || "white"}`}
          d="M10.2539 8.29688L13.3164 9.60938C13.8086 9.80078 14.082 10.3203 13.9727 10.8398L13.3164 13.9023C13.207 14.3945 12.7422 14.7773 12.25 14.7773C12.0586 14.7773 11.8945 14.75 11.7305 14.75C11.457 14.75 11.1836 14.7227 10.9375 14.6953C4.78516 14.0391 0 8.84375 0 2.5C0 2.00781 0.355469 1.54297 0.847656 1.43359L3.91016 0.777344C4.42969 0.667969 4.94922 0.941406 5.14062 1.43359L6.45312 4.49609C6.64453 4.93359 6.53516 5.45312 6.15234 5.75391L5.03125 6.68359C5.76953 7.94141 6.80859 8.98047 8.06641 9.71875L8.99609 8.59766C9.29688 8.21484 9.81641 8.10547 10.2539 8.29688ZM12.0586 13.4375L12.6328 10.7305L9.89844 9.55469L9.10547 10.5391C8.69531 11.0312 7.98438 11.168 7.41016 10.8398C5.96094 9.99219 4.75781 8.78906 3.91016 7.33984C3.58203 6.76562 3.71875 6.05469 4.21094 5.64453L5.19531 4.85156L4.01953 2.11719L1.3125 2.69141C1.39453 8.59766 6.15234 13.3555 12.0586 13.4375Z"
        />
      </svg>
    </span>
  );
}
