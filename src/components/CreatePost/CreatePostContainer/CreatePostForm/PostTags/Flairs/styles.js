import {
  Dialog, DialogActions, FormControlLabel, IconButton, Radio,
} from '@mui/material';
import { styled } from '@mui/system';
import RedditButton from '../../../../../RedditButton/RedditButton';

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent',
  },
  '& .MuiDialog-paper': {
    height: 558,
    width: 360,
    marginTop: 110,
    [theme.breakpoints.down('sm')]: {
      width: 200,
      margin: '5px 10px',
    },
  },
  '& .MuiDialogTitle-root': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  '& .MuiDialogContent-root': {
    padding: 0,
    height: '10px',
  },
}));

export const Title = styled('div')(() => ({
  fontSize: 16,
  fontWeight: 500,
}));

export const CloseButton = styled(IconButton)(() => ({
  padding: 0,
}));

export const SelectedFlair = styled('div')(() => ({
  fontWeight: 400,
  fontSize: 12,
  padding: '22px 16px',
}));

export const FlairsContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: 374,
  overflowY: 'auto',
  padding: '0 2px',
  backgroundColor: '#f6f7f8',
}));

export const Flair = styled('div')(({ color, backgroundColor }) => ({
  color,
  backgroundColor,
  padding: '0 4px',
  width: 'fit-content',
  borderRadius: 2,
  fontSize: 12,
  margin: '5px 0px',
}));

export const FlairRadio = styled(Radio)(() => ({
  marginRight: 6,
  padding: 0,
  paddingLeft: 10,
}));

export const FlairFormControlLabel = styled(FormControlLabel)(({ selected }) => ({
  '&:hover': {
    backgroundColor: '#24a0ed',
  },
  margin: 0,
  backgroundColor: selected ? '#24a0ed' : 'inherit',
}));

export const ApplyFlairButton = styled(RedditButton)(() => ({
  padding: '3px 20px',
  fontSize: 14,
  fontWeight: 'bold',
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    pointerEvents: 'auto',
    backgroundColor: '#8D8D8D',
    color: '#ffffff80',
  },
}));

export const FlairDialogActions = styled(DialogActions)(() => ({
  padding: 16,
}));
