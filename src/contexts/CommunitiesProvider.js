/* eslint-disable react/jsx-no-constructed-context-values */
import {
  useMemo, createContext,
} from 'react';
import useFetch from '../hooks/useFetch';

export const CommunitiesContext = createContext();

/**
 * subreddit the user is joined in
 *
 * @property {string} name - username of profile
 * @returns {React.Context} provider of the communities
 */
function CommunitiesProvider(props) {
  const { children } = props;
  const [communities, communitiesError, statusCode] = useFetch('subreddit/mine/moderator');
  const value = useMemo(() => ({ communities: communities?.subreddits, communitiesError, statusCode }), [communities, communitiesError, statusCode]);

  return (
    <CommunitiesContext.Provider value={value}>
      {children}
    </CommunitiesContext.Provider>

  );
}

export default CommunitiesProvider;
