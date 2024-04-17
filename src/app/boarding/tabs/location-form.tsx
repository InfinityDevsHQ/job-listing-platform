import { Input } from "@/components/ui/input";
import CompanyMail from "@/components/svgs/coompany-mail";
import PageHeader from "@/_components/page-header";
export default function LocationForm() {
  // Replace Icons Later
  // Also add dropdowns later
  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        title="1. Location"
        boXClassName="!py-0"
        textClassName="!text-left !text-2xl lg:!text-4xl !text-gray-950 !font-sans"
      />
      <div className="flex flex-col">
        <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
          <CompanyMail width={14} height={11} />
          <Input
            className="w-full border-none placeholder:text-gray-400 !text-black"
            placeholder="Country"
            name="country"
            type="text"
          />
        </div>
        <div className="px-3 py-2 flex items-center gap-2.5 bg-white w-full border-gray-300">
          <CompanyMail width={14} height={11} />
          <Input
            className="w-full border-none placeholder:text-gray-400 !text-black"
            placeholder="Password"
            name="password"
            type="password"
          />
        </div>
      </div>
    </div>
  );
}
