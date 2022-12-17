import { Typography } from '@mui/material';
import { StyledHeader } from './styles';

function CommunitiesHeader(props) {
  const { explore } = props;
  return (
    <StyledHeader>
      <Typography>
        Communities related to
        {' '}
        {explore}
      </Typography>
    </StyledHeader>
  );
}

export default CommunitiesHeader;
