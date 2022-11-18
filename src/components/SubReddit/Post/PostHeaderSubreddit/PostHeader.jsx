// mui components
import {
  Avatar, Box, Typography,
} from '@mui/material';

// styles
import {
  Flair,
  PostInfo, PostInfoLink, PostTitle,
} from './style';
/**
   * This component is the upper section of post
   *
   * @component PostHeader Subreddit
   * @property {string} title -Post title.
   * @property {string} image -Post owner icon.
   * @property {string} owner -Post subreddit(post owner).
   * @property {string} author -Post author.
   * @property {string} flairText -Post flair text.
   * @property {string} flairBackgroundColor -Post flair background color.
   * @property {string} flairColor -Post flair color.
   * @returns {React.Component} Post header
   */

function PostHeaderSubreddit(props) {
  const {
    title, image, owner, author, flair, flairBackgroundColor, flairColor,
  } = props;
  return (
    <>
      <PostInfo py={1}>
        <Avatar
          src={image}
          sx={{
            width: 20,
            height: 20,
          }}
          alt="Profile Image"
        />
        <PostInfoLink to="/" color="#000" fontWeight="bolder">
          r/
          {owner}
        </PostInfoLink>
        <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
          <span>
            •
          </span>
          <div>Posted By</div>
          <PostInfoLink to="/" color="inherit" fontWeight="normal">
            u/
            {author}
          </PostInfoLink>
        </Box>
      </PostInfo>
      <PostTitle to="/">
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: 18 }}
        >
          {title}
          {' '}
          <Flair
            disableRipple
            backgroundColor={flairBackgroundColor}
            flairColor={flairColor}
          >
            {flair}
          </Flair>
        </Typography>
      </PostTitle>
    </>
  );
}

export default PostHeaderSubreddit;
