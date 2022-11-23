import { Box } from '@mui/material';
import OtherProfilePostFooter from './OtherProfilePostFooter/OtherProfilePostFooter';
import OtherProfilePostHeader from './OtherProfilePostHeader/OtherProfilePostHeader';
import OtherProfilePostSide from './OtherProfilePostSide/OtherProfilePostSide';

import {
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
            subReddit={post?.owner}
            isSubReddit={post?.ownerType}
            nameUser={post?.author}
            Time={post?.createdAt}

          />
          <TitlePost variant="h6">{post?.title}</TitlePost>
          <ParagraphPost data-testid="post-body" variant="body2">{post?.text}</ParagraphPost>
          <OtherProfilePostFooter subTitle={post?.ownerType} numComments={post?.commentCount} />
        </Box>
      </PostContentBox>
    </PostsQueueBox>
  );
}

export default OtherProfilePosts;
