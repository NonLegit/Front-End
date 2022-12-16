import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const Voting = styled(Box)(({ flexDirection, viewpost }) => ({
  padding: (flexDirection === 'column' ? '8px 4px' : 0),
  backgroundColor: !viewpost ? (flexDirection === 'column' ? '#F8F9FA' : '#fff') : '#fff',
  display: 'flex',
  borderRadius: '3px 0 0 3px',
  alignItems: 'center',
}));

export const Votes = styled(Box)(() => ({
  fontSize: '12px',
  fontWeight: 'bolder',
  cursor: 'pointer',
}));

export const ReactionIconButton = styled(IconButton)(() => ({
  borderRadius: 4,
  padding: '2px 3px',
}));
