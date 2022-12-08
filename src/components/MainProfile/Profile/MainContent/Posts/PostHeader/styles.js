import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const RemovalBox = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.light,
  marginLeft: 8,
  display: 'flex',

}));

export const ApprovedBox = styled(Box)(({ theme }) => ({
  color: theme.palette.success.light,
  marginLeft: 8,
  display: 'flex',

}));

export const HeaderPost = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  minHeight: 24,
  flexWrap: 'wrap',
}));

export const LinkTo = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#787c7e',
  display: 'flex',
  alignItems: 'center',
}));
