"use client";
import AppInput from "@/components/ui/app-input";
import Button from "@/components/ui/button";
import { useState } from "react";

export default function Subscribe() {
  const [mail, setMail] = useState("");
  function handleSubmit() {
    console.log("Here:", mail);
  }
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-8 mb-8 col-span-2 lg:col-span-1 text-center lg:text-left">
        <h2 className="text-white text-base lg:text-mid-1 font-bold lg:leading-12 lg:tracking-tightest">
          Subscribe to our newsletter
        </h2>
        <p className="section-description text-white">
          Mauris pharetra imperdiet iaculis elementum nulla. Tellus morb
        </p>
      </div>
      <form
        className="flex flex-col gap-5 lg:flex-row lg:gap-2 self-center col-span-2 lg:col-span-1"
        onSubmit={handleSubmit}
      >
        <AppInput
          placeholder="Email"
          containerClassName="self-stretch h-full"
          className="!w-full self-stretch flex-1 font-semibold placeholder:text-gray-1 lg:placeholder:text-gray-600 rounded-lg bg-white bg-opacity-25 lg:bg-opacity-100 border border-gray-1 lg:border-2 lg:border-gray-300 px-1 py-1.5 lg:py-2 lg:pr-14 lg:pl-3"
          name="Mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <Button
          type="submit"
          text="Subscribe"
          variant={"primary"}
          onClick={() => {}}
        />  
      </form>
      <span className="border-b border-neutral-50 col-span-2 mb-8" />
    </>
  );
}
