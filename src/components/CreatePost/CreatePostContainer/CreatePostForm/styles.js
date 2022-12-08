import { styled } from '@mui/system';
import {
  Typography, Box, Divider, TextareaAutosize,
} from '@mui/material';
import RedditButton from '../../../RedditButton/RedditButton';

export const FormContainer = styled('form')(() => ({
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
  color: theme?.palette?.primary?.main,
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
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
}));

export const FieldsContainer = styled('div')(() => ({
  margin: 16,
  display: 'flex',
  flexDirection: 'column',
}));

export const PostTitle = styled(TextareaAutosize)(({ theme }) => ({
  padding: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme?.palette?.primary?.main,
  paddingRight: 55,
  resize: 'none',
  fontWeight: 400,
  fontFamily: 'inherit',
}));

export const WordCounter = styled(Box)(({ theme }) => ({
  color: theme.palette.third.main,
  fontSize: 11,
  fontWeight: 500,
  position: 'absolute',
  right: 10,
  bottom: 8,
}));

export const PostUrl = styled(TextareaAutosize)(({ theme }) => ({
  padding: 10,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme?.palette?.primary?.main,
  fontWeight: 400,
  fontFamily: 'inherit',
  resize: 'none',
  minHeight: 66,
}));
