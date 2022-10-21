import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  border: '1px solid #eeeeee',
  borderRadius: 3,
  '&:hover':
  {
    borderColor: '#999',
  },
}));

export const Voting = styled(Box)(() => ({
  width: 40,
  padding: '0 4px',
  backgroundColor: '#F8F9FA',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '3px 0 0 3px',
  alignItems: 'center',
}));

export const Votes = styled(Box)(() => ({
  fontSize: '12px',
  fontWeight: 'bold',
}));
