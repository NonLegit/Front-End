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
 * @property {string} image -Post owner icon.
 * @property {string} owner -Post subreddit(post owner).
 * @property {string} author -Post author.
 * @property {string} flairText -Post flair text.
 * @property {string} flairBackgroundColor -Post flair background color.
 * @property {string} flairColor -Post flair color.
 * @property {string} kind -Post kind (link, self, image, video).
 * @property {string} url -Source of media file in case of image/video kinds or url in case of url kind.
 * @property {number} votes -Number of post votes.
 * @property {number} commentCount -Number of post comments.
 * @property {string} text -Post text in case of "self" kind.
 * @property {boolean} subredit -to identify if post in home page or subreddit.
 * @returns {React.Component} Post
 */

function Post(props) {
  const {
    title, image, createdAt, owner, author, flairText, flairBackgroundColor, flairColor, url, kind, votes, commentCount, text,
    subredit,
  } = props;
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
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
          image={image}
          owner={owner}
          author={author}
          flair={flairText}
          flairBackgroundColor={flairBackgroundColor}
          flairColor={flairColor}
          createdAt={createdAt}
          subredit={subredit}
        />
        <PostMedia mt={1.5} kind={kind}>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          {/* */}
          {kind === 'video' ? (
            <video controls style={{ width: '100%', maxHeight: '512px' }}>
              <source src={url} type="video/mp4" />
            </video>
          ) : (
            (kind === 'image')
              ? (
                <CustomImage
                  src={url}
                  alt="post image"
                />
              ) : (
                <PostText>
                  <PostTextContainer />
                  {text}
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
