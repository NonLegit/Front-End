import {
  useEffect, useState, createContext, useContext, useMemo,
} from 'react';

// Server
import { getPost } from '../components/Multilevel/multiLevelServer';

export const PostContext = createContext();

function PostContextProvider(props) {
  const { postID, children } = props;

  // State
  const [post, setPost] = useState(null);

  // UseEffect
  useEffect(() => {
    getPost(postID, setPost);
    console.log('PostContext.js', postID);
  }, []);

  const value = useMemo(() => ({ post, setPost }), [post, setPost]);

  return (
    <PostContext.Provider value={value}>
      {children}
    </PostContext.Provider>
  );
}

export const usePostContext = () => useContext(PostContext);
export default PostContextProvider;
