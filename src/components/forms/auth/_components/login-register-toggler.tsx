import { cn } from '@/lib/utils';
import Link from 'next/link';
type LoginRegisterTogglerProps = {
  currentPage: 'login' | 'register';
};
const LoginRegisterToggler = ({ currentPage }: LoginRegisterTogglerProps) => {
  return (
    <div className="mb-8 flex items-center justify-center gap-2">
      <span className="text-gray-800">
        {currentPage === 'register' ? `Already have an account?` : `Don't have an account?`}
      </span>
      <Link
        href={currentPage === 'register' ? '/login' : '/register'}
        className={cn('flex items-center gap-2 font-bold text-primary-800')}
      >
        {currentPage === 'register' ? (
          <>
            <span>Login</span>
          </>
        ) : (
          <>
            <span>Register</span>
          </>
        )}
      </Link>
    </div>
  );
};

export default LoginRegisterToggler;
