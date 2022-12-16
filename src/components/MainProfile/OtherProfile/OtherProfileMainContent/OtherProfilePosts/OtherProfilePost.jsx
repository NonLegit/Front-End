import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
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
  const { communities } = useContext(CommunitiesSubscriberContext);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  useEffect(() => {
    if (communities?.filter((element) => element.fixedName === entity.owner.name).length === 0) { setNotJoined(true); }
    setSubTitle(type);
  }, [type, communities]);

  const navigate = useNavigate();
  const { setEditPost } = useEditPostContext();

  return (
    <PostsQueueBox onClick={() => { setEditPost(false); navigate(`/${entity?.ownerType === 'Subreddit' ? 'r' : 'user'}/${entity?.owner?.name}/comments/${entity?._id}`); }}>
      <OtherProfilePostSide postid={entity?._id} points={entity.votes} postVoteStatus={entity.postVoteStatus} spam={entity.modState === 'spam'} />

      <PostSidebaRes>
        <Box sx={{ display: 'flex' }}>
          {entity.images.length === 0 ? (
            <EmptyImage>
              <ArticleOutlinedIcon fontSize="small" color="disabled" />
            </EmptyImage>
          )
            : (
              <EmptyImage>
                <PostImage src={entity.images[0]} alt="post pic" />
              </EmptyImage>
            )}
          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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
