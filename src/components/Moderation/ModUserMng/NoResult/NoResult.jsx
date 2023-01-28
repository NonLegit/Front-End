import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { NoResultBox } from './styles';
import { UserMngButton } from '../styles';

/**
 * the whole page of no result that appears when try to seach on a user in user managment section in moderatio page
 * @component
 * @property {string} query it is the query in the search input field
 * @property {function} childToParent it is a function state to pass the query from the child (search bar) to its parent (user management list)
 * @return {React.Component} - no result page
 */

function NoResult(props) {
  const { query, childToParent } = props;
  return (
    <NoResultBox>
      <SearchIcon fontSize="large" />
      <Typography
        color="#878A8C"
        fontSize="18px"
        padding="30px 0px 0px 0px"
      >
        No results for u/
        {' '}
        {query}
      </Typography>
      <UserMngButton onClick={() => childToParent('')}>
        See all
      </UserMngButton>
    </NoResultBox>
  );
}

export default NoResult;
