import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CategoriesBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  minWidth: 192,
  marginRight: 24,
  borderRadius: 4,
  border: '1px solid #ccc',
  height: 'fit-content',
  [theme.breakpoints.between('0', '670')]: {
    display: 'none',
  },
}));

export const HeaderText = styled(Box)(() => ({
  minHeight: 41,
  backgroundColor: '#f6f7f8',
  borderBottom: 'thin solid #edeff1',
  paddingLeft: 24,
  display: 'flex',
  borderRadius: '4px 4px 0px 0px',
  alignItems: 'center',
  fontWeight: 700,
}));

export const Entity = styled(Box)(({ condition, condition2, theme }) => ({
  height: 36,
  paddingLeft: 24,
  fontSize: 13,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f6f7f8',
  },
  ...((condition === 'true') && {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    backgroundColor: '#f6f7f8',
    fontWeight: 700,
    paddingLeft: 22,
  }),
  ...((condition2 === 'true') && {
    borderRadius: ' 0px 0px 4px 4px',
  }),
}));
