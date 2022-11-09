import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import Search from './styles';

function searchButton() {
  return (
    <Search>
      <SearchIcon />
      <InputBase placeholder="Search nonlegit" />
    </Search>
  );
}

export default searchButton;
