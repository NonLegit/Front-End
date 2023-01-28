import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { CommunitiesContext } from '../../../../../contexts/CommunitiesModeratorContext';
import { useEditPostContext } from '../../../../../contexts/EditPostContext';
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
import OtherProfilePostSide from './OtherProfilePostSide/OtherProfilePostSide';
import OtherProfilePostHeader from './OtherProfilePostHeader/OtherProfilePostHeader';
import OtherProfilePostFooter from './OtherProfileFooter/OtherProfilePostFooter';
import { UserContext } from '../../../../../contexts/UserProvider';
import { CommunitiesSubscriberContext } from '../../../../../contexts/CommunitiesSubscriberContext';
import { actionOnPost, moderationAction } from '../../../profileServer';

/**
 * the post that appear in posts - saved - hidden - upvoted - downvotep taps
 *
 * @component OtherProfilePost
 * @property {object} entity - an entity conatins all post informations
 * @property {string} type -subTitle of the page
 * @returns {React.Component} OtherProfilePost
 */
function OtherProfilePost(props) {
  const {
    entity,
    type,
  } = props;
  const [expand, setExpand] = useState();
  const [subTitle, setSubTitle] = useState(type);
  const [notJoined, setNotJoined] = useState(false);
  const { username } = useContext(UserContext);
  const { communities } = useContext(CommunitiesContext);
  const { communitiesSubscriber } = useContext(CommunitiesSubscriberContext);
  const [modList, setModList] = useState(false);
  const [isNsfw, setIsNsfw] = useState(entity?.nsfw);
  const [isSpoiler, setIsSpoiler] = useState(entity?.spoiler);
  const [isLocked, setIsLocked] = useState(entity?.locked);
  const [modState, setModState] = useState(entity?.modState);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  useEffect(() => {
    if (communitiesSubscriber?.filter((element) => element.fixedName === entity.owner.name).length === 0) { setNotJoined(true); }
    if (entity.ownerType === 'Subreddit' && communities?.filter((element) => element.fixedName === entity.owner.name).length > 0) {
      setModList(true);
    }
    setSubTitle(type);
  }, [type, communitiesSubscriber, entity]);

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

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

  return (
    <PostsQueueBox>
      <OtherProfilePostSide postid={entity?._id} points={entity.votes} postVoteStatus={entity.postVoteStatus} spam={entity.modState === 'spam'} />

      <PostSidebaRes>
        <Box sx={{ display: 'flex' }}>
          <EmptyImage onClick={() => { setEditPost(false); navigate(`/${entity?.ownerType === 'Subreddit' ? 'subreddit' : 'user'}/${entity?.owner?.name}/comments/${entity?._id}`); }}>
            {entity.images.length === 0 ? (

              <ArticleOutlinedIcon fontSize="small" color="disabled" />
            )
              : (
                <PostImage src={entity.images[0]} alt="post pic" />
              )}
          </EmptyImage>

          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} onClick={() => { setEditPost(false); navigate(`/${entity?.ownerType === 'Subreddit' ? 'subreddit' : 'user'}/${entity?.owner?.name}/comments/${entity?._id}`); }}>
                <TitlePost variant="h6">{entity.title}</TitlePost>
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
                {entity.spoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
                {entity.nsfw && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
              </Box>
              <OtherProfilePostHeader
                type={entity.ownerType}
                subReddit={entity.owner.name}
                nameUser={username}
                Time={entity.createdAt}
                modState={entity.modState}
                locked={entity.locked}
                notJoined={notJoined}
                sharedFrom={entity?.sharedFrom}

              />
              <OtherProfilePostFooter
                postid={entity?._id}
                handleExpand={handleExpand}
                expand={expand}
                submitted={subTitle === undefined}
                saved={entity.isSaved}
                hidden={entity.isHidden}
                numComments={entity.commentCount}
                points={entity.votes}
                postVoteStatus={entity.postVoteStatus}
                nsfw={isNsfw}
                spoiler={isSpoiler}
                locked={isLocked}
                isModList={modList}
                modState={modState}
                handleLock={handleLock}
                handleSpoiler={handleSpoiler}
                handleNsfw={handleNsfw}
                handleApprove={handleApprove}
                handleRemove={handleRemove}
                handleSpam={handleSpam}
                ownerType={entity.ownerType}
                owner={entity.owner.name}
              />
            </Box>
          </PostContentBox>
        </Box>
        {expand && <Box dangerouslySetInnerHTML={{ __html: entity?.text }} />}
      </PostSidebaRes>
    </PostsQueueBox>
  );
}

export default OtherProfilePost;
