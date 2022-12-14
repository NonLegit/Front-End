import { Box, Typography } from '@mui/material';

function MoreDetails(props) {
  const { modNote, bannedFor, isOpened } = props;
  return (
    <Box
      display={(isOpened) ? 'flex' : 'none'}
      backgroundColor="#edeff1"
      flexDirection="column"
    >
      <Box padding="16px">
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
          >
            {modNote}
          </Typography>
        </Box>
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
          >
            {bannedFor}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MoreDetails;
