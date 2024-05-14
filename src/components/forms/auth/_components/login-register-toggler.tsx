import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
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
        className={cn('flex items-center gap-2 text-neutral-950')}
      >
        {currentPage === 'register' ? (
          <>
            <span>Login</span>
            <MoveRight className="h-4" />
          </>
        ) : (
          <>
            <span>Register</span>
            <MoveRight className="h-4" />
          </>
        )}
      </Link>
    </div>
  );
};

export default LoginRegisterToggler;
