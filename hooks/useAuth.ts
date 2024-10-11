import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { parseCookies } from 'nookies';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.api_token;

    const timeoutId = setTimeout(() => {
      if (!token) {
        router.push('/signin');
      } else {
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [router]);

  return { isLoading, isLoggedIn };
};

export default useAuth;
