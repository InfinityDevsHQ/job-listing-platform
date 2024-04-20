import Image from "next/image";
import BoardingHeader from "../_components/boarding-header";
import ContactForm from "@/forms/onBoarding/contact-form";
export default function ContactPage() {
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
        <ContactForm />
      </div>
    </div>
  );
}
