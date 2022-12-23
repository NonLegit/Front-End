import { StyledBox } from './styles';
import { RedditButton } from '../../styles';

/**
 * Footer of popups for user management section
 * @component
 * @property {function} firstButtonFunction the first button functionality
 * @property {string} firstButtonText the first button label
 * @property {function} secondButtonFuncion the second button functionality
 * @property {string} secondButtonText the second button label
 * @return {React.Component} - Footer component
 */

function Footer(props) {
  const {
    firstButtonFunction, firstButtonText, secondButtonFunction, secondButtonText,
  } = props;
  return (
    <StyledBox>
      <RedditButton
        fontSize="15px"
        padding="0px 24px 0px 24px"
        fontWeight="bold"
        variant="outlined"
        onClick={firstButtonFunction}
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
        onClick={secondButtonFunction}
      >
        {secondButtonText}
      </RedditButton>
    </StyledBox>
  );
}

export default Footer;
