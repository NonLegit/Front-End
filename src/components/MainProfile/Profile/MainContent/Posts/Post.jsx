import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

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
  const { username } = useContext(UserContext);
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  useEffect(() => {
    setSubTitle(type);
  }, [type]);
  return (
    <PostsQueueBox>
      <PostSide postid={entity?._id} points={entity?.votes} postVoteStatus={entity?.postVoteStatus} spam={entity?.isSpam} />

      <PostSidebaRes>
        <Box sx={{ display: 'flex' }}>
          <EmptyImage>
            {entity?.images.length === 0 ? (

              <ArticleOutlinedIcon fontSize="small" color="disabled" />
            )
              : (
                <PostImage src={entity?.images[0]} alt="post pic" />

              )}
          </EmptyImage>
          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
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
                {entity?.spoiler && <TagPost color="#A4A7A8" variant="caption">spoiler</TagPost>}
                {entity?.isSpam && <TagPost color="#FF585B" variant="caption">nsfw</TagPost>}
              </Box>
              <PostHeader
                subReddit={entity?.owner.name}
                type={entity?.ownerType}
                nameUser={entity?.author.name}
                Time={entity?.createdAt}
                nsfw={entity?.nsfw}
                locked={entity?.locked}
              />
              <PostFooter
                postid={entity?._id}
                handleExpand={handleExpand}
                expand={expand}
                submitted={subTitle === undefined}
                postedByOthers={!(entity?.author.name === username)}
                saved={entity?.isSaved}
                hidden={entity?.isHidden}
                approved={entity?.approved}
                removed={entity?.removed}
                spam={entity?.isSpam}
                numComments={entity?.commentCount}
                points={entity?.votes}
                postVoteStatus={entity?.postVoteStatus}
                nsfw={entity?.nsfw}
                spoiler={entity?.spoiler}
                sendReplies={entity?.sendReplies}
              />
            </Box>
          </PostContentBox>
        </Box>
        {expand && <Box>{entity?.text}</Box>}
      </PostSidebaRes>
    </PostsQueueBox>
  );
}

export default Post;
