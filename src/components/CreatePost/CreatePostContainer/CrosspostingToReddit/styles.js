import {
  Box, Divider, ListItem, Typography,
} from '@mui/material';
import { styled } from '@mui/system';

export const CrosspostingToRedditContainer = styled(Box)(() => ({
  marginTop: 60,
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fff',
  borderRadius: 5,
  border: '1px solid #ccc',
}));

export const UpperContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: 4,
}));

export const PostToReddit = styled(Typography)(() => ({
  fontSize: 15,
  fontWeight: 500,
  marginLeft: 10,
  lineHeight: '20px',
}));

export const CustomDivider = styled(Divider)(() => ({
  borderColor: '#eeeeee',
}));

export const CustomListItem = styled(ListItem)(() => ({
  padding: '10px 5px',
  '& .MuiTypography-root': {
    fontSize: 14,
    fontWeight: 500,
  },
  '& .MuiListItemText-root': {
    margin: 0,
  },
  lineHeight: '14px',
}));

export const CustomLink = styled('a')(({ theme }) => ({
  color: theme?.palette?.primary?.main,
  textDecoration: 'none',
}));
