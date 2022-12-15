import { Box } from '@mui/material';
import Comments from '../../../../Comments/Comments';
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
  const { post, condition } = props;
  return (
    <>
      <PostsQueueBox condition={condition}>
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
              <ParagraphPost
                data-testid="post-body"
                dangerouslySetInnerHTML={{ __html: post?.text }}
              />
            </ParagraphBox>

            <PostFooter
              postid={post?._id}
              isSaved={post?.isSaved}
              subTitle={post?.ownerType}
              numComments={post?.commentCount}
              nsfw={post?.nsfw}
              spoiler={post?.spoiler}
              sendReplies={post?.sendReplies}
              locked={post?.locked}
            />
          </Box>
        </PostContentBox>
      </PostsQueueBox>
      {post?.comments
        && <Comments entity={post} noheader={condition} profile overview="true" />}
    </>
  );
}

export default Posts;
