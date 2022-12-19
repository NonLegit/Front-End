import {
  useContext, createContext, useState, useMemo,
} from 'react';

const PostTypeContext = createContext(null);

function PostTypeContextProvider({ children }) {
  const [initialPostType, setInitialPostType] = useState(0);
  const [initialPostUrl, setInitialPostUrl] = useState('');
  const value = useMemo(() => ({
    initialPostType, setInitialPostType, initialPostUrl, setInitialPostUrl,
  }), [initialPostType, setInitialPostType, initialPostUrl, setInitialPostUrl]);
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
