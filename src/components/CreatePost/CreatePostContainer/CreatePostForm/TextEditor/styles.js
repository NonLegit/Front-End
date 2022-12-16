import { styled } from '@mui/system';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export const CustomTextEditor = styled(Editor)(() => ({
}));

export const ToolbarStyleObject = {
  backgroundColor: '#f6f7f8',
};

export const TextEditorWrapper = {
  borderRadius: 4,
  border: '1px solid #edeff1',
  '&:focus-visible': {
    outline: '1px solid #1a1a1b',
  },
};

export const TextEditorField = (theme) => ({
  resize: 'vertical',
  overflowY: 'auto',
  padding: '0 10px',
  borderRadius: 4,
  fontSize: 14,
  caretColor: theme?.palette?.primary?.main,
  fontWeight: 400,
  fontFamily: 'inherit',
  minHeight: 150,
});
