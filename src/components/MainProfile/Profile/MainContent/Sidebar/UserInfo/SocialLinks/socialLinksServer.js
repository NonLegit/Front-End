import { useEffect } from 'react';
import useFetch from '../../../../../../../hooks/useFetch';

const allSocialLinks = () => {
  const [data, dataError, statusCode] = useFetch('/users/social_links');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [data, dataError, statusCode]);

  return [data?.socialLinks];
};

export default allSocialLinks;
