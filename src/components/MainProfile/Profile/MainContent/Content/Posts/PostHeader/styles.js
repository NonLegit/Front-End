import { Avatar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import RedditButton from '../../../../../../RedditButton/RedditButton';

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
  marginTop: 8,
  minHeight: 24,
  marginBottom: 8,
  flexWrap: 'wrap',
  alignItems: 'center',
}));

export const HeaderAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: 20,
  height: 20,
}));

export const HeaderAvatarText = styled('p')(() => ({
  fontSize: 15,
}));

export const LinkTo = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#787c7e',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '8px',
}));

export const Flair = styled(RedditButton)(({ backgroundColor, flairColor }) => ({
  fontSize: 10,
  padding: '2px 10px',
  fontWeight: 'normal',
  backgroundColor,
  color: flairColor,
  '&:hover': {
    backgroundColor,
  },
}));
