'use client';
import Button from '@/components/ui/button';
import { deleteToken, getToken } from '@/lib/auth-token';
import { getUser } from '@/lib/user';
import { cn } from '@/lib/utils';
import useAuthStore from '@/stores/authStore/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Profile = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const logout = async () => {
    await deleteToken();
    router.push('/login');
  };

  const setUser = useAuthStore((state) => state.setUser);

  const checkToken = async () => {
    const accessToken = await getToken();
    if (!accessToken) {
      router.push('/login');
      return;
    }
  };

  useEffect(() => {
    checkToken();

    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4 lg:gap-8 lg:p-8">
      <div className="flex flex-col gap-5 border border-neutral-200 bg-white p-4 lg:p-8">
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src={'/assets/candidates/candidate.png'}
            alt="test"
            width={150}
            height={150}
            className={cn('rounded-full border-4 border-primary-100', {
              'border-green-500': user.online_status,
            })}
          />
          <h4 className="text-xl font-bold text-neutral-950 lg:text-4xl">{user.name}</h4>
          <p className="text-2xl text-gray-400">Software Engineer</p>
          <Button variant="primary" text="Logout" onClick={logout} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
