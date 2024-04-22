import Hero from "@/components/ui/hero";
import JobsList from "@/_components/jobs/jobs-list";
import CompaniesList from "@/_components/companies/companies-list";
import SectionHeader from "@/components/ui/section-header";
import FireIcon from "@/components/svgs/fire";

export default function Home() {
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
	const companies = [
		{
			companyLogo: "/assets/webglobe.png",
			companyName: "Webglobe",
			companyDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio quaerat labore deleniti sapiente iste! Consequuntur sunt tempore expedita quidem unde. Corporis ipsum ducimus voluptas asperiores fugit maxime, adipisci minus.
    `,
		},
		{
			companyLogo: "/assets/webglobe.png",
			companyName: "Webglobe 2",
			companyDescription: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, odio quaerat labore deleniti sapiente iste! Consequuntur sunt tempore expedita quidem unde. Corporis ipsum ducimus voluptas asperiores fugit maxime, adipisci minus.
    `,
		},
	];
	return (
		<div className="grid grid-cols-3 gap-8 p-4 lg:p-16 border border-red-500">
			<div className="col-span-3 lg:col-span-2 flex flex-col gap-4 lg:gap-8">
				<Hero />
				<SectionHeader
					leadingIcon={<FireIcon className="text-red-900" />}
					heading="Latest Hot Offers"
					helpText={`12,054 Jobs`}
				/>
				<JobsList jobs={jobs} />
			</div>
			<div className="flex flex-col gap-5 col-span-3 lg:col-span-1">
				<SectionHeader
					leadingIcon={<FireIcon className="text-black" />}
					heading="Companies That Will Grow You Forward"
				/>
				<CompaniesList companies={companies} />
			</div>
		</div>
	);
}
