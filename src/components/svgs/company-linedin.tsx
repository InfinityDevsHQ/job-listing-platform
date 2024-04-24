export default function CompanyLinkedin({ width, height, black }: SvgProps) {
  return (
    <span>
      <svg
        width={height || "17"}
        height={width || "17"}
        viewBox={`0 0 ${width ? width : "17"} ${height ? height : "17"}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3182 0.920044H2.68182C1.47683 0.920044 0.5 1.89688 0.5 3.10186V14.7382C0.5 15.9432 1.47683 16.92 2.68182 16.92H14.3182C15.5232 16.92 16.5 15.9432 16.5 14.7382V3.10186C16.5 1.89688 15.5232 0.920044 14.3182 0.920044Z"
          fill={black ? "#000" : "#0077B5"}
        />
        <path
          d="M6.26438 5.28368C6.26438 5.55338 6.18441 5.81703 6.03457 6.04128C5.88473 6.26552 5.67176 6.44031 5.42259 6.54352C5.17342 6.64673 4.89923 6.67373 4.63471 6.62111C4.37019 6.5685 4.12722 6.43862 3.93651 6.24792C3.7458 6.05721 3.61593 5.81423 3.56331 5.54971C3.5107 5.28519 3.5377 5.01101 3.64091 4.76184C3.74412 4.51267 3.9189 4.2997 4.14315 4.14986C4.3674 4.00002 4.63104 3.92004 4.90075 3.92004C5.26241 3.92004 5.60925 4.06371 5.86498 4.31944C6.12071 4.57518 6.26438 4.92202 6.26438 5.28368ZM5.95529 7.55641V13.581C5.95553 13.6254 5.94698 13.6694 5.93014 13.7106C5.9133 13.7517 5.88849 13.7891 5.85715 13.8206C5.82581 13.8521 5.78855 13.8771 5.74751 13.8942C5.70647 13.9113 5.66246 13.92 5.61802 13.92H4.18075C4.1363 13.9202 4.09227 13.9115 4.05119 13.8945C4.0101 13.8776 3.97278 13.8527 3.94135 13.8213C3.90992 13.7898 3.88502 13.7525 3.86806 13.7114C3.85111 13.6703 3.84244 13.6263 3.84256 13.5819V7.55641C3.84256 7.46672 3.87819 7.3807 3.94162 7.31728C4.00504 7.25386 4.09105 7.21823 4.18075 7.21823H5.61802C5.70755 7.21847 5.79334 7.2542 5.85656 7.3176C5.91979 7.38099 5.95529 7.46687 5.95529 7.55641ZM13.468 10.6928V13.6091C13.4681 13.65 13.4602 13.6905 13.4446 13.7283C13.429 13.766 13.4061 13.8004 13.3772 13.8292C13.3483 13.8581 13.314 13.881 13.2762 13.8966C13.2385 13.9122 13.198 13.9202 13.1571 13.92H11.6117C11.5708 13.9202 11.5303 13.9122 11.4925 13.8966C11.4548 13.881 11.4204 13.8581 11.3915 13.8292C11.3626 13.8004 11.3398 13.766 11.3242 13.7283C11.3086 13.6905 11.3006 13.65 11.3007 13.6091V10.7828C11.3007 10.361 11.4244 8.9355 10.198 8.9355C9.24802 8.9355 9.05438 9.91095 9.0162 10.3491V13.6091C9.01621 13.6908 8.98408 13.7692 8.92675 13.8274C8.86942 13.8856 8.79151 13.9188 8.70984 13.92H7.21711C7.17632 13.92 7.13594 13.912 7.09827 13.8964C7.0606 13.8807 7.02638 13.8578 6.99759 13.8289C6.96879 13.8 6.94597 13.7658 6.93045 13.728C6.91492 13.6903 6.90699 13.6499 6.90711 13.6091V7.53004C6.90699 7.48926 6.91492 7.44885 6.93045 7.41113C6.94597 7.37342 6.96879 7.33914 6.99759 7.31025C7.02638 7.28137 7.0606 7.25845 7.09827 7.24282C7.13594 7.22718 7.17632 7.21913 7.21711 7.21914H8.70984C8.7923 7.21914 8.87138 7.25189 8.92968 7.3102C8.98799 7.3685 9.02075 7.44759 9.02075 7.53004V8.0555C9.37347 7.52641 9.8962 7.11823 11.0117 7.11823C13.4826 7.11823 13.468 9.4255 13.468 10.6928Z"
          fill="white"
        />
      </svg>
    </span>
  );
}
