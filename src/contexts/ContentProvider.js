/* eslint-disable react/jsx-no-constructed-context-values */
import { useMemo, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const ContentContext = createContext();
/**
 * content of the overview page in profile containing posts and comments
 *
 * @property {string} name - username of profile
 * @returns {React.Context} provider of the content data
 */
function ContentProvider(props) {
  const { children, name } = props;
  const [data, dataError] = useFetch(`users/${name}/overview`);
  const value = useMemo(() => ({ posts: data?.posts, comments: data?.comments, dataError }), [data, dataError]);

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>

  );
}

export default ContentProvider;
