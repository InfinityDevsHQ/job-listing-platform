import Image from "next/image";
import Link from "next/link";
export default function FormsHeader() {
  return (
    <Link href={"#"} className="inline-block mb-16 mt-10 lg:mb-37 lg:ml-10">
      <Image
        src={"/assets/logo_white_vertical.png"}
        className="lg:hidden"
        alt="Logo"
        width={77}
        height={58}
      />
      <Image
        src={"/assets/logo.png"}
        className="hidden lg:inline-block"
        alt="Logo"
        width={208}
        height={50}
      />
    </Link>
  );
}
