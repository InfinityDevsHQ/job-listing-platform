"use client";
import Pill from "@/components/ui/pill";
import useTermsAndConditionsData from "@/stores/terms-and-conditions-data-store";
import { termsAndConditionsFormSchema } from "@/types/schemas/terms-and-conditions-schema";
import Link from "next/link";
import { useState } from "react";
import { ZodIssue } from "zod";

export default function TermsAndConditionsForm() {
  const { termsData, setTermsData } = useTermsAndConditionsData();
  const [errors, setErrors] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const validate = termsAndConditionsFormSchema.safeParse(termsData);
    if (validate.success) {
      console.log("DatA Validated", validate.data);
    } else {
      setErrors("Please Agree to the terns abd conditions");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
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
      <button type="submit">HHHH</button>
    </form>
  );
}
