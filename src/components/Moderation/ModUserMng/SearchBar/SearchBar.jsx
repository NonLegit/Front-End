import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import {
  StyledInputBase, StyledIconWrapper, StyledSearchBar, StyledSearchContainer,
} from './styles';

/**
 * the search bar
 * @component
 * @property {function} childToParent it is a function state to pass the query from the child (search bar) to its parent (user management list)
 * @return {React.Component} - the search bar component
 */

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
