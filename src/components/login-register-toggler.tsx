import Link from 'next/link';
type LoginRegisterTogglerProps = {
  currentPage: 'login' | 'register';
};
export default function LoginRegisterToggler({ currentPage }: LoginRegisterTogglerProps) {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      <span className="font-sans text-base text-neutral-50 lg:text-black">
        {currentPage === 'register' ? `Already Have Account ?` : `Don't have an account?`}
      </span>
      <Link
        href={currentPage === 'register' ? '/login' : '/register'}
        className="text-16 self-end px-4 py-2  font-sans font-medium leading-6 text-primary-200 lg:text-primary-900"
      >
        {currentPage === 'register' ? `Login Now` : `Register Now`}
      </Link>
    </div>
  );
}
