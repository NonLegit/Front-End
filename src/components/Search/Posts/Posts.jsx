import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import SortType from './Sort/Sort';
import TimeType from './Sort/Time';
import { Header } from './Sort/style';

function SearchHeader() {
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const query = useQuery();
  const Sort = query.get('sort') || 'Relevance';
  return (
    <Header>
      <SortType />
      {(Sort === 'Relevance' || Sort === 'Top' || Sort === 'Most Comments')
      && <TimeType />}
    </Header>
  );
}

export default SearchHeader;
