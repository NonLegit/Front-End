import { styled } from '@mui/system';
import {
  Typography, Box, Divider, Tab, Tabs, TextareaAutosize,
} from '@mui/material';
import RedditButton from '../../RedditButton/RedditButton';

export const FormContainer = styled('div')(() => ({
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
}));

export const Title = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: 18,
}));

export const TitleContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

export const DraftsButton = styled(RedditButton)(({ theme }) => ({
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
}));

export const Badge = styled('div')(() => ({
  color: '#fff',
  backgroundColor: '#878a8c',
  padding: '1px 4px',
  borderRadius: 2,
  marginLeft: 5,
  fontSize: 10,
}));

export const CustomDivider = styled(Divider)(() => ({
  borderColor: '#ffffff8a',
}));

export const PostFormContainer = styled('div')(() => ({
  backgroundColor: '#fff',
  borderRadius: 5,
  marginTop: 20,
  display: 'flex',
  flexDirection: 'column',
}));

export const FieldsContainer = styled('form')(() => ({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
}));

export const PostTitle = styled('input')(({ theme }) => ({
  marginBottom: 16,
  padding: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme.palette.primary.main,
  fontWeight: 400,
}));

export const PostText = styled(TextareaAutosize)(({ theme }) => ({
  marginBottom: 16,
  padding: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme.palette.primary.main,
  fontWeight: 400,
  fontFamily: 'inherit',
  minHeight: 182,
}));

export const OptionButton = styled(RedditButton)(() => ({
}));

export const OCHelperText = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: 400,
  marginBottom: 16,
}));

export const CustomTabs = styled(Tabs)(() => ({
  minHeight: 0,
  '& .MuiTabs-indicator': {
    height: 2,
    transition: 'all 0s ease 0s',
    webkitTransition: 'all 0s ease 0s',
    bottom: 1,
  },
}));
export const CustomTab = styled(Tab)(() => ({
  textTransform: 'capitalize',
  width: 'calc(100%/3.01)',
  padding: '15px 0',
  minHeight: 0,
  fontWeight: 'bolder',
  '&.Mui-selected': {
    backgroundColor: '#0079d30d',
  },
}));

export const PostMediaContainer = styled(Box)(({ theme }) => ({
  marginBottom: 16,
  padding: 10,
  border: '1px dashed #edeff1',
  borderRadius: 4,
  fontSize: 14,
  color: theme.palette.primary.main,
  fontFamily: 'inherit',
  minHeight: 280,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
}));
export const PostUrl = styled(TextareaAutosize)(({ theme }) => ({
  marginBottom: 16,
  padding: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme.palette.primary.main,
  fontWeight: 400,
  fontFamily: 'inherit',
  resize: 'none',
  minHeight: 66,
}));
export const UploadButton = styled(RedditButton)(() => ({
  padding: '3px 16px',
  fontSize: 14,
  fontWeight: 'bold',
}));
