import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();

  const logout = (redirectPath: string) => {
    localStorage.clear();
    sessionStorage.clear();

    router.push(redirectPath);
  };

  return {
    logout,
  };
};
