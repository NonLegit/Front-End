import { Box } from '@mui/material';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostSide from './PostSide/PostSide';

import {
  ParagraphPost,
  PostContentBox,
  PostsQueueBox,
  TitlePost,
} from './styles';

function Posts(props) {
  const { post } = props;
  return (
    <PostsQueueBox>
      <PostSide />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader subReddit={post.subReddit} nameUser={post.publisher} Time={post.time} />
          <TitlePost variant="h6">{post.Title}</TitlePost>
          <ParagraphPost variant="body2">{post.Paragraph}</ParagraphPost>
          <PostFooter subTitle={post.subReddit} numComments={post.numComments} />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default Posts;
