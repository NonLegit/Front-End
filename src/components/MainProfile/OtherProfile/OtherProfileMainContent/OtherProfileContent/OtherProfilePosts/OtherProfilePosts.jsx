import { Box } from '@mui/material';
import Comments from '../../../../Comments/Comments';
import OtherProfilePostFooter from './OtherProfilePostFooter/OtherProfilePostFooter';
import OtherProfilePostHeader from './OtherProfilePostHeader/OtherProfilePostHeader';
import OtherProfilePostSide from './OtherProfilePostSide/OtherProfilePostSide';

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
 * @component OtherProfilePosts
 * @property {object} post -post entity
 * @returns {React.Component} OtherProfilePosts
 */
function OtherProfilePosts(props) {
  const { post, condition } = props;
  return (
    <>
      {' '}
      <PostsQueueBox condition={condition}>
        <OtherProfilePostSide postid={post?._id} points={post?.votes} postVoteStatus={post?.postVoteStatus} />
        <PostContentBox>
          <Box sx={{ marginLeft: 1 }}>
            <OtherProfilePostHeader
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
              disableRipple
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
            <OtherProfilePostFooter
              postid={post?._id}
              numComments={post?.commentCount}
              isSaved={post?.isSaved}
            />
          </Box>
        </PostContentBox>
      </PostsQueueBox>
      {post?.comments
        && <Comments entity={post} noheader={condition} profile={false} overview="true" />}

    </>
  );
}

export default OtherProfilePosts;
