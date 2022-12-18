import {
  Box, Button, Divider, IconButton, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const CommentsBoxContent = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  paddingLeft: 20,
  padding: '8px 8px 8px 16px',
  verticalAlign: 'baseline',

  '&:hover': {
    outline: '1px solid #898989',

  },
}));

export const CommentsBoxBlue = styled(Box)(({ theme, overview }) => ({
  cursor: 'pointer',
  width: '100%',
  [theme.breakpoints.between('0', '1000')]: {
    width: '100%',
  },
  ...((overview === 'true') && {
    width: 595,
    minHeight: 77,
    backgroundColor: '#0079d30d',
    padding: '4px 10px',
  }),
}));

export const CommentsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey.A400,
  fontSize: 12,
  fontWeight: 700,
  padding: 0,
}));

export const DashedLine = styled(Box)(() => ({
  borderLeft: '2px dashed #edeff1',
  flex: '0 0 1px',
  width: 3,
  height: 'inherit',
  marginRight: 16,
  verticalAlign: 'baseline',
}));

export const MoreList = styled(IconButton)(({ responsive3icons, theme }) => ({
  borderRadius: 5,
  height: 25,
  '&:hover': {
    backgroundColor: '#eee',
  },
  ...((responsive3icons) && {
    [theme.breakpoints.between('0', '540')]: {
      display: 'none',
    },
  }),
}));

export const SelectBox = styled(Box)(({ theme }) => ({
  width: 260,
  marginTop: 120,
  marginRight: 60,
  border: ' 1px solid #eee',
  borderRadius: 4,
  boxShadow: '0 2px 4px 0 #eee',
  backgroundColor: 'white',
  position: 'absolute',
  zIndex: 10,
  [theme.breakpoints.between('0', '860')]: {
    marginLeft: -230,
  },
  [theme.breakpoints.between('0', '420')]: {
    width: 200,
    marginLeft: -180,
  },

}));

export const SelectItem = styled(Button)(({ theme, condition }) => ({
  padding: 5,
  color: '#878a8c',
  fontSize: 14,
  fontWeight: 700,
  width: '100%',
  justifyContent: 'left',
  textTransform: 'none',
  ...((condition === 'true') && {
    color: theme.palette.primary.main,
  }),
}));

export const FooterText = styled(Typography)(() => ({
  marginLeft: 5,
  display: 'flex',
  alignItems: 'center',
  fontWeight: 700,
}));

export const ModList = styled(Box)(({ responsive3icons, theme }) => ({

  display: 'none',
  ...((responsive3icons) && {
    [theme.breakpoints.between('0', '540')]: {
      display: 'block',
    },
  }),
}));

export const ResDivider = styled(Divider)(({ responsive3icons, theme }) => ({
  ...((responsive3icons) && {
    [theme.breakpoints.between('0', '540')]: {
      display: 'none',
    },
  }),
}));
