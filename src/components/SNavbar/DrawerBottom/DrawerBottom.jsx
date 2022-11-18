import { Typography } from '@mui/material';
import StyledBottom from './styles';
import RedditButton from '../RedditButton/RedditButton';

/**
 * DrawerBottom
 * @component
 * @param {logInPopup} param0 opening the register popup window
 * @returns {React.Component} the bottom of the left permanent sidebar
 */
function DrawerBottom({ logInPopup }) {
  return (
    <StyledBottom>
      <Typography>_____________________________</Typography>
      <Typography>
        Create an account to follow your favorite communities
        and start taking part in conversations.
      </Typography>
      <RedditButton
        data-testid="drawer-login"
        fontSize="14px"
        padding="4px 16px"
        fontWeight="700"
        variant="contained"
        margin="0px"
        onClick={logInPopup}
        sx={{ width: '225px', height: '40px' }}
      >
        Join Reddit
      </RedditButton>
    </StyledBottom>
  );
}

export default DrawerBottom;
