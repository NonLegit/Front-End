/* eslint-disable no-unused-vars */
import { useState } from 'react';
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
import { saveComment } from '../../commentsListServer';

function CommentActions(props) {
  // cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  // Context
  const { post } = usePostContext();
  const { comment } = props;

  // States
  const [reply, setReply] = useState('');
  const [replyEditor, setReplyEditor] = useState(false);

  const dropDownListOptions = [{ value: 'Save', icon: 'Save' }];
  const dropDownListOptionsAuthor = [{ value: 'Edit', icon: 'Edit' }, { value: 'Save', icon: 'Save' }, { value: 'Delete', icon: 'Delete' }];
  const dropDownListOptionsMod = [{ value: 'Approve', icon: 'Approve' }, { value: 'Remove', icon: 'Remove' }, { value: 'Remove as spam', icon: 'Remove as spam' }, { value: 'Lock comment', icon: 'Lock comment' }];

  const replyOnComment = () => {
    // call Reply endPoint
    console.log('Reply on Comment with Text', comment?.text);
    if (saveComment(comment?._id, 'Comment', reply)) {
      setReply('');
      setReplyEditor(false);

      // Need refresh post Component =>to pop comment
      // UpdatePost();
      // Refetch post
    }
  };

  const handleCommentReplyChange = (text) => {
    setReply(text);
  };

  const shareComment = () => {
    // call Share endPoint
    console.log('Share Comment with Text', comment?.text);
    // navigator.clipboard.writeText(this.state.textToCopy);
    navigator.clipboard.writeText('Basma');
  };
  const handleSelectEdit = (option) => {
    // Call Back API
    console.log('Option Selected', option);
    if (option === 'Edit') {
      // call Edit endPoint
      console.log('Edit Comment with Text', comment?.text);
    } else if (option === 'Save') {
      // call Save endPoint
      console.log('Save Comment with Text', comment?.text);
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

        {/* Add cONDION ON THIS PREVIEW */}
        <DropDownList handleSelectionFun={handleSelectMod} options={dropDownListOptionsMod}>
          <ShieldOutlinedIcon />
        </DropDownList>

      </CommentActionsContainer>
      {replyEditor ? (
        <>
          <TextEditor
            handlePostTextChange={handleCommentReplyChange}
            postText={reply}
            commentPlaceholder
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
