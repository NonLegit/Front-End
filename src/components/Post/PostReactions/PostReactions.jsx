import { useState } from 'react';
// icons
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

// mui components
import {
  Box, ClickAwayListener, Divider, IconButton, ListItemButton, ListItemIcon, useMediaQuery,
} from '@mui/material';

// styles
import { useTheme } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditPostContext } from '../../../contexts/EditPostContext';
import {
  PostActions, ActionButton, ShowMoreList, ShowMoreListItemText,
} from './styles';
import Reactions from '../Reactions/Reactions';
import postReactionsServer from '../postReactionsServer';
import { useHiddenPostsContext } from '../../../contexts/HiddenPostsContext';
import UserLogin from '../../../authentication';

/**
 * This component is the container of post reactions
 *
 * @component PostReactions
 * @property {number} votes -Number of post votes.
 * @property {boolean} matchMd -check whether screen size is larger than meduim
 * @property {boolean} matchSm -check whether screen size is larger than small
 * @property {number} commentCount -Number of post comments.
 * @property {number} postVoteStatus -The last vote of the current user in this post.
 * @property {boolean} isSaved -Is this post saved by the current user or not.
 * @property {number} postId -The Id of the current post.
 * @returns {React.Component}  All post reactions.
 */

function PostReactions(props) {
  const {
    matchSm, comments, matchMd, votes, postVoteStatus, isSaved, postId, redirectToPost, authorName, subredit,
  } = props;

  const [showMore, setShowMore] = useState(false);
  const [save, setSave] = useState(isSaved);
  const theme = useTheme();
  const matchXs = useMediaQuery(theme.breakpoints.down('xs'));
  const matchXxs = useMediaQuery(theme.breakpoints.down('xxs'));
  const { setHiddenPosts } = useHiddenPostsContext();

  // routes
  const navigate = useNavigate();
  const { Name } = useParams();

  // handlers
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleSave = () => {
    postReactionsServer(postId, save ? 'unsave' : 'save', save);
    setSave(!save);
  };
  const handleClickAway = () => setShowMore(false);
  const handleHide = () => {
    setHiddenPosts((hiddenPosts) => [...hiddenPosts, postId]);
    postReactionsServer(postId, 'hide', 1, setHiddenPosts);
  };

  const handleDelete = () => {
    setHiddenPosts((hiddenPosts) => [...hiddenPosts, postId]);
    postReactionsServer(postId, 'delete', 1, setHiddenPosts);
  };

  const handleShare = () => {
    if (!subredit) {
      navigate(`/submit/${postId}`);
    } else {
      navigate(`/submit/${postId}/r/${Name}`);
    }
  };
  // contexts
  const { setEditPost, setCommentPost } = useEditPostContext();

  // variables
  const isMe = UserLogin([authorName]);
  return (
    <PostActions mt={0.5}>
      {!matchSm && (
      <Reactions
        flexDirection="row"
        postVoteStatus={postVoteStatus}
        votes={votes}
        postId={postId}
      />
      )}
      <ActionButton
        color="third"
        startIcon={<ChatBubbleOutlineRoundedIcon />}
        onClick={() => {
          setCommentPost(true);
          setEditPost(false);
          redirectToPost(true);
        }}
      >
        {comments}
        {' '}
        comments
      </ActionButton>
      {!matchXs
      && (
      <ActionButton
        color="third"
        startIcon={<ShareOutlinedIcon />}
        onClick={handleShare}
      >
        Share

      </ActionButton>
      )}
      {matchMd && (
      <ActionButton
        color="third"
        startIcon={save
          ? (
            <BookmarksOutlinedIcon />
          ) : (
            <BookmarkBorderIcon
              sx={{
                width: '25px !important',
                height: '25px !important',
              }}
            />

          )}
        onClick={handleSave}
        data-testid="save button"
      >
        {save ? 'Unsave' : 'Save'}
      </ActionButton>
      )}
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box position="relative" display="flex">
          <IconButton
            sx={{
              borderRadius: '10%',
              py: 0.4,
            }}
            onClick={handleShowMore}
            color="third"
          >
            <MoreHorizOutlinedIcon />
          </IconButton>

          <ShowMoreList
            sx={{ boxShadow: 2 }}
            display={(showMore === false ? 'none' : 'block')}
            match={matchXxs}
          >
            {matchXs && (
            <>
              <ListItemButton onClick={handleSave}>
                <ListItemIcon>
                  <ShareOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  Share
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
            </>
            )}
            {!matchMd && (
            <>
              <ListItemButton onClick={handleSave}>
                <ListItemIcon>
                  {save ? <BookmarksOutlinedIcon /> : <BookmarkBorderIcon />}
                </ListItemIcon>
                <ShowMoreListItemText>
                  {save ? 'Unsave' : 'Save'}
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
            </>
            )}
            {isMe && (
            <>
              <ListItemButton onClick={() => {
                setEditPost(true);
                setCommentPost(false);
                redirectToPost(true);
              }}
              >
                <ListItemIcon>
                  <ModeEditOutlineOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  edit post
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
            </>
            )}
            <ListItemButton onClick={handleHide}>
              <ListItemIcon>
                <VisibilityOffOutlinedIcon />
              </ListItemIcon>
              <ShowMoreListItemText>
                hide
              </ShowMoreListItemText>
            </ListItemButton>
            <Divider />
            {isMe && (
            <>
              <ListItemButton onClick={handleDelete}>
                <ListItemIcon>
                  <DeleteOutlineOutlinedIcon />
                </ListItemIcon>
                <ShowMoreListItemText>
                  delete
                </ShowMoreListItemText>
              </ListItemButton>
              <Divider />
            </>
            )}
            <ListItemButton>
              <ListItemIcon>
                <FlagOutlinedIcon />
              </ListItemIcon>
              <ShowMoreListItemText>
                report
              </ShowMoreListItemText>
            </ListItemButton>
          </ShowMoreList>
        </Box>
      </ClickAwayListener>
    </PostActions>
  );
}

export default PostReactions;
