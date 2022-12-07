import { useEffect } from 'react';
import useFetch from '../../../../../../hooks/useFetch';

export const otherProfileCommunitiesServer = (username) => {
  const [communities, communitiesError, statusCode] = useFetch(`subreddits/moderator/${username}`);

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [communities, communitiesError, statusCode]);

  return [communities?.data];
};

export const subscribedUser = () => {
  const [communities, communitiesError, statusCode] = useFetch('subreddits/mine/subscriber');

  useEffect(() => {
    if (statusCode === 401) {
      window.location.pathname = 'login';
    }
  }, [communities, communitiesError, statusCode]);

  return [communities?.data];
};
