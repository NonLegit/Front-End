import { Box, Typography } from '@mui/material';
import { StyledDetails } from '../../../styles';

function MoreDetails(props) {
  const { modNote, isOpened } = props;
  return (
    <StyledDetails
      display={(isOpened) ? 'flex' : 'none'}
    >
      <Box padding="16px" display="flex" alignItems="center" paddingBottom="10px">
        <Typography
          fontSize="14px"
          color="#878A8C"
        >
          {modNote}
        </Typography>
      </Box>
    </StyledDetails>
  );
}

export default MoreDetails;
