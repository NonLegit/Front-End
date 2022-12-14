import {
  useContext, createContext, useState, useMemo,
} from 'react';

const HiddenPostsContext = createContext(null);

function HiddenPostsContextProvider({ children }) {
  const [hiddenPosts, setHiddenPosts] = useState([]);
  const value = useMemo(() => ({ hiddenPosts, setHiddenPosts }), [hiddenPosts, setHiddenPosts]);
  return (
    <HiddenPostsContext.Provider
      value={value}
    >
      {children}
    </HiddenPostsContext.Provider>
  );
}

export const useHiddenPostsContext = () => useContext(HiddenPostsContext);

export default HiddenPostsContextProvider;
