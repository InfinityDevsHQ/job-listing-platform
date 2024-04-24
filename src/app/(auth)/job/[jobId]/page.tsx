import Image from "next/image";

import InfoBadge from "@/components/ui/info-badge";
import InfoSection from "@/components/ui/info-section";
import InfoList from "@/components/ui/info-list";
import Badges from "@/components/ui/badges";
import Button from "@/components/ui/button";
import { ArrowRight, ThumbsDown, ThumbsUp } from "lucide-react";
import Jobs from "@/_components/jobs/jobs-list";
import SectionHeader from "@/components/ui/section-header";
import FireIcon from "@/components/svgs/fire";

const JobDetails = () => {
	const jobs = [
		{
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
		},
		{
			id: 2,
			title: "Software Engineer",
			external_company_name: "Google",
			is_hot: false,
			employment_type: "Full time",
			experienceRequired: "3-5 Years",
			location: "Mountain View, CA, USA",
			salary: "$100k-150k/Year",
			applications: 5067,
			datePosted: "23 Mar 2023",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
		},
		{
			id: 3,
			title: "Data Scientist",
			external_company_name: "Microsoft",
			is_hot: true,
			employment_type: "Contract",
			experienceRequired: "2-4 Years",
			location: "Seattle, WA, USA",
			salary: "$80k-120k/Year",
			applications: 1567,
			datePosted: "23 Mar 2023",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
		},
		{
			id: 4,
			title: "UX/UI Designer",
			external_company_name: "Apple",
			is_hot: false,
			employment_type: "Part time",
			experienceRequired: "1-3 Years",
			location: "Cupertino, CA, USA",
			salary: "$60k-90k/Year",
			applications: 5670,
			datePosted: "23 Mar 2023",
			description:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolorum quae, magnam reprehenderit voluptatem quos accusantium necessitatibus, quia nemo, minima illo ipsa laboriosam voluptatum magni eveniet excepturi? Minus, vel consequuntur!",
		},
	];

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
		badges: [
			{ text: "Python", color: "#ffffff", bgColor: "#000000" },
			{ text: "Django", color: "#000000", bgColor: "#ffffff" },
			{ text: "Sql" },
			{ text: "Git" },
		],
	};

	return (
		<div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8">
			<div className="flex flex-col gap-4 lg:gap-8 p-4 lg:p-8 bg-white rounded-md border border-gray-200">
				{/* Header */}
				<div className="flex items-start justify-between">
					<div className="flex items-center gap-5">
						<span className="flex-center h-11 lg:h-24 w-11 lg:w-24 rounded-full bg-orange-100">
							<Image
								alt="logo"
								src={"/assets/icons/fire.svg"}
								width={35}
								height={40}
								className="hidden lg:block"
							/>
							<Image
								alt="logo"
								src={"/assets/icons/fire.svg"}
								width={16}
								height={18}
								className="block lg:hidden"
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
							<p className="flex items-center gap-4 text-gray-500 text-xs lg:text-lg font-semibold lg:font-normal">
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
						<Image
							alt="bookmarked"
							src={"/assets/icons/bookmarked.svg"}
							width={30}
							height={30}
						/>
						{/* <Image
							alt="bookmark"
							src={"/assets/icons/bookmark.svg"}
							width={30}
							height={30}
						/> */}
					</button>
				</div>
				<div className="h-full flex flex-col lg:flex-row gap-4 lg:gap-8">
					{/* Job Desc */}
					<div className="order-2 lg:order-1 flex flex-col gap-4 lg:gap-8 w-full">
						<InfoSection heading="About">
							<p className="text-xs lg:text-base text-gray-500">
								Seeking a skilled Senior Python Developer proficient in Django
								and FastAPI. Join our team to contribute your expertise in
								Python development to create innovative solutions. Apply now to
								showcase your advanced skills in Python programming and web
								framework experience.
							</p>
						</InfoSection>
						<InfoSection heading="Job requirements">
							<ul className="ml-6 list-image-[url('/assets/images/jobs/send.png')]">
								<li className="pl-4 text-xs lg:text-base text-gray-500 mb-4">
									Proficient in Python programming language with a strong
									understanding of Django and FastAPI frameworks.
								</li>
								<li className="pl-4 text-xs lg:text-base text-gray-500 mb-4">
									Experience in developing and maintaining scalable web
									applications using Python.
								</li>
								<li className="pl-4 text-xs lg:text-base text-gray-500 mb-4">
									Ability to mentor and provide technical guidance to junior
									developers in Python and related frameworks.
								</li>
								<li className="pl-4 text-xs lg:text-base text-gray-500 mb-4">
									Strong problem-solving skills and the ability to troubleshoot
									and debug complex issues in Python applications.
								</li>
								<li className="pl-4 text-xs lg:text-base text-gray-500 mb-4">
									Familiarity with software development best practices,
									including code reviews, testing, and documentation.
								</li>
								<li className="pl-4 text-xs lg:text-base text-gray-500 mb-4">
									Excellent communication skills and the ability to collaborate
									effectively with cross-functional teams.
								</li>
							</ul>
						</InfoSection>
						<InfoSection heading="Responsibilities">
							<p className="text-xs lg:text-base text-gray-500">
								We are seeking a highly skilled Senior Python Developer with
								expertise in Django and FastAPI to join our dynamic team. As a
								Senior Python Developer, you will be responsible for designing,
								developing, and maintaining high-quality software solutions.
								Your role will involve collaborating with cross-functional teams
								to understand project requirements, architecting efficient and
								scalable solutions, and writing clean, maintainable code. The
								ideal candidate should have a strong background in Python
								development, a deep understanding of Django and FastAPI
								frameworks, and a proven track record of delivering successful
								projects. You should be able to work independently, as well as
								part of a team, and possess excellent problem-solving skills. A
								Bachelor's degree in Computer Science or related field, along
								with several years of experience in Python development, is
								required. If you are a proactive and innovative Python Developer
								looking to take on new challenges and contribute to cutting-edge
								projects, we want to hear from you. Apply now to join our team
								and make a significant impact with your expertise.
							</p>
						</InfoSection>
						<InfoSection heading="Welcomed skills">
							<ul className="ml-6 indent-4 list-image-[url('/assets/images/jobs/send.png')]">
								<li className="text-xs lg:text-base text-gray-500 mb-4">
									Proficient in Python programming language with a strong
									understanding of Django and FastAPI frameworks.
								</li>
								<li className="text-xs lg:text-base text-gray-500 mb-4">
									Experience in developing and maintaining scalable web
									applications using Python.
								</li>
								<li className="text-xs lg:text-base text-gray-500 mb-4">
									Ability to mentor and provide technical guidance to junior
									developers in Python and related frameworks.
								</li>
								<li className="text-xs lg:text-base text-gray-500 mb-4">
									Strong problem-solving skills and the ability to troubleshoot
									and debug complex issues in Python applications.
								</li>
								<li className="text-xs lg:text-base text-gray-500 mb-4">
									Familiarity with software development best practices,
									including code reviews, testing, and documentation.
								</li>
								<li className="text-xs lg:text-base text-gray-500 mb-4">
									Excellent communication skills and the ability to collaborate
									effectively with cross-functional teams.
								</li>
							</ul>
						</InfoSection>
						<InfoSection heading="Required skills">
							<Badges badges={job?.badges} />
						</InfoSection>
						<Button
							text="Apply"
							trailingIcon={<ArrowRight className="h-5 w-5" />}
							variant="primary"
							size="full"
						/>
						<div className="flex lg:hidden items-center justify-center lg:justify-between lg:max-w-lg gap-4 px-5 lg:px-8 py-2 rounded-md border border-gray-200">
							<span>Do you like this job offer?</span>
							<div className="flex items-center gap-4 ">
								<button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200">
									<ThumbsUp className="h-5 w-5 text-gray-500" />
								</button>
								<button className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200">
									<ThumbsDown className="h-5 w-5 text-gray-500" />
								</button>
							</div>
						</div>
					</div>
					{/* Job Highlights */}
					<div className="order-1 lg:order-2 min-h-full flex flex-col justify-between gap-4 lg:gap-8 max-w-max flex-shrink-0">
						<div className="flex flex-wrap lg:flex-col gap-4 lg:gap-8 w-full">
							<InfoBadge
								heading="Salary"
								desc="$30k-60k /Month"
							/>
							<InfoBadge
								heading="Job Type"
								desc="Part-Time"
							/>
							<InfoBadge
								heading="Number of Applicants"
								desc="49 Applicants"
							/>
							<InfoBadge
								heading="Experience"
								desc="1-2 Years"
							/>
							<InfoBadge
								heading="Location"
								desc="NY, USA"
							/>
							<InfoBadge
								heading="Post Date"
								desc="12 Mar, 2023"
							/>
						</div>
						<div className="hidden lg:flex items-center justify-center lg:justify-between lg:max-w-lg gap-4 px-5 lg:px-8 py-2 rounded-md border border-gray-200">
							<span className="text-gray-950">Do you like this job offer?</span>
							<div className="flex items-center gap-4">
								<button className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-200">
									<ThumbsUp className="h-4 w-4 text-gray-500" />
								</button>
								<button className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-200">
									<ThumbsDown className="h-4 w-4 text-gray-500" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-9/12">
				<SectionHeader
					heading="Similar Job Offers"
					leadingIcon={<FireIcon />}
				/>
				<Jobs jobs={jobs} />
			</div>
		</div>
	);
};

export default JobDetails;
