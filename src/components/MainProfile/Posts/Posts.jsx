import { Box } from '@mui/material';
import {
  useState, useEffect, useContext,
} from 'react';

import { useNavigate } from 'react-router-dom';
import { useEditPostContext } from '../../../contexts/EditPostContext';
import Comments from '../Comments/Comments';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostSide from './PostSide/PostSide';
import {
  actionOnPost, moderationAction,
} from '../profileServer';
import {
  Flair,
  PostContentBox,
  PostsQueueBox,
  TagPost,
  TitlePost,
} from './styles';
import { CommunitiesContext } from '../../../contexts/CommunitiesModeratorContext';
import { CommunitiesSubscriberContext } from '../../../contexts/CommunitiesSubscriberContext';
import PostBody from './PostBody/PostBody';
import CrossPost from './CrossPost.jsx/CrossPost';

/**
 * Posts component represents an entity component
 *
 * @component Posts
 * @property {object} post -post entity
 * @returns {React.Component} Posts
 */
function Posts(props) {
  const { post, condition, profile } = props;

  const [isNsfw, setIsNsfw] = useState(post?.nsfw);
  const [isSpoiler, setIsSpoiler] = useState(post?.spoiler);
  const [isLocked, setIsLocked] = useState(post?.locked);
  const [modState, setModState] = useState(post?.modState);

  const { communities } = useContext(CommunitiesContext);
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);

  const [mod, setMod] = useState(false);

  const [notJoined, setNotJoined] = useState(false);

  useEffect(() => {
    console.log(post?.kind);
    if (communitiesSubscriber?.filter((element) => element.fixedName === post.owner.name).length === 0) {
      setNotJoined(true);
    }
  }, [post, communitiesSubscriber]);

  useEffect(() => {
    console.log(post?.sharedFrom);
    if (post.ownerType === 'Subreddit' && communities?.filter((element) => element.fixedName === post.owner.name).length > 0) {
      setMod(true);
    }
  }, [communities, post]);

  const handleNsfw = () => {
    actionOnPost(post?.postid, isNsfw ? 'unmark_nsfw' : 'mark_nsfw');
    setIsNsfw((prev) => !prev);
  };
  const handleSpoiler = () => {
    actionOnPost(post?.postid, isSpoiler ? 'unspoiler' : 'spoiler');
    setIsSpoiler((prev) => !prev);
  };
  const handleLock = () => {
    actionOnPost(post?.postid, isLocked ? 'unlock_comments' : 'lock_comments');
    setIsLocked((prev) => !prev);
  };
  const handleApprove = () => {
    moderationAction(post?.postid, 'approve');
    setModState('approved');
  };
  const handleRemove = () => {
    moderationAction(post?.postid, 'remove');
    setModState('removed');
  };
  const handleSpam = () => {
    moderationAction(post?.postid, 'spam');
    setModState('spammed');
  };

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  return (
    <>
      <PostsQueueBox condition={condition}>
        <PostSide postid={post?._id} points={post?.votes} postVoteStatus={post?.postVoteStatus} />
        <PostContentBox>
          <Box sx={{ marginLeft: 1 }}>
            <PostHeader
              type={post?.ownerType}
              subReddit={post?.owner?.name}
              icon={post?.owner?.icon}
              nameUser={post?.author?.name}
              Time={post?.createdAt}
              locked={isLocked}
              modState={modState}
              notJoined={notJoined}
              sharedFrom={post?.sharedFrom}

            />
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}>
              <TitlePost variant="h6">{post?.title}</TitlePost>
              {isSpoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
              {isNsfw && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
              {post?.flairId?.text
                && (
                <Flair
                  disableripple
                  backgroundcolor={post?.flairId?.backgroundColor}
                  flaircolor={post?.flairId?.textColor}
                >
                  {post?.flairId?.text}
                </Flair>
                )}

            </Box>

            {!isNsfw && !post?.sharedFrom ? (
              <PostBody post={post} isSpoiler={isSpoiler} />
            ) : !isNsfw && post?.sharedFrom && (
            <CrossPost
              post={post?.sharedFrom}
            />
            )}

            <PostFooter
              postid={post?._id}
              isSaved={post?.isSaved}
              subTitle={post?.ownerType}
              owner={post?.owner?.name}
              numComments={post?.commentCount}
              sendReplies={post?.sendReplies}
              mod={mod}
              profile={profile}
              nsfw={isNsfw}
              spoiler={isSpoiler}
              locked={isLocked}
              modState={modState}
              handleLock={handleLock}
              handleSpoiler={handleSpoiler}
              handleNsfw={handleNsfw}
              handleApprove={handleApprove}
              handleRemove={handleRemove}
              handleSpam={handleSpam}
            />
          </Box>
        </PostContentBox>
      </PostsQueueBox>
      {post?.comments
        && <Comments entity={post} noheader={condition} profile={profile} overview="true" />}
    </>
  );
}

export default Posts;
