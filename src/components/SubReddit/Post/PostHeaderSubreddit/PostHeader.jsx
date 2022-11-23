// mui components
import {
  Box, Typography,
} from '@mui/material';
import moment from 'moment/moment';

// styles
import {
  Flair,
  PostInfo, PostInfoLink, PostTitle, CreatedAt,
} from './style';
/**
   * This component is the upper section of post
   *
   * @component PostHeader Subreddit
   * @property {string} title -Post title.
   * @property {string} image -Post owner icon.
   * @property {string} owner -Post subreddit(post owner).
   * @property {string} creator -Post creator.
   * @property {string} flairText -Post flair text.
   * @property {string} flairBackgroundColor -Post flair background color.
   * @property {string} flairColor -Post flair color.
   * @returns {React.Component} Post header
   */

function PostHeaderSubreddit(props) {
  const {
    title, author, flair, flairBackgroundColor, flairColor, createdAt,
  } = props;
  return (
    <>
      <PostInfo py={1}>
        {/* <Avatar
          src={image}
          sx={{
            width: 20,
            height: 20,
          }}
          alt="Profile Image"
        /> */}
        <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
          <div>Posted By</div>
          <PostInfoLink to={`/user/${author}`} color="inherit" fontWeight="normal">
            u/
            {author}
          </PostInfoLink>
          <CreatedAt color="inherit" fontWeight="normal">
            {(moment.utc(createdAt).local().startOf('seconds')
              .fromNow())}
          </CreatedAt>
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
