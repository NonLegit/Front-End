import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TopContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  width: 646,
  borderRadius: 4,
  border: '1px solid #ccc',
  height: 'fit-content',
  flex: '1 1 100%',
  [theme.breakpoints.between('0', '1250')]: {
    width: '100%',
    minWidth: 0,
  },

}));

export const HeaderText = styled(Box)(() => ({
  minHeight: 41,
  backgroundColor: '#f6f7f8',
  borderBottom: 'thin solid #edeff1',
  padding: 20,
  display: 'flex',
  borderRadius: '4px 4px 0px 0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: 700,
}));
