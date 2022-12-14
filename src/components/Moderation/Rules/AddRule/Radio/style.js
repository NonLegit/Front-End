import {
  Box, DialogTitle, styled,
} from '@mui/material';

export const Lable = styled('div')({
  marginTop: 11,
  paddingBottom: 8,
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
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
  fontSize: 14,
  color: '#1c1c1c',
  display: 'block',
  fontWeight: 400,
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
