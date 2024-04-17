import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MobileNav() {
  return (
    <div className="flex items-center gap-3 lg:hidden">
      <button className="relative">
        <Image
          alt="logo"
          src={"/assets/icons/envelope.svg"}
          width={19}
          height={15}
        />
        <span className="bg-orange-500 h-2 w-2 rounded-full absolute -top-1 -right-2"></span>
      </button>
      <button className="relative ">
        <Image
          alt="logo"
          src={"/assets/icons/bell.svg"}
          width={25}
          height={26}
        />
        <span className="bg-orange-500 h-2 w-2 rounded-full absolute top-0 right-0"></span>
      </button>
      <button className="relative ">
        <Image
          alt="logo"
          src={"/assets/icons/bars.svg"}
          width={25}
          height={255}
        />
      </button>
    </div>
  );
}
