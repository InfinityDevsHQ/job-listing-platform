export default function CompanyApplied({ width, height, fill }: SvgProps) {
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
          d="M4.53711 4.625C3.74414 4.625 3.0332 4.21484 2.62305 3.53125C2.24023 2.875 2.24023 2.02734 2.62305 1.34375C3.0332 0.6875 3.74414 0.25 4.53711 0.25C5.30273 0.25 6.01367 0.6875 6.42383 1.34375C6.80664 2.02734 6.80664 2.875 6.42383 3.53125C6.01367 4.21484 5.30273 4.625 4.53711 4.625ZM14.5996 4.625C13.8066 4.625 13.0957 4.21484 12.6855 3.53125C12.3027 2.875 12.3027 2.02734 12.6855 1.34375C13.0957 0.6875 13.8066 0.25 14.5996 0.25C15.3652 0.25 16.0762 0.6875 16.4863 1.34375C16.8691 2.02734 16.8691 2.875 16.4863 3.53125C16.0762 4.21484 15.3652 4.625 14.5996 4.625ZM0.599609 8.42578C0.599609 6.8125 1.88477 5.5 3.49805 5.5H4.67383C5.11133 5.5 5.52148 5.60938 5.9043 5.77344C5.84961 5.96484 5.84961 6.18359 5.84961 6.375C5.84961 7.44141 6.28711 8.37109 7.02539 9H6.99805H1.17383C0.845703 9 0.599609 8.75391 0.599609 8.42578ZM11.6738 9H11.6465C12.3848 8.37109 12.8496 7.44141 12.8496 6.375C12.8496 6.18359 12.8223 5.96484 12.7949 5.77344C13.1504 5.60938 13.5605 5.5 13.998 5.5H15.1738C16.7871 5.5 18.0996 6.8125 18.0996 8.42578C18.0996 8.75391 17.8262 9 17.498 9H11.6738ZM9.34961 5.0625C8.85742 5.0625 8.44727 5.33594 8.20117 5.71875C7.95508 6.12891 7.95508 6.64844 8.20117 7.03125C8.44727 7.44141 8.85742 7.6875 9.34961 7.6875C9.81445 7.6875 10.2246 7.44141 10.4707 7.03125C10.7168 6.64844 10.7168 6.12891 10.4707 5.71875C10.2246 5.33594 9.81445 5.0625 9.34961 5.0625ZM9.34961 9C8.39258 9 7.54492 8.50781 7.05273 7.6875C6.58789 6.89453 6.58789 5.88281 7.05273 5.0625C7.54492 4.26953 8.39258 3.75 9.34961 3.75C10.2793 3.75 11.127 4.26953 11.6191 5.0625C12.084 5.88281 12.084 6.89453 11.6191 7.6875C11.127 8.50781 10.2793 9 9.34961 9ZM7.73633 11.1875C6.64258 11.1875 5.74023 11.9531 5.4668 12.9375H13.2051C12.9316 11.9531 12.0293 11.1875 10.9355 11.1875H7.73633ZM7.73633 9.875H10.9355C12.959 9.875 14.5996 11.5156 14.5996 13.5391C14.5996 13.9492 14.2715 14.25 13.8613 14.25H4.81055C4.40039 14.25 4.09961 13.9219 4.09961 13.5391C4.09961 11.5156 5.71289 9.875 7.73633 9.875Z"
          fill={`${fill || "#171717"}`}
        />
      </svg>
    </span>
  );
}