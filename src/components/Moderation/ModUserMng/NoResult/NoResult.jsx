import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { NoResultBox } from './styles';
import { UserMngButton } from '../styles';

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
