import { styled } from '@mui/system';
import {
  Typography, Box, Divider, TextareaAutosize,
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

export const PostUrl = styled(TextareaAutosize)(({ theme }) => ({
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
