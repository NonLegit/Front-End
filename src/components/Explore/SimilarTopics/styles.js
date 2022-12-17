import { Box, styled, Link } from '@mui/material';

export const SimilarTopicsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  marginLeft: '20px',
  minWidth: '312px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledLink = styled(Link)(() => ({
  fontSize: '12px',
  fontWeight: '600px',
  fontFamily: 'Sans-serif',
  color: 'black',
  paddingLeft: '16px',
}));

export const StyledTopic = styled(Box)(() => ({
  display: 'flex',
  marginTop: '16px',
}));

export const StyledTopics = styled(Box)(() => ({
  padding: '12px',
}));
