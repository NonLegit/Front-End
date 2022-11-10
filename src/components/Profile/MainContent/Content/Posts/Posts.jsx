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

/**
 * Posts inside the content of profile
 * @return {React.Component} - Posts
 * @param {object} post - conatin all info needed to be shown in the post
 */
function Posts(props) {
  const { post } = props;
  return (
    <PostsQueueBox>
      <PostSide points={post?.votes} />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader
            subReddit={post?.ownerType}
            nameUser={post?.author}
            Time={post?.createdAt}
          />
          <TitlePost variant="h6">{post?.title}</TitlePost>
          <ParagraphPost data-testid="post-body" variant="body2">{post?.text}</ParagraphPost>
          <PostFooter subTitle={post?.ownerType} numComments={post?.commentCount} />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default Posts;
