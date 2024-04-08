"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Subscribe() {
  const [mail, setMail] = useState("");
  return (
    <>
      <div className="flex flex-col gap-8 mb-8">
        <h2 className="text-white text-[38px] font-bold leading-[48px] tracking-[-0.0075em]">
          Subscribe to our newsletter
        </h2>
        <p className="section-description text-white">
          Mauris pharetra imperdiet iaculis elementum nulla. Tellus morb
        </p>
      </div>
      <form className="flex gap-2 self-center">
        <Input
          placeholder="Email"
          className="font-semibold rounded-lg border-2 border-gray-300 py-2 pr-14 pl-3"
          name="Mail"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <Button
          type="submit"
          className="px-4 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-800 btn"
        >
          Subscribe
        </Button>
      </form>
      <span className="border-b border-neutral-50 col-span-2 mb-8" />
    </>
  );
}
