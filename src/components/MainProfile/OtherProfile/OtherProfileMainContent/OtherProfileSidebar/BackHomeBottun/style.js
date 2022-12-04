import { styled } from '@mui/material/styles';
import RedditButton from '../RedditButton/RedditButton';

// eslint-disable-next-line import/prefer-default-export
export const BackHome = styled(RedditButton)({
  top: 'calc(100vh - 8px)',
  transform: 'translateY(-100%)',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'fixed',
  marginLeft: '9%',
  marginTop: 47,
});
export default BackHome;
