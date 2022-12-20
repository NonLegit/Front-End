import { Typography, Box } from '@mui/material';
import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';

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
