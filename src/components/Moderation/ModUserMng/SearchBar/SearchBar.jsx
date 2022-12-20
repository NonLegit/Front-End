import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import {
  StyledInputBase, StyledIconWrapper, StyledSearchBar, StyledSearchContainer,
} from './styles';

function SearchBar({ childToParent }) {
  const [query, serQuery] = React.useState('');
  return (
    <StyledSearchBar>
      <StyledSearchContainer>
        <StyledInputBase
          onChange={(e) => serQuery(e.target.value)}
          placeholder="Search for a user"
        />
        <StyledIconWrapper onClick={() => childToParent(query)}>
          <SearchIcon sx={{ color: 'white', cursor: 'pointer' }} />
        </StyledIconWrapper>
      </StyledSearchContainer>
    </StyledSearchBar>
  );
}
export default SearchBar;
