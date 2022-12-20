import SearchIcon from '@mui/icons-material/Search';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { InputBase } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, StyledChip } from './styles';

/**
 * SearchField Sign Navbar
 * @component
 * @returns {React.Component} the search bar in the navbar.
 */

function SearchField() {
  const navigate = useNavigate();

  const [isEmpty, setIsEmpty] = React.useState(1);
  const [query, setQuery] = React.useState('');
  const [chipShow, setchipShow] = React.useState(0);
  const [chipLabel, setchipLabel] = React.useState('');

  React.useEffect(() => {
    if (query.length === 0) { setIsEmpty(true); } else { setIsEmpty(false); }
  }, [query]);

  const handleClick = () => {
    setQuery('');
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`search/?q=${query}`);
      setchipLabel(query);
      setchipShow(true);
      setQuery('');
    } else if (e.key === 'Backspace' && query.length === 0) {
      setchipShow(false);
    }
  };

  const handleDelete = () => {
    setchipShow(false);
  };

  return (
    <Search>
      <SearchIcon />
      <StyledChip chipShow={chipShow} label={chipLabel} onDelete={handleDelete} />
      <InputBase
        id="nav_search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search nonlegit"
        value={query}
      />
      {
        !isEmpty && <CancelOutlinedIcon color="black" onClick={handleClick} />
      }
    </Search>
  );
}

export default SearchField;
