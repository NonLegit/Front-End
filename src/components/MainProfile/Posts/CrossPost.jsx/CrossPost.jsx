import { Box, Typography } from '@mui/material';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditPostContext } from '../../../../contexts/EditPostContext';
import PostHeader from '../PostHeader/PostHeader';
import {
  Flair, PostContentBox, TagPost, TitlePost,
} from '../styles';
import { CrossBox } from './styles';
import { CommunitiesSubscriberContext } from '../../../../contexts/CommunitiesSubscriberContext';
import PostBody from '../PostBody/PostBody';
import { LinkCross } from '../PostHeader/styles';

function CrossPost({ post }) {
//   const [isSpoiler, setIsSpoiler] = useState();
//   const [isLocked, setIsLocked] = useState();
//   const [modState, setModState] = useState();

  const [notJoined, setNotJoined] = useState(false);
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);

  useEffect(() => {
    console.log(post?.kind);
    if (communitiesSubscriber?.filter((element) => element.fixedName === post.owner.name).length === 0) {
      setNotJoined(true);
    }
  }, [post, communitiesSubscriber]);
  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  return (
    <CrossBox>
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader
            type={post?.ownerType}
            subReddit={post?.owner?.name}
            icon={post?.owner?.icon}
            nameUser={post?.author?.name}
            Time={post?.createdAt}
            locked={post?.locked}
            modState={post?.modState}
            notJoined={notJoined}
            sharedFrom={post?.sharedFrom}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setEditPost(false); navigate(`/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?.name}/comments/${post?._id}`); }}>
            <TitlePost variant="h6">{post?.title}</TitlePost>
            {post?.spoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
            {post?.nsfw && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
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

          {!post?.nsfw && (
            <PostBody post={post} isSpoiler={post?.spoiler} />
          )}

          <Typography variant="caption" sx={{ color: '#787c7e', marginLeft: 1 }}>
            {post?.votes}
            {' '}
            point
            {' . '}
            <LinkCross to={`/${post?.ownerType === 'Subreddit' ? 'r' : 'user'}/${post?.owner?.name}/comments/${post?._id}`} onClick={() => { setEditPost(false); }}>
              {post?.commentCount}
              {' '}
              Comment
            </LinkCross>
          </Typography>
        </Box>
      </PostContentBox>
    </CrossBox>
  );
}

export default CrossPost;
