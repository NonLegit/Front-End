// mui components
import {
  Box, Divider, useMediaQuery, useTheme,
} from '@mui/material';

// styles
import {
  PostContainer, Popularity, PostMedia, CustomImage, PostText, PostTextContainer,
} from './style';
import Reactions from '../../Post/Reactions/Reactions';
import PostReactions from '../../Post/PostReactions/PostReactions';
import PostHeader from './PostHeaderSubreddit/PostHeader';
/**
   * This component is the view of the post in home page.
   *
   * @component Post Subreddit
   * @property {string} title -Post title.
   * @property {string} image -Post owner icon.
   * @property {string} owner -Post subreddit(post owner).
   * @property {string} creator -Post creator.
   * @property {string} flairText -Post flair text.
   * @property {string} flairBackgroundColor -Post flair background color.
   * @property {string} flairColor -Post flair color.
   * @property {string} kind -Post kind (link, self, image, video).
   * @property {string} url -Source of media file in case of image/video kinds or url in case of url kind.
   * @property {number} votes -Number of post votes.
   * @property {number} commentCount -Number of post comments.
   * @property {string} text -Post text in case of "self" kind.
   * @returns {React.Component} Post
   */

function Post(props) {
  const {
    title, image, owner, creator, flairText, flairBackgroundColor, popularity, flairColor, url, kind, votes, commentCount, text,
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
        <Popularity pb={1}>
          {popularity}
        </Popularity>
        <Divider
          sx={{
            borderColor: 'rgb(0 0 0 / 9%)',
          }}
        />
        <PostHeader
          title={title}
          image={image}
          owner={owner}
          creator={creator}
          flair={flairText}
          flairBackgroundColor={flairBackgroundColor}
          flairColor={flairColor}
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
