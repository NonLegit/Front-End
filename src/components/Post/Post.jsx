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
    title, image, sr, creator, flairText, flairBackgroundColor, popularity, flairColor, url, kind, votes, commentCount,
  } = props;
  // console.log(props);
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
          sr={sr}
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
            <CustomImage
              src={url}
              alt="post image"
            />
          )}
          {/* <img src="./assets/images/Screenshot (1).png" alt="" /> */}
        </PostMedia>
        <PostReactions votes={votes} matchSm={matchSm} matchMd={matchMd} comments={commentCount} />
      </Box>
    </PostContainer>
  );
}

export default Post;
