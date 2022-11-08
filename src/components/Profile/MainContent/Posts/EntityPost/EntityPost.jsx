import { Box } from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { useState } from 'react';

import {
  EmptyImage,
  PostContentBox,
  PostsQueueBox,
  TitlePost,
} from './styles';
import PostSide from './PostSide/PostSide';
import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';

function EntityPost(props) {
  const {
    subReddit, entity,
  } = props;
  const [expand, setExpand] = useState();
  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <PostsQueueBox>
      <PostSide upvoted={entity.upvoted} downvoted={entity.downvoted} />
      <Box sx={{ marginLeft: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <EmptyImage>
            <ArticleOutlinedIcon fontSize="small" color="disabled" />
          </EmptyImage>
          <PostContentBox>
            <Box sx={{ marginLeft: 1 }}>
              <TitlePost variant="h6">{entity.Title}</TitlePost>
              <PostHeader subReddit={subReddit} />
              <PostFooter
                subTitle={subReddit}
                handleExpand={handleExpand}
                expand={expand}
                voted={entity.upvoted || entity.downvoted}
                postedByOthers={entity.postedByOthers}
                saved={entity.saved}
                hidden={entity.hidden}
              />
            </Box>
          </PostContentBox>
        </Box>
        {expand && <Box>{entity.Paragraph}</Box>}
      </Box>
    </PostsQueueBox>
  );
}

export default EntityPost;
