import Link from "next/link";
import MobileNav from "./mobile-nav";
export default function Navigation() {
  return (
    <>
      <nav className="hidden lg:block">
        <ol className="flex gap-4">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"#"}>For Companies</Link>
          </li>
        </ol>
      </nav>
      <MobileNav />
    </>
  );
}
