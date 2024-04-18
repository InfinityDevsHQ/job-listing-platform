import Image from "next/image";
import BoardingHeader from "../_components/boarding-header";
import ContactFormInputs from "./contact-form/contact-form-inputs";
export default function ContactForm() {
  // Also add dropdowns later
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="hidden lg:flex items-center justify-center col-span-2 lg:col-span-1 w-full">
        <Image
          src={"/assets/boarding/contact_poster.png"}
          alt="Location Poster"
          width={580}
          height={580}
        />
      </div>
      <div className="flex justify-center flex-col gap-4 w-full col-span-2 lg:col-span-1">
        <BoardingHeader
          title="4. Contact"
          description="Share you contact info, get noticed by employers!"
        />
        <ContactFormInputs />
      </div>
    </div>
  );
}
