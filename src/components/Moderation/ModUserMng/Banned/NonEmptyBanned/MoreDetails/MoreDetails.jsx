import { Box, Typography } from '@mui/material';
import { StyledDetails } from '../../../styles';

function MoreDetails(props) {
  const { modNote, bannedFor, isOpened } = props;
  return (
    <StyledDetails
      display={(isOpened) ? 'flex' : 'none'}
    >
      <Box padding="16px">
        {(modNote !== '') && (
          <Box display="flex" alignItems="center" paddingBottom="10px">
            <Typography
              fontSize="10px"
              color="#878A8C"
              fontWeight={700}
              marginRight="3px"
              textTransform="uppercase"
            >
              mod note:
            </Typography>
            <Typography
              fontSize="12px"
              color="#1C1C1C"
              paddingBottom="2px"
            >
              {modNote}
            </Typography>
          </Box>
        )}
        <Box display="flex" alignItems="center">
          <Typography
            fontSize="10px"
            color="#878a8c"
            fontWeight={700}
            marginRight="3px"
            textTransform="uppercase"
          >
            banned for:
          </Typography>
          <Typography
            fontSize="12px"
            color="#1C1C1C"
            paddingBottom="2px"
          >
            {bannedFor}
          </Typography>
        </Box>
      </Box>
    </StyledDetails>
  );
}

export default MoreDetails;
