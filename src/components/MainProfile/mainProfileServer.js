import { useEffect } from 'react';

import useFetch from '../../hooks/useFetch';

const UserInfoServer = (username) => {
  const [data, dataError, statusCode] = useFetch(`users/${username}/about`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);
  return [data?.user, statusCode];
};

export default UserInfoServer;
