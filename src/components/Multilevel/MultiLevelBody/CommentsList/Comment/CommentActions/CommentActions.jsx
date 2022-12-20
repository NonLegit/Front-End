/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

// MUI Compoents
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import { Box } from '@mui/system';

// Components
import CommentReactions from './CommentReactions/CommentReactions';
import DropDownList from '../../../../../DropDownList/DropDownList';
import TextEditor from '../../../../../CreatePost/CreatePostContainer/CreatePostForm/TextEditor/TextEditor';
import RedditButton from '../../../../../RedditButton/RedditButton';

// Context
import { usePostContext } from '../../../../../../contexts/PostContext';

// styles
import { CommentActionsContainer } from './styles';
import { ElementBox, FooterText } from '../../../../../MainProfile/Posts/PostFooter/styles';
import { SaveButton } from '../../../MultiLevelPostContent/styles';

// Server
import { saveCommenttoDB } from './commentActionsServer';
import { saveComment } from '../../commentsListServer';

function CommentActions(props) {
  // cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  // Context
  const {
    post, setPost, comments, setComments,
  } = usePostContext();

  // props
  const {
    comment, setComment, replies, setReplies, setEditComment,
  } = props;

  // States
  const [reply, setReply] = useState('');
  const [replyEditor, setReplyEditor] = useState(false);
  const [saved, setSaved] = useState(comment?.isSaved);

  useEffect(() => {
    // setSaved(comment?.isSaved);
    setSaved(false);
  }, [comment]);

  const dropDownListOptions = [{ value: !saved ? 'Save' : 'unSave', icon: !saved ? 'Save' : 'unSave' }];
  const dropDownListOptionsAuthor = [{ value: 'Edit', icon: 'Edit' }, { value: !saved ? 'Save' : 'unSave', icon: !saved ? 'Save' : 'unSave' }, { value: 'Delete', icon: 'Delete' }];
  // const dropDownListOptionsMod = [{ value: 'Approve', icon: 'Approve' }, { value: 'Remove', icon: 'Remove' }, { value: 'Remove as spam', icon: 'Remove as spam' }, { value: 'Lock comment', icon: 'Lock comment' }];

  const replyOnComment = () => {
    // call Reply endPoint
    console.log('Reply on Comment with Text', comment?.text);
    if (saveComment(comment?._id, 'Comment', reply, post, setPost, replies, setReplies)) {
      setReply('');
      setReplyEditor(false);
    }
  };

  const handleCommentReplyChange = (text) => {
    setReply(text);
  };

  const shareComment = () => {
    // call Share endPoint
    console.log('Share Comment with Text', comment?.text);
    // navigator.clipboard.writeText(this.state.textToCopy);
    const navigationLink = `${window.location.origin}/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?._id}/comments/${post?._id}/${comment?._id}`;
    navigator.clipboard.writeText(navigationLink);
  };
  const handleSelectEdit = (option) => {
    // Call Back API
    console.log('Option Selected', option);
    if (option === 'Edit') {
      console.log('Edit Comment with Text', comment?.text);
      setEditComment(true);
    } else if (option === 'Save') {
      // call Save endPoint
      console.log('Save Comment with Text', comment?.text);
      saveCommenttoDB(comment?._id, comment, setComment, saved, setSaved);
    } else if (option === 'Delete') {
      // call Delete endPoint
      console.log('Delete Comment with Text', comment?.text);
    }
  };

  const handleSelectMod = (option) => {
    console.log(option);
    // Call Back API
  };

  return (
    <div>
      <CommentActionsContainer>
        {comment && (
          <CommentReactions
            votes={comment?.votes}
            commentVoteStatus={comment?.votes}
            commentId={comment?._id}
          />
        )}
        <ElementBox onClick={() => setReplyEditor(true)}>
          <ChatBubbleOutlineOutlinedIcon />
          <FooterText variant="caption" responsiveshare={true.toString()}>
            Reply
          </FooterText>
        </ElementBox>

        <ElementBox onClick={shareComment}>
          <FooterText variant="caption" responsiveshare={false.toString()}>
            Share
          </FooterText>
        </ElementBox>

        <DropDownList handleSelectionFun={handleSelectEdit} options={cookies.redditUser?.id === comment?.author?._id ? dropDownListOptionsAuthor : dropDownListOptions}>
          <MoreVertIcon />
        </DropDownList>

        {/* Add cONDION ON THIS PREVIEW
        <DropDownList handleSelectionFun={handleSelectMod} options={dropDownListOptionsMod}>
          <ShieldOutlinedIcon />
        </DropDownList> */}

      </CommentActionsContainer>
      {replyEditor ? (
        <>
          <TextEditor
            handlePostTextChange={handleCommentReplyChange}
            postText={reply}
            commentPlaceholder
            id={comment?._id}
          />
          <Box m={2} gap={1} display="flex" justifyContent="flex-end">
            <RedditButton
              padding="3px 16px"
              fontSize={14}
              fontWeight="bold"
              type="submit"
              onClick={() => {
                setReplyEditor(false);
                setReply('');
              }}
            >
              Cancel
            </RedditButton>

            <SaveButton
              variant="contained"
              type="submit"
              onClick={replyOnComment}
              disabled={reply?.length === 8}
            >
              Reply
            </SaveButton>
          </Box>
        </>
      ) : null}

    </div>
  );
}

export default CommentActions;
