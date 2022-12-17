import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TopContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  width: 646,
  marginRight: 24,
  borderRadius: 4,
  border: '1px solid #ccc',
  height: 'fit-content',
  [theme.breakpoints.between('0', '1250')]: {
    maxWidth: 646,
  },
}));

export const HeaderText = styled(Box)(() => ({
  height: 41,
  backgroundColor: '#f6f7f8',
  borderBottom: 'thin solid #edeff1',
  padding: 20,
  display: 'flex',
  borderRadius: '4px 4px 0px 0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 700,
}));
