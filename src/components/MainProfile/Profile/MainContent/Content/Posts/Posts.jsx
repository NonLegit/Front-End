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
 * Posts component represents an entity component
 *
 * @component Posts
 * @property {object} post -post entity
 * @returns {React.Component} Posts
 */
function Posts(props) {
  const { post } = props;
  return (
    <PostsQueueBox>
      <PostSide points={post?.votes} postVoteStatus={post?.postVoteStatus} />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader
            type={post?.ownerType}
            subReddit={post?.name}
            nameUser={post?.author}
            Time={post?.createdAt}
            flairBackgroundColor={post?.flairId.backgroundColor}
            flairColor={post?.flairId.textColor}
            flair={post?.flairId.text}
          />
          <TitlePost variant="h6">{post?.title}</TitlePost>
          <ParagraphPost data-testid="post-body" variant="body2">{post?.text}</ParagraphPost>
          <PostFooter isSaved={post?.isSaved} subTitle={post?.ownerType} numComments={post?.commentCount} />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default Posts;
