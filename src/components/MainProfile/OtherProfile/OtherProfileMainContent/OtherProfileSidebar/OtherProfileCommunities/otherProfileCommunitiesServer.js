import { useEffect } from 'react';
import useFetch from '../../../../../../hooks/useFetch';

const otherProfileCommunitiesServer = () => {
  const [communities, communitiesError, statusCode] = useFetch('subreddits/mine/moderator');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [communities, communitiesError, statusCode]);

  return [communities?.subreddits];
};

export default otherProfileCommunitiesServer;
