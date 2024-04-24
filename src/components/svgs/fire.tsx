export default function FireIcon({ width, height, className }: SvgProps) {
	return (
		<span className={className}>
			<svg
				width={`${width || "22"}`}
				height={`${height || "26"}`}
				viewBox={`0 0 ${width || "22"} ${height || "26"}`}
				fill="fillCurrent"
				className="fill-current"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M15.7715 3.16406C19.3359 6.43555 21.875 11.8066 21.875 14.3945C21.875 20.5957 16.9434 25.625 10.9375 25.625C4.88281 25.625 0 20.5957 0 14.3945C0 10.8789 3.36914 5.11719 8.20312 0.625C10.0586 2.38281 11.7188 4.23828 13.0371 6.09375C13.8672 5.06836 14.7461 4.0918 15.7715 3.16406ZM10.9375 23.2812C15.6738 23.2812 19.5312 19.3262 19.5312 14.3945C19.5312 12.8809 17.9688 9.31641 15.7227 6.5332C15.4297 6.875 15.1367 7.2168 14.8438 7.55859L12.9395 9.90234L11.1328 7.46094C10.3027 6.28906 9.27734 5.06836 8.20312 3.94531C4.49219 7.90039 2.34375 12.1973 2.34375 14.3945C2.34375 19.3262 6.20117 23.2812 10.9375 23.2812ZM15.2832 12.5391C15.4785 12.832 15.625 13.0762 15.7715 13.3691C16.9434 15.6152 16.4551 18.4473 14.3555 19.9121C13.4277 20.5957 12.2559 20.9375 11.0352 20.9375C7.95898 20.9375 5.46875 18.9355 5.46875 15.6152C5.46875 13.9551 6.49414 12.4902 8.54492 10C8.83789 10.3418 12.793 15.3711 12.793 15.3711L15.2832 12.5391Z"
					fill="fillCurrent"
				/>
			</svg>
		</span>
	);
}