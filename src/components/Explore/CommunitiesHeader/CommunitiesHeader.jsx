import { Typography } from '@mui/material';
import { StyledHeader } from './styles';

/**
 * header of the communities
 * @component
 * @property {string} explore the explore page header
 * @return {React.Component} - header of the communities
 */

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
