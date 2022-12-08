import {
  useEffect, useState, createContext, useContext, useMemo,
} from 'react';

export const PostContext = createContext();

function PostContextProvider(props) {
  const { children } = props;

  // State
  const [post, setPost] = useState(null);

  // UseEffect
  useEffect(() => {
    setPost({ votes: 10, title: 'Basma Post', text: 'To be edited' });
    console.log('hello');
  });

  const value = useMemo(() => ({ post, setPost }), [post, setPost]);

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);
export default PostContextProvider;
