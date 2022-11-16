import {
  useContext, createContext, useState, useMemo,
} from 'react';

const PostTypeContext = createContext(null);

function PostTypeContextProvider({ children }) {
  const [initialPostType, setInitialPostType] = useState(0);
  const value = useMemo(() => ({ initialPostType, setInitialPostType }), [initialPostType, setInitialPostType]);
  return (
    <PostTypeContext.Provider
      value={value}
    >
      {children}
    </PostTypeContext.Provider>
  );
}

export const usePostTypeContext = () => useContext(PostTypeContext);

export default PostTypeContextProvider;
