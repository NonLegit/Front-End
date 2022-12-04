import { useEffect } from 'react';
import useFetch from '../../../../../../hooks/useFetch';

const communitiesServer = () => {
  const [communities, communitiesError, statusCode] = useFetch('subreddits/mine/moderator');
  useEffect(() => {
    console.log(communities);
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [communities, communitiesError, statusCode]);

  return [communities?.data];
};

export default communitiesServer;
