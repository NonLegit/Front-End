import { Box, styled } from '@mui/material';

export const Row = styled(Box)(() => ({
  padding: '0 4px 0 17px',
  // height: 54.4,
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 14,
  fontWeight: 400,
  borderBottom: '1px solid #edeff1',
  width: '100%',
  justifyContent: 'space-between',
}));
export const Num = styled(Box)(() => ({
  fontWeight: 400,
  fontSize: 16,
  alignItems: 'center',
  display: 'flex',
  flex: '0 0 48px',
  height: '100%',
  justifyContent: 'center',
  width: 48,
}));
export const Text = styled(Box)(() => ({
  fontSize: 14,
  margin: '16px 8px',
  wordBreak: 'break-word',
  fontWeight: 400,

}));
export const ElementBox = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  marginRight: 1,
  alignItems: 'center',
  borderRadius: 4,
  padding: '5px 6px',
  color: theme.palette.grey[500],
  '&:hover': {
    backgroundColor: '#1a1a1b1a',
  },
}));

export const MoreData = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#edeff1',
  border: '1px solid #d6d6d6',
  padding: '4px 20px 8px',
  wordBreak: 'break-word',
  justifyContent: 'space-between',
});

export const Details = styled('span')({
  display: 'block',
  padding: '8px 0',
});
export const MoreDetailsHeader = styled('span')({
  fontSize: 12,
  fontWeight: 500,
  display: 'block',
  textTransform: 'uppercase',
});
export const MoreDetails = styled('span')({
  fontFamily: 'Noto Sans,Arial,sans-serif',
  fontSize: 12,
  fontWeight: 400,
});
export const Actions = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
