import { Box } from '@mui/material';
import OtherProfilePostFooter from './OtherProfilePostFooter/OtherProfilePostFooter';
import OtherProfilePostHeader from './OtherProfilePostHeader/OtherProfilePostHeader';
import OtherProfilePostSide from './OtherProfilePostSide/OtherProfilePostSide';

import {
  Flair,
  ParagraphPost,
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
  const { post } = props;
  return (
    <PostsQueueBox>
      <OtherProfilePostSide points={post?.votes} postVoteStatus={post?.postVoteStatus} />
      <PostContentBox>
        <Box sx={{ marginLeft: 1 }}>
          <OtherProfilePostHeader
            type={post?.ownerType}
            subReddit={post?.owner?.name}
            icon={post?.owner?.icon}
            isSubReddit={post?.ownerType === 'Subreddit'}
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
          <ParagraphPost data-testid="post-body" variant="body2">{post?.text}</ParagraphPost>
          <OtherProfilePostFooter subTitle={post?.ownerType} numComments={post?.commentCount} />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default OtherProfilePosts;
