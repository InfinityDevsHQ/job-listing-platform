import Image from "next/image";

import Input from "@/components/ui/input";

import MagnifyingGlassIcon from "@/components/svgs/magnifying-glass";

const Hero = () => {
	return (
		<div
			className="grid grid-cols-3 items-center lg:gap-8 p-4 lg:p-8 rounded-md overflow-hidden bg-cover"
			style={{
				background: "url('/assets/images/home/homePage_hero_section_bg.png')",
			}}
		>
			<div className="cols-span-3 lg:col-span-2 flex flex-col  gap-4 lg:gap-8">
				<h2 className="text-lg lg:text-3xl font-bold text-white">
					Find your dream job here
				</h2>
				<p className="text-sm lg:text-base text-white max-w-lg">
					Explore the latest job openings and apply for the best job
					opportunities available today!
				</p>
				<Input
					variant={"primary"}
					type="text"
					name="search"
					defaultValue={""}
					placeholder="Search"
					leadingIcon={<MagnifyingGlassIcon />}
				/>
			</div>
			<Image
				alt="homePage_hero_section_vector.png"
				src={"/assets/images/home/homePage_hero_section_vector.png"}
				width={245}
				height={195}
				className="h-48 mx-auto"
			/>
		</div>
	);
};

export default Hero;
