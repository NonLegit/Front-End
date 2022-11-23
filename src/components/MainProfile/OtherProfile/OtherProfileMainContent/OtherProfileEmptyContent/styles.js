import {
  Box, styled, Typography,
} from '@mui/material';
import ForwardOutlinedIcon from '@mui/icons-material/ForwardOutlined';

export const EmptyContentBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: '#e6eaee',
  border: 'thin solid #ccc',
  paddingLeft: 10,
  height: 90,
  '&:hover': {
    border: 'thin solid #898989',
  },
}));
export const SpecialBox = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: '#e6eaee',
  border: 'thin solid #ccc',
  paddingLeft: 10,
  height: 90,
  '&:hover': {
    border: 'thin solid #898989',
  },
}));

export const UpArrow = styled(ForwardOutlinedIcon)(() => ({
  width: 30,
  height: 30,
  transform: 'rotate(-90deg)',
}));

export const DownArrow = styled(ForwardOutlinedIcon)(() => ({
  width: 30,
  height: 30,
  transform: 'rotate(90deg)',
}));

export const ArrowBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}));

export const EmptyText = styled(Typography)(() => ({
  alignSelf: 'flex-end',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontWeight: 700,

}));
