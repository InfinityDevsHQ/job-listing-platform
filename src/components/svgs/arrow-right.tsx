
export default function ArrowRightIcon({ width, height }: SvgProps) {
  return (
    <span>
        <svg
            width={`${width || "13"}`}
            height={`${height || "12"}`}
            viewBox={`0 0 ${width || "13"} ${height || "12"}`}
            fill="fillCurrent"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
              d="M7.59375 0.691406L12.4062 5.28516C12.543 5.42188 12.625 5.58594 12.625 5.77734C12.625 5.94141 12.543 6.10547 12.4062 6.24219L7.59375 10.8359C7.34766 11.082 6.91016 11.082 6.66406 10.8086C6.41797 10.5625 6.41797 10.125 6.69141 9.87891L10.3281 6.43359H1.03125C0.648438 6.43359 0.375 6.13281 0.375 5.77734C0.375 5.39453 0.648438 5.12109 1.03125 5.12109H10.3281L6.69141 1.64844C6.41797 1.40234 6.41797 0.964844 6.66406 0.71875C6.91016 0.445312 7.32031 0.445312 7.59375 0.691406Z" 
              fill="fillCurrent"
            />
        </svg>
    </span>
  );
}
