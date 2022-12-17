import {
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommunitiesBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: '0px auto',
  width: 'fit-content',
  padding: '20px 24px',
  [theme.breakpoints.between('501', '1250')]: {
    width: '100%',
    margin: '0px 0px',
    minWidth: 0,
  },
  [theme.breakpoints.between('0', '500')]: {
    padding: 0,
    width: '100%',
    margin: '0px 0px',
  },
}));

export const TopCommunitiesHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px 200px',
  minHeight: 96,
  [theme.breakpoints.between('0', '1300')]: {
    padding: '0px 50px',
  },
}));
