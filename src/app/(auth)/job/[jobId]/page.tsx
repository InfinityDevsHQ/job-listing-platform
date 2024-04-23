import InfoSection from "@/components/ui/info-section";
import Image from "next/image";

const JobDetails = () => {
	const job = {
		id: 1,
		title: "Senior Frontend Developer",
		external_company_name: "Semrush",
		is_hot: true,
		employment_type: "Full time",
		experienceRequired: "1-2 Year",
		location: "NY, USA",
		salary: "$30k-60k/Month",
		applications: 567,
		datePosted: "23 Mar 2023",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
	};

	return (
		<div className="p-4 lg:p-8">
			<div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-white rounded-md border border-gray-200">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-5">
						<span className="flex-center h-24 w-24 rounded-full bg-orange-100">
							<Image
								alt="logo"
								src={"/assets/icons/fire.svg"}
								width={35}
								height={40}
							/>
						</span>
						<div>
							<h3 className="flex items-center gap-4 text-base lg:text-4xl font-bold text-gray-700">
								{job?.title}
								{job?.is_hot && (
									<span className="hidden lg:block bg-green-500 font-bold px-2 py-1 text-white text-xxs rounded-md max-w-max">
										Urgent
									</span>
								)}
							</h3>
							<p className="text-gray-500 text-xs lg:text-lg font-semibold lg:font-normal">
								{job?.external_company_name}
								{job?.is_hot && (
									<span className="block lg:hidden bg-green-500 font-bold px-2 py-1 text-white text-xxs rounded-md max-w-max">
										Urgent
									</span>
								)}
							</p>
						</div>
					</div>
					<button type="button">
						{/* <Image
							alt="bookmarked"
							src={"/assets/icons/bookmarked.svg"}
							width={30}
							height={30}
						/>  */}
						<Image
							alt="bookmark"
							src={"/assets/icons/bookmark.svg"}
							width={30}
							height={30}
						/>
					</button>
				</div>
				<div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
					<div className="order-2 lg:order-1 w-full">
						<InfoSection heading="About">
							<p className="text-xs lg:text-base text-gray-500"></p>
						</InfoSection>
					</div>
					<div className="order-1 lg:order-2 flex flex-col gap-4 lg:gap-8 max-w-max flex-shrink-0">
						<div className="max-w-max flex-shrink-0 flex flex-col items-center justify-center gap-2 lg:gap-4 rounded-md p-2 lg:p-4 border border-gray-200 bg-gray-50">
							<span className="text-xxs lg:text-base text-gray-500">
								Salary
							</span>
							<span className="text-xs lg:text-xl font-bold text-gray-700">
								$30k-60k /Month
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetails;
