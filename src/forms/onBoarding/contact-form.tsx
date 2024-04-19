import CompanyGithubSecond from "@/components/svgs/company-github-second";
import CompanyPhone from "@/components/svgs/company-phone";
import CompanyTwitter from "@/components/svgs/company-twitter";
import AppInput from "@/components/ui/app-input";
import useOnBoardingContactData from "@/stores/on-boarding-contact-from-store";

export default function ContactForm() {
  const { onBoardingContactData, setOnBoardingContactData } =
    useOnBoardingContactData();
  function handleChange(e) {
    const { name, value } = e.target;
    setOnBoardingContactData({ ...onBoardingContactData, [name]: value });
  }
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-8">
        <AppInput
          variant={"primary"}
          name="phoneNumber"
          value={onBoardingContactData.phoneNumber}
          type="text"
          placeholder="Phone Number"
          onChange={handleChange}
          leadingIcon={<CompanyPhone width={16} height={16} />}
        />
        <h3 className="text-mute text-base lg:text-lg font-bold lg:font-semibold font-sans">
          Social Networks
        </h3>
        <AppInput
          variant={"primary"}
          name="linkedin"
          value={onBoardingContactData.linkedin}
          onChange={handleChange}
          type="text"
          placeholder="Linkedin"
        />
        <AppInput
          variant={"primary"}
          name="twitter"
          value={onBoardingContactData.twitter}
          onChange={handleChange}
          type="text"
          placeholder="X"
          leadingIcon={<CompanyTwitter width={16} height={16} />}
        />
        <AppInput
          variant={"primary"}
          name="github"
          value={onBoardingContactData.github}
          onChange={handleChange}
          type="text"
          placeholder="github"
          leadingIcon={<CompanyGithubSecond width={16} height={16} />}
        />
      </div>
    </>
  );
}
