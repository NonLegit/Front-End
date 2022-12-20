import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import SortType from './Sort/Sort';
import TimeType from './Sort/Time';
import { Header } from './Sort/style';
/**
 * Search type in search by posts
 * @component

 * @return {React.Component} - Search type in search by posts
 */
function SearchHeader() {
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const Sort = query.get('sort') || 'new';
  return (
    <Header>
      <SortType />
      {(Sort === 'top' || Sort === 'comments')
      && <TimeType />}
    </Header>
  );
}

export default SearchHeader;
