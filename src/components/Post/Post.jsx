// mui components
import {
  Box, Divider, useMediaQuery, useTheme,
} from '@mui/material';

// assets
// import video from '../../assets/videos/mov_bbb.mp4';

// styles
import {
  PostContainer, Popularity, PostMedia, CustomImage,
} from './styles';
import Reactions from '../Reactions/Reactions';
import PostReactions from '../HomePage/PostReactions/PostReactions';
import PostHeader from '../HomePage/PostHeader/PostHeader';

function Post(props) {
  const {
    title, image, subredditName, username, flair, flairColor, popularity, flairFontColor, postMediaSrc, isVideo,
  } = props;
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <PostContainer my={2}>
      {matchSm && (
      <Reactions flexDirection="column" />
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
          subredditName={subredditName}
          username={username}
          flair={flair}
          flairColor={flairColor}
          flairFontColor={flairFontColor}
        />
        <PostMedia mt={1.5} isVideo={isVideo}>
          {/* eslint-disable jsx-a11y/media-has-caption */}
          {/* */}
          {isVideo ? (
            <video controls style={{ width: '100%', maxHeight: '512px' }}>
              <source src={isVideo} type="video/mp4" />
            </video>
          ) : (
            <CustomImage
              src={postMediaSrc}
              alt="post image"
            />
          )}
          {/* <img src="./assets/images/Screenshot (1).png" alt="" /> */}
        </PostMedia>
        <PostReactions matchSm={matchSm} matchMd={matchMd} comments={157} />
      </Box>
    </PostContainer>
  );
}

export default Post;
