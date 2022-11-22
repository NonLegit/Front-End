/* eslint-disable react/jsx-no-constructed-context-values */
import {
  useMemo, createContext,
} from 'react';
import useFetch from '../hooks/useFetch';

export const PostsContext = createContext();

/**
 * content of posts tap in profile page
 *
 * @property {string} name - username of profile
 * @returns {React.Context} provider of posts in postsTap
 */
function PostsProvider(props) {
  const { children, name } = props;

  const [data, dataError] = useFetch(`user/${name}/post`);
  const value = useMemo(() => ({ posts: data?.posts, dataError }), [data, dataError]);

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>

  );
}

export default PostsProvider;
