import { useContext, createContext, useMemo } from 'react';

import useFetch from '../hooks/useFetch';

const CommunitiesInCreatePostContext = createContext(null);

function CommunitiesInCreatePostContextProvider({ children }) {
  const communitiesUrl = '/subreddits/mine/subscriber';
  const [communities, communitiesError] = useFetch(communitiesUrl);
  console.log(communities, communitiesError);
  const value = useMemo(() => ({ communities: communities?.communitiesList, communitiesError }), [communities, communitiesError]);
  return (
    <CommunitiesInCreatePostContext.Provider
      value={value}
    >
      {children}
    </CommunitiesInCreatePostContext.Provider>
  );
}

export const useCommunitiesInCreatePostContext = () => useContext(CommunitiesInCreatePostContext);

export default CommunitiesInCreatePostContextProvider;
