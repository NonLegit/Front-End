import { styled } from '@mui/material/styles';
import RedditButton from '../RedditButton/RedditButton';

// eslint-disable-next-line import/prefer-default-export
export const BackHome = styled(RedditButton)({
  transform: 'translateY(-100%)',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'sticky',
  top: 'calc(100vh - 8px)',
  marginLeft: 100,
  marginTop: 47,
});
export default BackHome;
