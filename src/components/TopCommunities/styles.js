import {
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommunitiesBox = styled(Box)(() => ({
  display: 'flex',
  margin: '0px auto',
  width: 'fit-content',
  padding: '20px 24px',
}));

export const TopCommunitiesHeader = styled(Box)(() => ({
  width: '100%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px 200px',
  height: 96,
}));
