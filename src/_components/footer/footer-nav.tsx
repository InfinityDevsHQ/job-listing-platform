import Link from "next/link";
export default function FooterNav() {
  return (
    <div className="col-start-1 flex items-center justify-between text-white font-semibold text-sm lg:text-base">
      <span className="px-4 py-2">
        <Link href={"#"}>About Us</Link>
      </span>
      <span className="w-1 bg-white h-6" />
      <span className="px-4 py-2">
        <Link href={"#"}>Personal Data Policy</Link>
      </span>
      <span className="w-1 bg-white h-6" />
      <span className="px-4 py-2">
        <Link href={"#"}>Cookies Policy</Link>
      </span>
      <span className="w-1 bg-white h-6" />
      <span className="px-4 py-2">
        <Link href={"#"}>Terms and conditions</Link>
      </span>
      <span className="w-1 bg-white h-6" />
      <span className="px-4 py-2">
        <Link href={"#"}>Contact Us</Link>
      </span>
    </div>
  );
}
