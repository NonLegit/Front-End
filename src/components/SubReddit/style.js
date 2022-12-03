import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Cover = styled('div')({
  height: 80,
  width: '100%',
  margin: '0 auto',
  padding: '8px 16px',
  backgroundColor: '#0079d3',
});
export const Logo = styled('div')({
  height: 100,
  width: '100%',
  backgroundColor: 'white',
});

export const IconContainer = styled('div')({
  maxWidth: 984,
  padding: ' 0 16px 0 24px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const Data = styled('div')(({ theme }) => ({
  height: 80,
  width: 386,
  marginBottom: 12,
  marginTop: -14,
  display: 'flex',
  alignitems: 'flex-start',
  [theme.breakpoints.between('0', '435')]: {
    width: 'fit-content',
  },
}));

export const Image = styled('img')({
  backgroundColor: '#fff',
  backgroundSize: 'cover',
  borderRadius: '100%',
  border: '4px solid #fff',
  display: 'inline-block',
  height: 72,
  width: 72,
});
export const Content = styled('div')(({ theme }) => ({
  boxSizing: 'border-box',
  alignItems: 'flex-start',
  display: 'inline-flex',
  flex: 1,
  paddingLeft: 16,
  marginTop: 24,
  justifyContent: 'space-between',
  position: 'relative',
  // width: 'calc(100% - 80px)',
  [theme.breakpoints.between('0', '435')]: {
    justifyContent: 'flex-start',
  },
}));
export const Desc = styled('div')({
  display: 'inline-block',
  maxWidth: 'calc(100% - 96px)',
  paddingRight: 24,
  boxSizing: 'border-box',
});

export const Namee = styled('h1')({
  color: '#1c1c1c',
  display: 'inline-block',
  flex: 1,
  fontSize: 28,
  fontWeight: 700,
  overflow: 'hidden',
  padding: '0 2px 4px 0',
  textOverflow: 'ellipsis',
  width: '100%',
  margin: 0,
  marginBlockStart: 0,
  marginBlockEnd: 0,
});

export const Com = styled('h2')({
  fontSize: 14,
  fontWeight: 500,
  color: '#7c7c7c',
  margin: 0,
  lineHeight: 0,

});

export const Join = styled('button')({
  position: 'relative',
  border: '1px solid #0079d3',
  color: '#0079d3',
  fill: '#0079d3',
  width: 96,
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 'unset',
  textTransform: 'unset',
  minHeight: 32,
  minWidth: 32,
  padding: '4px 16px',
  background: 'transparent',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: 9999,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
});
export const JoinCommunity = styled('button')({
  position: 'relative',
  border: '1px solid #0079d3',
  color: 'white',
  fill: '#0079d3',
  backgroundColor: '#0079d3',
  width: 96,
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: 'unset',
  textTransform: 'unset',
  minHeight: 32,
  minWidth: 32,
  padding: '4px 16px',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: 9999,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
});
export const Notification = styled('button')({
  fontSize: 14,
  fontWeight: 500,
  color: '#7c7c7c',
  marginLeft: 8,
  borderRadius: '100%',
  border: '1px solid #0079d3',
  height: 32,
  padding: 5,
  position: 'relative',
  background: 'transparent',
});

export const PostHeader = styled('div')({
  padding: '0 16px',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '0 auto',
  borderBottom: '3px solid #0079d3',
  color: '#1c1c1c',
  marginLeft: 0,
  paddingBottom: 1,
  fontWeight: 500,
  paddingLeft: 8,
  paddingRight: 8,
  fontSize: 14,
});
export const MainConatiner = styled(Box)({
  backgroundColor: '#dae0e6',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  margin: '0 auto',
});
export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: 3,
  border: '1px solid #ccc',
  alignItems: 'center',
  '&:hover':
  {
    borderColor: '#999',
  },
  margin: 0,
}));
export const TotalHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  background: '#dae0e6',
  margin: '0 auto',
  padding: '20px 24px',
  [theme.breakpoints.between('0', '435')]: {
    padding: '0px',
  },
}));
