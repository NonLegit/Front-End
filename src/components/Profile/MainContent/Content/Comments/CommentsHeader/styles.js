import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const CommentsBoxHeader = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 38,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.grey[500],
  padding: '8px 8px',
  '&:hover': {
    border: '1px solid #898989',
  },
}));

export default CommentsBoxHeader;
