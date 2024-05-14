export default function CompanyCheck({ width, height }: SvgProps) {
  return (
    <span>
      <svg
        width={`${width || "9"}`}
        height={`${height || "6"}`}
        viewBox={`0 0 ${width || "9"} ${height || "6"}`}
        fill="fillCurrent"
        className="fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={`fillCurrent`}
          d="M7.98672 0.289209C8.2 0.486084 8.2 0.830615 7.98672 1.02749L3.78672 5.22749C3.58984 5.44077 3.24531 5.44077 3.04844 5.22749L0.948438 3.12749C0.735156 2.93062 0.735156 2.58608 0.948438 2.38921C1.14531 2.17593 1.48984 2.17593 1.68672 2.38921L3.42578 4.11187L7.24844 0.289209C7.44531 0.0759273 7.78984 0.0759273 7.98672 0.289209Z"
        />
      </svg>
    </span>
  );
}
