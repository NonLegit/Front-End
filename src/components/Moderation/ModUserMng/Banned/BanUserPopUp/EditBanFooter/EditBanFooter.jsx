import { Box } from '@mui/material';
import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';

function EditBanFooter(props) {
  const { handleClickCloseBan } = props;
  return (
    <StyledBox>
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
        >
          Ban user
        </RedditButton>
      </Box>
    </StyledBox>
  );
}

export default EditBanFooter;
