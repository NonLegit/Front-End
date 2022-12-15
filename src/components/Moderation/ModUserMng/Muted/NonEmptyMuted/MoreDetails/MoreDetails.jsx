import { Box, Typography } from '@mui/material';

function MoreDetails(props) {
  const { modNote, isOpened } = props;
  return (
    <Box
      display={(isOpened) ? 'flex' : 'none'}
      backgroundColor="#edeff1"
      flexDirection="column"
    >
      <Box padding="16px" display="flex" alignItems="center" paddingBottom="10px">
        <Typography
          fontSize="12px"
          color="#1C1C1C"
        >
          {modNote}
        </Typography>
      </Box>
    </Box>
  );
}

export default MoreDetails;
