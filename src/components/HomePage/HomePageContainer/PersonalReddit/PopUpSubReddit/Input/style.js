import { styled } from '@mui/material';

export const Disc = styled('p')({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  // height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
});
export const Count = styled('p')(({ condition }) => ({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  // height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  ...((condition === 'true') && {
    color: 'red',
  }),
}));
