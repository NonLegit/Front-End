import { Typography, Box } from '@mui/material';
import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';

/**
 * Ban Footer
 * @component
 * @property  {function} handleClickCloseBan close the popup when a button is clicked
 * @property  {function} handleBan operate the function of banning user and send data to backend when a button is clicked
 * @return {React.Component} - Ban Footer component
 */

function BanFooter(props) {
  const { handleClickCloseBan, handleBan } = props;

  return (
    <StyledBox>
      <Typography>
        • Visible to banned user
      </Typography>
      <Box>
        <RedditButton
          fontSize="15px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="outlined"
          onClick={handleClickCloseBan}
          disableRipple
          disableFocusRipple
        >
          Cancel
        </RedditButton>
        <RedditButton
          sx={{ marginLeft: 1 }}
          fontSize="14px"
          padding="0px 24px 0px 24px"
          fontWeight="bold"
          variant="contained"
          disableRipple
          disableFocusRipple
          onClick={handleBan}
        >
          Ban user
        </RedditButton>
      </Box>
    </StyledBox>
  );
}

export default BanFooter;
