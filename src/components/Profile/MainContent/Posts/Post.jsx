import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState, useContext, useEffect } from 'react';

import {
  EmptyImage,
  PostContentBox,
  PostsQueueBox,
  TitlePost,
} from './styles';
import PostSide from './PostSide/PostSide';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import { UserContext } from '../../../../context/UserProvider';

/** the post that appear in posts - saved - hidden - upvoted - downvotep taps
 * @return {React.Component} - EntityPost
 * @param {object} entity - an entity conatins all post informations
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
    console.log(type);
    setSubTitle(type);
  }, [type]);
  return (
    <PostsQueueBox>
      <PostSide upvoted={subTitle === 'upvoted'} downvoted={subTitle === 'downvoted'} />

      <Box sx={{ marginLeft: 6 }}>
        <Box sx={{ display: 'flex' }}>
          <EmptyImage>
            <ArticleOutlinedIcon fontSize="small" color="disabled" />
          </EmptyImage>
          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <TitlePost variant="h6">{entity.title}</TitlePost>
              <PostHeader
                subReddit={entity.ownerType}
                nameUser={username}
                Time={entity.createdAt}
              />
              {/*
                  saved - hidden
                  approved
                  removed
                  spam */}
              <PostFooter
                subTitle={entity.ownerType}
                handleExpand={handleExpand}
                expand={expand}
                voted={subTitle === 'upvoted' || subTitle === 'downvoted'}
                postedByOthers={!(entity.creator === username)}
                saved={subTitle === 'saved'}
                hidden={subTitle === 'hidden'}
                approved={entity.approved}
                removed={entity.removed}
                spam={entity.spam}
                numComments={entity.commentCount}
              />
            </Box>
          </PostContentBox>
        </Box>
        {expand && <Box>{entity.text}</Box>}
      </Box>
    </PostsQueueBox>
  );
}

export default Post;
