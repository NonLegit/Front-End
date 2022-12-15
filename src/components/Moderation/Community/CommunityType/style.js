import {
  Box, DialogContent, DialogTitle, styled,
} from '@mui/material';

export const SecConatiner = styled(DialogContent)({
  marginBottom: 8,
  display: 'flex',
  flexFlow: 'row wrap',
  marginRight: 8,
  maxWidth: '100%',
  flexDirection: 'column',
  paddingLeft: 0,

});
export const ContUp = styled(Box)(({ condition, condition2, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.between('0', '600')]: {
    alignItems: ' flex-start',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 17,
    ...((condition === 'true') && {
      marginTop: 22,
    }),
    ...((condition2 === 'true') && {
      marginTop: 0,
    }),
  },
}));
export const Cont = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});
export const Name = styled('h3')({
  fontSize: 16,
  color: '#1c1c1c',
  display: 'block',
  marginBottom: 4,
  height: 20,
  marginTop: 0,
});

export const Disc = styled('p')({
  fontWeight: 400,
  color: '#7c7c7c',
  fontSize: 12,
  height: 16,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

export const SelectHeader = styled(DialogTitle)({
  fontWeight: 500,
  fontSize: 16,
  borderBottom: 'none',
  color: '#1c1c1c',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 16,
  padding: '0 0 16px',
});
