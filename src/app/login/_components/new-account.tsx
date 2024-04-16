import Link from "next/link";
export default function NewAccount() {
  return (
    <div className="flex items-center justify-between">
      <span className="font-sans px-4 py-2 font-medium text-16 leading-6 !text-gray-200">
        Don&apos;t have an account?
      </span>
      <Link
        href={"/register"}
        className="self-end px-4 py-2 font-sans  text-primary-200 text-16 leading-6 font-medium"
      >
        Register now
      </Link>
    </div>
  );
}
