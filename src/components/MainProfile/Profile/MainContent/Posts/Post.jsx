import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { useEditPostContext } from '../../../../../contexts/EditPostContext';
import { CommunitiesContext } from '../../../../../contexts/CommunitiesModeratorContext';
import {
  EmptyImage,
  Flair,
  PostContentBox,
  PostImage,
  PostSidebaRes,
  PostsQueueBox,
  TagPost,
  TitlePost,
} from './styles';
import PostSide from './PostSide/PostSide';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import { UserContext } from '../../../../../contexts/UserProvider';
import { CommunitiesSubscriberContext } from '../../../../../contexts/CommunitiesSubscriberContext';
import { actionOnPost, moderationAction } from '../../../profileServer';

/**
 * the post that appear in posts - saved - hidden - upvoted - downvotep taps
 *
 * @component Post
 * @property {object} entity - an entity conatins all post informations
 * @property {string} type -subTitle of the page
 * @returns {React.Component} Post
 */
function Post(props) {
  const {
    entity,
    type,
  } = props;
  const [expand, setExpand] = useState();
  const [subTitle, setSubTitle] = useState(type);
  const [modList, setModList] = useState(false);
  const { username } = useContext(UserContext);
  const { communities } = useContext(CommunitiesContext);
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);
  const [notJoined, setNotJoined] = useState(false);

  const [isNsfw, setIsNsfw] = useState(entity?.nsfw);
  const [isSpoiler, setIsSpoiler] = useState(entity?.spoiler);
  const [isLocked, setIsLocked] = useState(entity?.locked);
  const [modState, setModState] = useState(entity?.modState);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  useEffect(() => {
    console.log(entity?.postVoteStatus);
    setSubTitle(type);
    if (communitiesSubscriber?.filter((element) => element.fixedName === entity.owner.name).length === 0) {
      setNotJoined(true);
    }
    if (entity.ownerType === 'Subreddit' && communities?.filter((element) => element.fixedName === entity.owner.name).length > 0) {
      setModList(true);
    }
  }, [type, communities, entity, communitiesSubscriber]);

  const handleNsfw = () => {
    actionOnPost(entity?.postid, isNsfw ? 'unmark_nsfw' : 'mark_nsfw');
    setIsNsfw((prev) => !prev);
  };
  const handleSpoiler = () => {
    actionOnPost(entity?.postid, isSpoiler ? 'unspoiler' : 'spoiler');
    setIsSpoiler((prev) => !prev);
  };
  const handleLock = () => {
    actionOnPost(entity?.postid, isLocked ? 'unlock_comments' : 'lock_comments');
    setIsLocked((prev) => !prev);
  };
  const handleApprove = () => {
    moderationAction(entity?.postid, 'approve');
    setModState('approved');
  };
  const handleRemove = () => {
    moderationAction(entity?.postid, 'remove');
    setModState('removed');
  };
  const handleSpam = () => {
    moderationAction(entity?.postid, 'spam');
    setModState('spammed');
  };

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  return (
    <PostsQueueBox saved={subTitle}>
      <PostSide postid={entity?._id} points={entity?.votes} postVoteStatus={entity?.postVoteStatus} spam={entity?.modState === 'spam'} />

      <PostSidebaRes>
        <Box sx={{ display: 'flex' }}>
          <EmptyImage onClick={() => { setEditPost(false); navigate(`/${entity?.ownerType === 'Subreddit' ? 'r' : 'user'}/${entity?.owner?.name}/comments/${entity?._id}`); }}>
            {entity?.images.length === 0 ? (

              <ArticleOutlinedIcon fontSize="small" color="disabled" />
            )
              : (
                <PostImage src={entity?.images[0]} alt="post pic" />

              )}
          </EmptyImage>
          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setEditPost(false); navigate(`/${entity?.ownerType === 'Subreddit' ? 'r' : 'user'}/${entity?.owner?.name}/comments/${entity?._id}`); }}>
                <TitlePost variant="h6">{entity?.title}</TitlePost>
                {
                  entity?.flairId?.text
                  && (
                  <Flair
                    disableRipple
                    backgroundcolor={entity?.flairId?.backgroundColor}
                    flaircolor={entity?.flairId?.textColor}
                  >
                    {entity?.flairId?.text}
                  </Flair>
                  )
                }
                {isSpoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
                {isNsfw && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
              </Box>
              <PostHeader
                subReddit={entity?.owner.name}
                type={entity?.ownerType}
                nameUser={entity?.author.name}
                Time={entity?.createdAt}
                locked={isLocked}
                modState={modState}
                notJoined={notJoined}
                sharedFrom={entity?.sharedFrom}
              />
              <PostFooter
                postid={entity?._id}
                ownerType={entity?.ownerType}
                owner={entity?.owner?.name}
                handleExpand={handleExpand}
                expand={expand}
                submitted={subTitle === undefined}
                isModList={modList}
                postedByOthers={(entity?.author.name !== username)}
                saved={entity?.isSaved}
                hidden={entity?.isHidden}
                numComments={entity?.commentCount}
                points={entity?.votes}
                postVoteStatus={entity?.postVoteStatus}
                sendReplies={entity?.sendReplies}
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
        </Box>
        {expand && <Box dangerouslySetInnerHTML={{ __html: entity?.text }} />}
      </PostSidebaRes>
    </PostsQueueBox>
  );
}

export default Post;
