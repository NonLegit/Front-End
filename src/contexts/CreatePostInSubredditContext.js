import {
  useContext, createContext, useMemo, useState,
} from 'react';

const CreatePostInSubredditContext = createContext(null);

function CreatePostInSubredditContextProvider({ children }) {
  const [subredditId, setSubredditId] = useState(null);
  const [subredditName, setSubredditName] = useState(null);
  const [subredditIcon, setSubredditIcon] = useState(null);
  const value = useMemo(() => ({
    subredditId, setSubredditId, subredditName, setSubredditName, subredditIcon, setSubredditIcon,
  }), [subredditIcon, subredditName, subredditId]);
  return (
    <CreatePostInSubredditContext.Provider
      value={value}
    >
      {children}
    </CreatePostInSubredditContext.Provider>
  );
}

export const useCreatePostInSubredditContext = () => useContext(CreatePostInSubredditContext);

export default CreatePostInSubredditContextProvider;
