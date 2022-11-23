/* eslint-disable react/jsx-no-constructed-context-values */
import { useMemo, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const FilteredPostsContext = createContext();
/**
 * content of the filtered page in profile
 *
 * @property {string} param - subPage name of profile
 * @returns {React.Context} provider of the posts of subPage
 */
function FilteredPostsProvider(props) {
  const { param, children } = props;

  const [data, dataError] = useFetch(`users/${param}`);
  const value = useMemo(() => ({ posts: data?.posts, postsError: dataError }), [data, dataError]);

  return (
    <FilteredPostsContext.Provider value={value}>
      {children}
    </FilteredPostsContext.Provider>

  );
}

export default FilteredPostsProvider;
