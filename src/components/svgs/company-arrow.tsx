export default function CompanyArrow({ width, height, className }: SvgProps) {
  return (
    <span className={className}>
      <svg
        width={`${width || "27"}`}
        height={`${height || "27"}`}
        viewBox={`0 0 ${width || "27"} ${height || "27"}`}
        fill="fillCurrent"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current"
      >
        <path
          d="M11.9766 6.87891L7.60156 11.2539C7.27344 11.6094 6.69922 11.6094 6.37109 11.2539C6.01562 10.9258 6.01562 10.3516 6.37109 10.0234L9.24219 7.125H0.875C0.382812 7.125 0 6.74219 0 6.25C0 5.78516 0.382812 5.375 0.875 5.375H9.24219L6.37109 2.50391C6.01562 2.17578 6.01562 1.60156 6.37109 1.27344C6.69922 0.917969 7.27344 0.917969 7.60156 1.27344L11.9766 5.64844C12.332 5.97656 12.332 6.55078 11.9766 6.87891Z"
          fill={`fillCurrent`}
        />
      </svg>
    </span>
  );
}
