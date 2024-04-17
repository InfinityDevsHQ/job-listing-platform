import Link from "next/link";
type LoginRegisterTogglerProps = {
  currentPage: "login" | "register";
};
export default function LoginRegisterToggler({
  currentPage,
}: LoginRegisterTogglerProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <span className="font-sans px-4 py-2 font-medium text-16 leading-6 !text-gray-200">
        {currentPage === "register"
          ? `Already Have Account ?`
          : `Don't have an account?`}
      </span>
      <Link
        href={currentPage === "register" ? "/login" : "/register"}
        className="self-end px-4 py-2 font-sans  text-primary-200 text-16 leading-6 font-medium"
      >
        {currentPage === "register" ? `Login Now` : `Register Now`}
      </Link>
    </div>
  );
}
