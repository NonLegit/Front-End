import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Disc = styled(Box)(() => ({
  fontSize: 12,
  fontWeight: 400,
  color: '#7c7c7c',
  paddingLeft: 17,

}));
export const FlexBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,
});

export const FlexBoxColumn = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});
export const AboutString = styled('div')({
  fontSize: 18,
  fontWeight: 500,
  color: 'black',
  marginTop: 10,
  paddingLeft: 17,

});
