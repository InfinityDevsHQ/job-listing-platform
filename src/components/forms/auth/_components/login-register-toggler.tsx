import { cn } from '@/lib/utils';
import Link from 'next/link';
type LoginRegisterTogglerProps = {
  currentPage: 'login' | 'register';
};
const LoginRegisterToggler = ({ currentPage }: LoginRegisterTogglerProps) => {
  return (
    <div className="mb-4 flex items-center justify-center gap-2 sm:mb-8">
      <span className="text-white lg:text-dark-name">
        {currentPage === 'register' ? `Already have an account?` : `Don't have an account?`}
      </span>
      <Link
        href={currentPage === 'register' ? '/login' : '/register'}
        className={cn(
          'flex items-center gap-2 py-2 font-bold text-zinc-50 xs:px-4 lg:text-dark-greenLight'
        )}
      >
        {currentPage === 'register' ? (
          <>
            <span>Login</span>
          </>
        ) : (
          <>
            <span>Register Now</span>
          </>
        )}
      </Link>
    </div>
  );
};

export default LoginRegisterToggler;
