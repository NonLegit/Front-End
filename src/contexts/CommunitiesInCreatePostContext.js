import { useContext, createContext, useMemo } from 'react';
import createPostServer from '../components/CreatePost/CreatePostContainer/createPostServer';

const CommunitiesInCreatePostContext = createContext(null);

function CommunitiesInCreatePostContextProvider({ children }) {
  const [communities, communitiesError] = createPostServer();
  console.log(communities);
  const value = useMemo(() => ({ communities, communitiesError }), [communities, communitiesError]);
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
