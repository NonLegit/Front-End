import { Box, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import RedditButton from '../../../../RedditButton/RedditButton';

export const PostButton = styled(RedditButton)(() => ({
  padding: '3px 16px',
  fontSize: 14,
  fontWeight: 'bold',
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
    backgroundColor: '#8D8D8D',
    color: '#ffffff80',
  },
}));

export const SendReplyContainer = styled(Box)(() => ({
  backgroundColor: '#f6f7f8',
}));

export const SendReplayFormLabel = styled(FormControlLabel)(() => ({
  margin: '5px 0 10px',
  '& .MuiFormControlLabel-label': {
    fontSize: 14,
    lineHeight: '18px',
    color: '#000',
    fontWeight: 500,

  },
  '& .MuiCheckbox-root': {
    padding: 0,
    marginRight: 5,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
}));

export const ConnectAccounts = styled(Link)(({ theme }) => ({
  fontSize: 14,
  lineHeight: '18px',
  fontWeight: 500,
  color: theme.palette.primary.main,
  paddingLeft: 1,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const InfoIcon = styled(AiOutlineInfoCircle)(({ theme }) => ({
  width: 21,
  height: 22,
  transform: 'translateY(-15%)',
  color: theme.palette.third.main,
  marginLeft: 5,
}));
