import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';

function BanFooter(props) {
  const { handleClickCloseApproved } = props;
  return (
    <StyledBox>
      <RedditButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        variant="outlined"
        onClick={handleClickCloseApproved}
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
        Add user
      </RedditButton>
    </StyledBox>
  );
}

export default BanFooter;
