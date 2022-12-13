import { Box } from '@mui/material';
import PostFooter from './PostFooter/PostFooter';
import PostHeader from './PostHeader/PostHeader';
import PostSide from './PostSide/PostSide';

import {
  Flair,
  ParagraphBox,
  ParagraphPost,
  ParagraphWhite,
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
      <PostSide postid={post?._id} points={post?.votes} postVoteStatus={post?.postVoteStatus} />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <PostHeader
            type={post?.ownerType}
            subReddit={post?.owner?.name}
            icon={post?.owner?.icon}
            nameUser={post?.author?.name}
            Time={post?.createdAt}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <TitlePost variant="h6">{post?.title}</TitlePost>
            {
            post?.flairId?.text
            && (
            <Flair
              disableripple
              backgroundcolor={post?.flairId?.backgroundColor}
              flaircolor={post?.flairId?.textColor}
            >
              {post?.flairId?.text}
            </Flair>
            )
          }

          </Box>
          <ParagraphBox>
            <ParagraphWhite />
            <ParagraphPost data-testid="post-body" variant="body2">{post?.text}</ParagraphPost>
          </ParagraphBox>

          <PostFooter
            postid={post?._id}
            isSaved={post?.isSaved}
            subTitle={post?.ownerType}
            numComments={post?.commentCount}
          />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default Posts;
