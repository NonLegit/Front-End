import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import Search from './styles';

/**
 *  SearchField
 * @component
 * @returns {React.Component} the search bar in the navbar.
 */
function SearchField() {
  return (
    <Search>
      <SearchIcon sx={{ cursor: 'pointer' }} />
      <InputBase placeholder="Search nonlegit" />
    </Search>
  );
}

export default SearchField;
