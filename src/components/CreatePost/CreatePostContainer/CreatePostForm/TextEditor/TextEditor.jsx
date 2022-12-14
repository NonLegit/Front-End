import { useTheme } from '@mui/system';
import {
  CustomTextEditor, TextEditorField, TextEditorWrapper, ToolbarStyleObject,
} from './styles';

function TextEditor(props) {
  const { handlePostTextChange, postText } = props;
  // theme
  const theme = useTheme();
  return (
    <CustomTextEditor
      editorState={postText}
      toolbarStyle={ToolbarStyleObject}
      placeholder="Text(optional)"
      onEditorStateChange={handlePostTextChange}
      styles={{
        '& .rdw-option-wrapper': {
          backgroundColor: '#f6f7f8',
          width: '200px',
        },
      }}
      toolbar={{
        options: ['inline', 'blockType', 'list', 'image'],
        inline: {
          inDropdown: false,
          className: undefined,
          component: undefined,
          dropdownClassName: undefined,
          options: ['bold', 'italic', 'strikethrough', 'superscript', 'monospace'],
        },
        blockType: {
          inDropdown: false,
          options: ['H1'],
          className: undefined,
          component: undefined,
          dropdownClassName: undefined,
        },
        list: {
          inDropdown: false,
          className: undefined,
          component: undefined,
          dropdownClassName: undefined,
          options: ['unordered', 'ordered'],
        },
      }}
      wrapperStyle={TextEditorWrapper}
      editorStyle={TextEditorField(theme)}
    />
  );
}

export default TextEditor;
