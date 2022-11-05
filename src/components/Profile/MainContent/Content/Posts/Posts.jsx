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
  const { subReddit } = props;
  const content = {
    Title: 'new',
    Paragraph: 'extra',
  };
  return (
    <PostsQueueBox>
      <PostSide />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader subReddit={subReddit} />
          <TitlePost variant="h6">{content.Title}</TitlePost>
          <ParagraphPost variant="body2">{content.Paragraph}</ParagraphPost>
          <PostFooter subTitle={subReddit} />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default Posts;
