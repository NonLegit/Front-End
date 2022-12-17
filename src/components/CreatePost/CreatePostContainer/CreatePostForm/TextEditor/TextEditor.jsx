/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import TitleIcon from '@mui/icons-material/Title';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { GoItalic, GoCode } from 'react-icons/go';

import { FiLink } from 'react-icons/fi';
import { ImStrikethrough, ImSuperscript2 } from 'react-icons/im';
import { MdFormatListBulleted } from 'react-icons/md';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { SlSocialYoutube } from 'react-icons/sl';
import { CiImageOn } from 'react-icons/ci';
import { TfiQuoteRight } from 'react-icons/tfi';

import { TextEditorWrapper } from './styles';

const BlockEmbed = Quill.import('blots/embed');

class ImageBlot extends BlockEmbed {
  static create(value) {
    const imgTag = super.create();
    imgTag.setAttribute('src', value.src);
    imgTag.setAttribute('alt', value.alt);
    imgTag.setAttribute('width', '100%');
    return imgTag;
  }

  static value(node) {
    return { src: node.getAttribute('src'), alt: node.getAttribute('alt') };
  }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';
Quill.register(ImageBlot);

class Video extends BlockEmbed {
  static create(value) {
    const videoTag = super.create();
    videoTag.setAttribute('src', value.src);
    videoTag.setAttribute('title', value.title);
    videoTag.setAttribute('width', '100%');
    videoTag.setAttribute('controls', '');

    return videoTag;
  }

  static value(node) {
    return node.getAttribute('src');
  }
}

Video.blotName = 'video';
Video.tagName = 'video';
Video.className = 'adham';
Quill.register(Video);

function TextEditor(props) {
  const {
    postText, handlePostTextChange,
    commentPlaceholder,
  } = props;
  console.log('props from editor', props);
  console.log(
    handlePostTextChange,
    postText,
  );
  console.log('agdjhdgjgfghfgjhs');

  const editorRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const icons = Quill.import('ui/icons');
  icons.link = null;
  icons.bold = null;
  icons.italic = null;
  icons.header = null;
  icons.strike = null;
  icons['code-block'] = null;
  icons.script.super = null;
  icons.list.bullet = null;
  icons.list.ordered = null;
  icons.video = null;
  icons.image = null;
  icons.blockquote = null;
  console.log('icons', icons);

  const insertVideo = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target.files);
    const file = e.target.files[0];
    const quill = editorRef.current.getEditor();
    quill.focus();
    const range = quill.getSelection();
    const position = range ? range.index : 0;
    quill.insertEmbed(position, 'video', { src: URL.createObjectURL(file) });
    console.log(URL.createObjectURL(file));
    quill.setSelection(position + 1);
  };

  const insertImage = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target.files);
    const file = e.target.files[0];
    const quill = editorRef.current.getEditor();
    quill.focus();
    const range = quill.getSelection();
    const position = range ? range.index : 0;
    quill.insertEmbed(position, 'image', { src: URL.createObjectURL(file) });
    console.log(URL.createObjectURL(file));
    quill.setSelection(position + 1);
  };

  const modules = useMemo(() => ({
    syntax: true,
    toolbar: {
      container: '#toolbar',
      handlers: {
        video: () => {
          videoRef?.current?.click();
        },
        image: () => {
          imageRef?.current?.click();
        },
      },
    },

  }), []);
  return (
    <TextEditorWrapper>
      <div id="toolbar">
        <button className="ql-bold">
          <FormatBoldIcon sx={{
            width: 30,
            height: 30,
          }}
          />
        </button>
        <button className="ql-italic">
          <GoItalic style={{
            width: 20,
            height: 20,
          }}
          />
        </button>
        <button className="ql-link">
          <FiLink style={{
            width: 20,
            height: 20,
            fontWeight: 'bold',
          }}
          />
        </button>
        <button className="ql-strike">
          <ImStrikethrough style={{
            width: 20,
            height: 20,
          }}
          />
        </button>
        <button className="ql-code-block">
          <GoCode style={{
            width: 20,
            height: 20,
          }}
          />
        </button>
        <button className="ql-script" value="super">
          <ImSuperscript2 style={{
            width: 20,
            height: 20,
          }}
          />
        </button>
        <button className="ql-header" value={1}>
          <TitleIcon />
        </button>
        <button className="ql-list" value="bullet">
          <MdFormatListBulleted style={{
            width: 25,
            height: 25,
          }}
          />
        </button>
        <button className="ql-list" value="ordered">
          <AiOutlineOrderedList style={{
            width: 25,
            height: 25,
          }}
          />
        </button>
        <button className="ql-blockquote">
          <TfiQuoteRight style={{
            width: 20,
            height: 20,
          }}
          />
        </button>
        <button className="ql-image">
          <CiImageOn style={{
            width: 30,
            height: 30,
            fontWeight: 'bolder',
          }}
          />
        </button>
        <button className="ql-video">
          <SlSocialYoutube style={{
            width: 20,
            height: 20,
            fontWeight: 'bolder',
          }}
          />
        </button>
      </div>
      <ReactQuill
        ref={editorRef}
        value={postText}
        onChange={handlePostTextChange}
        modules={modules}
        formats={[
          'header',
          'bold', 'italic', 'strike', 'script',
          'image', 'video', 'file', 'link', 'code-block', 'blockquote', 'clean', 'video', 'list', 'bullet', 'super',
        ]}
        placeholder={commentPlaceholder ? 'What are your thought?' : 'Text(optional)'}
      />
      <input type="file" accept="video/*" ref={videoRef} style={{ display: 'none' }} onChange={insertVideo} />
      <input type="file" accept="image/*" ref={imageRef} style={{ display: 'none' }} onChange={insertImage} />
    </TextEditorWrapper>
  );
}

export default TextEditor;
