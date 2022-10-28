import SortType from './Sort/Sort';
import TimeType from './Sort/Time';
import { Header } from './Sort/style';

function SearchHeader() {
  return (
    <Header>
      <SortType />
      <TimeType />
    </Header>
  );
}

export default SearchHeader;
