import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

import {
  EmptyImage,
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
  const { username } = useContext(UserContext);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  useEffect(() => {
    setSubTitle(type);
  }, [type]);
  return (
    <PostsQueueBox>
      <OtherProfilePostSide points={entity.votes} postVoteStatus={entity.postVoteStatus} spam={entity.isSpam} />

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
                {entity.spoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
                {entity.isSpam && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
              </Box>
              <OtherProfilePostHeader
                type={entity.ownerType}
                subReddit={entity.name}
                nameUser={username}
                Time={entity.createdAt}
                nsfw={entity.nsfw}
                locked={entity.locked}
                isSubReddit={entity?.ownerType === 'Subreddit'}
                flairBackgroundColor={entity?.flairId?.backgroundColor}
                flairColor={entity?.flairId?.textColor}
                flair={entity?.flairId?.text}
              />
              <OtherProfilePostFooter
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
        {expand && <Box>{entity.text}</Box>}
      </PostSidebaRes>
    </PostsQueueBox>
  );
}

export default OtherProfilePost;
