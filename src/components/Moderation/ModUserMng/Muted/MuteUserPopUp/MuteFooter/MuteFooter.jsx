import { StyledBox } from './styles';
import { RedditButton } from '../../../../styles';

function MuteFooter(props) {
  const { handleClickCloseMute } = props;
  return (
    <StyledBox>
      <RedditButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        variant="outlined"
        onClick={handleClickCloseMute}
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
        Mute user
      </RedditButton>
    </StyledBox>
  );
}

export default MuteFooter;
