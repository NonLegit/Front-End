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
      <PostSide points={entity?.votes} postVoteStatus={entity?.postVoteStatus} />

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
              <PostFooter
                subTitle={entity.ownerType}
                handleExpand={handleExpand}
                expand={expand}
                submitted={subTitle === undefined}
                postedByOthers={!(entity.author === username)}
                saved={entity.isSaved}
                hidden={entity.isHidden}
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
