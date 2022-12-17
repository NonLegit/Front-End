import { Box, styled } from '@mui/system';

export const ProfilePic = styled('img')(() => ({
  outline: '4px solid white',
  borderRadius: '3px 3px 0px 0px ',
  marginTop: 20,
  objectFit: 'cover',
}));
export const AddPhoto = styled(Box)(() => ({
  backgroundColor: 'white',
  borderRadius: '50%',
  width: 36,
  height: 36,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  zIndex: '50',

  cursor: 'pointer',

}));
export const InputPhoto = styled('input')(() => ({
  display: 'none',

}));
