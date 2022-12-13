import { StyledBox } from './styles';
import { RedditButton } from '../../styles';

function Footer(props) {
  const { buttonFunction, firstButtonText, secondButtonText } = props;
  return (
    <StyledBox>
      <RedditButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        variant="outlined"
        onClick={buttonFunction}
        disableRipple
        disableFocusRipple
      >
        {firstButtonText}
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
        {secondButtonText}
      </RedditButton>
    </StyledBox>
  );
}

export default Footer;
