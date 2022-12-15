import SearchIcon from '@mui/icons-material/Search';
import {
  StyledInputBase, StyledIconWrapper, StyledSearchBar, StyledSearchContainer,
} from './styles';

function SearchBar() {
  return (
    <StyledSearchBar>
      <StyledSearchContainer>
        <StyledInputBase placeholder="Search for a user" />
        <StyledIconWrapper>
          <SearchIcon sx={{ color: 'white' }} />
        </StyledIconWrapper>
      </StyledSearchContainer>
    </StyledSearchBar>
  );
}
export default SearchBar;
