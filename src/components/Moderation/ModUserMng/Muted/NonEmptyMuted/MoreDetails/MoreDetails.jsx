import { Box, Typography } from '@mui/material';
import { StyledDetails } from '../../../styles';

/**
 * more datails tab
 * @component
 * @property  {boolean} isOpened determine the state of more details tab to be showed or hidden
 * @property {string} modNote note from the moderator about the muted user
 * @return {React.Component} - more details tab
 */

function MoreDetails(props) {
  const { modNote, isOpened } = props;
  return (
    <StyledDetails
      display={(isOpened) ? 'flex' : 'none'}
    >
      <Box padding="16px" display="flex" alignItems="center" paddingBottom="10px">
        {(() => {
          if (modNote === '') {
            return (
              <Typography
                fontSize="10px"
                color="#878A8C"
                fontWeight={700}
                marginRight="3px"
                textTransform="uppercase"
              >
                No mod Note.
              </Typography>
            );
          }
          return (
            <>
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
            </>
          );
        })()}

      </Box>
    </StyledDetails>
  );
}

export default MoreDetails;
