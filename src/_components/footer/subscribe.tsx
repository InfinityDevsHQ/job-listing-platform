"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Subscribe() {
  const [mail, setMail] = useState("");
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-8 mb-8 col-span-2 lg:col-span-1 text-center lg:text-left">
        <h2 className="text-white text-base lg:text-[38px] font-bold lg:leading-[48px] lg:tracking-[-0.0075em]">
          Subscribe to our newsletter
        </h2>
        <p className="section-description text-white">
          Mauris pharetra imperdiet iaculis elementum nulla. Tellus morb
        </p>
      </div>
      <form className="flex flex-col gap-5 lg:flex-row lg:gap-2 self-center col-span-2 lg:col-span-1">
        <Input
          placeholder="Email"
          className="font-semibold placeholder:text-[#d1d1d1] lg:placeholder:text-gray-600 rounded-lg bg-white bg-opacity-25 lg:bg-opacity-100 border border-[#d1d1d1] lg:border-2 lg:border-gray-300 px-1 py-1.5 lg:py-2 lg:pr-14 lg:pl-3"
          name="Mail"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <Button
          type="submit"
          className="px-2.5 rounded-2xl lg:px-4 py-2 lg:rounded-lg border-2 border-gray-300 bg-white text-secondary lg:text-gray-800 mb-5 lg:mb-0  btn"
        >
          Subscribe
        </Button>
      </form>
      <span className="border-b border-neutral-50 col-span-2 mb-8" />
    </>
  );
}
