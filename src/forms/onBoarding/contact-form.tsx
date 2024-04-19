import CompanyGithubSecond from "@/components/svgs/company-github-second";
import CompanyPhone from "@/components/svgs/company-phone";
import CompanyTwitter from "@/components/svgs/company-twitter";
import AppInput from "@/components/ui/app-input";

export default function ContactForm() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-8">
        <AppInput
          variant={"primary"}
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          leadingIcon={<CompanyPhone width={16} height={16} />}
        />
        <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
          Social Networks
        </h3>
        <AppInput
          variant={"primary"}
          name="Linkedin"
          type="text"
          placeholder="Linkedin"
        />
        <AppInput
          variant={"primary"}
          name="X"
          type="text"
          placeholder="X"
          leadingIcon={<CompanyTwitter width={16} height={16} />}
        />
        <AppInput
          variant={"primary"}
          name="github"
          type="text"
          placeholder="github"
          leadingIcon={<CompanyGithubSecond width={16} height={16} />}
        />
      </div>
    </>
  );
}
