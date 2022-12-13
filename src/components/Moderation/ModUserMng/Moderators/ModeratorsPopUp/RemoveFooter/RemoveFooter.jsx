import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';

function RemoveFooter(props) {
  const { handleClickCloseRemove } = props;
  return (
    <StyledBox>
      <RedditButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        variant="outlined"
        onClick={handleClickCloseRemove}
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
        Remove
      </RedditButton>
    </StyledBox>
  );
}

export default RemoveFooter;
