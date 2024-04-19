"use client";
import Pill from "@/components/ui/pill";
import useTermsAndConditionsData from "@/stores/terms-and-conditions-data-store";
import Link from "next/link";

export default function TermsAndConditionsForm() {
  const { termsData, setTermsData } = useTermsAndConditionsData();
  return (
    <form action="">
      <h3 className="mt-4 lg:mt-8 text-mute-1 text-base lg:text-lg font-bold lg:font-semibold font-sans">
        Terms And Conditions
      </h3>
      <Pill
        active={termsData.termsAgreed}
        setValue={() =>
          setTermsData({ ...termsData, termsAgreed: !termsData.termsAgreed })
        }
      >
        <p
          className={`text-xxs lg:text-base font-sans ${
            termsData.termsAgreed ? "text-white" : "text-mute-1"
          }`}
        >
          <span>I agree to</span>{" "}
          <Link href={"/tos"} className="underline">
            Terms and Conditions
          </Link>
        </p>
      </Pill>
    </form>
  );
}
