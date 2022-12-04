import { useEffect } from 'react';
import useFetch from '../../../../../../hooks/useFetch';

const userInfoServer = () => {
  const [data, dataError, statusCode] = useFetch('users/me');

  useEffect(() => {
    console.log(data);
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);

  return [data?.user];
};

export default userInfoServer;
