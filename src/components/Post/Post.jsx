// mui components
import {
  Box, useMediaQuery, useTheme,
} from '@mui/material';

// styles
import {
  PostContainer, PostMedia, CustomImage, PostText, PostTextContainer,

} from './styles';

import Reactions from './Reactions/Reactions';
import PostReactions from './PostReactions/PostReactions';
import PostHeader from './PostHeader/PostHeader';
/**
 * This component is the view of the post in home page.
 *
 * @component Post
 * @property {string} title -Post title.
 * @property {string} ownerType -Post owner type user or subreddit.
 * @property {string} ownerIcon -Post owner icon.
 * @property {string} ownerName -Post subreddit(post owner).
 * @property {string} authorName -Post author.
 * @property {string} flairText -Post flair text.
 * @property {string} flairBackgroundColor -Post flair background color.
 * @property {string} flairColor -Post flair color.
 * @property {string} kind -Post kind (link, self, image, video).
 * @property {Array.<string>} images -Array of sources of images
 * @property {Array.<string>} videos -Array of sources of vidoes
 * @property {number} votes -Number of post votes.
 * @property {number} commentCount -Number of post comments.
 * @property {string} text -Post text in case of "self" kind.
 * @property {boolean} subredit -to identify if post in home page or subreddit.
 * @returns {React.Component} Post
 */

function Post(props) {
  const {
    createdAt, title, images, ownerType, ownerName, ownerIcon, authorName, flairText, flairBackgroundColor, flairColor, kind, votes, commentCount, text, videos,
    subredit,
  } = props;
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
  // const doc = new DOMParser().parseFromString(text, 'text/xml');
  // console.log(doc);
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <PostContainer my={2}>
      {matchSm && (
      <Reactions flexDirection="column" votes={votes} />
      )}
      <Box
        p={1}
        flexGrow={1}
        maxWidth={matchSm ? '94.5%' : '100%'}
      >
        <PostHeader
          title={title}
          ownerIcon={ownerIcon}
          ownerName={ownerName}
          authorName={authorName}
          flairText={flairText}
          flairBackgroundColor={flairBackgroundColor}
          flairColor={flairColor}
          createdAt={createdAt}
          subredit={subredit}
          ownerType={ownerType}
        />
        <PostMedia mt={1.5} kind={kind}>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          {/* */}
          {kind === 'video' ? (
            <video controls style={{ width: '100%', maxHeight: '512px' }}>
              <source src={videos[0]} type="video/mp4" />
            </video>
          ) : (
            (kind === 'image')
              ? (
                <CustomImage
                  src={images[0]}
                  alt="post image"
                />
              ) : (
                <PostText>
                  <PostTextContainer />
                  <div dangerouslySetInnerHTML={{ __html: text }} />
                </PostText>
              )
          )}
          {/* <img src="./assets/images/Screenshot (1).png" alt="" /> */}
        </PostMedia>
        <PostReactions
          votes={votes}
          matchSm={matchSm}
          matchMd={matchMd}
          comments={commentCount}
        />
      </Box>
    </PostContainer>
  );
}

export default Post;
