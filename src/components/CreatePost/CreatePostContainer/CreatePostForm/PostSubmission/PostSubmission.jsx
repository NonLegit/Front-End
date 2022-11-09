import { Box, Checkbox } from '@mui/material';
import RedditButton from '../../../../RedditButton/RedditButton';
import {
  ConnectAccounts, InfoIcon, PostButton, SendReplayFormLabel, SendReplyContainer,
} from './styles';
/**
 * This component contains post and save draft buttons
 *
 * @component PostHeader
 * @property {function} handleSaveDraft -Hanlding save draft button
 * @property {function} handlePost -Hanlding post submitting
 * @property {boolean} readyToPost -Check whether the post button is disabled or not
 * @property {boolean} sendReplies -Check whether the user need to be sent the post reply notifications or not.
 * @property {function} handleSendReplies -Hanlding post reply notifications
 * @returns {React.Component} Container of buttons
 */

function PostSubmission(props) {
  const {
    handleSaveDraft, handlePost, readyToPost, handleSendReplies, sendReplies,
  } = props;
  return (
    <Box>
      <Box m={2} gap={1} display="flex" justifyContent="flex-end">
        <RedditButton
          variant="outlined"
          padding="3px 16px"
          fontSize={14}
          fontWeight="bold"
          type="submit"
          onClick={handleSaveDraft}
        >
          save draft
        </RedditButton>
        <PostButton
          variant="contained"
          type="submit"
          onClick={handlePost}
          disabled={!readyToPost}
          data-testid="post button"
        >
          post
        </PostButton>
      </Box>
      <SendReplyContainer p={2}>
        <SendReplayFormLabel
          control={(
            <Checkbox
              onChange={handleSendReplies}
              checked={sendReplies}
              size="small"
              disableRipple
            />
)}
          label="Send me post reply notifications"
        />
        <Box display="flex">
          <ConnectAccounts>
            Connect accounts to share your post
          </ConnectAccounts>
          <InfoIcon />
        </Box>
      </SendReplyContainer>
    </Box>
  );
}

export default PostSubmission;
