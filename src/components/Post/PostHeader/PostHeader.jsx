// mui components
import {
  Avatar, Box, Typography,
} from '@mui/material';
import calculateTime from '../../../utils/calculateTime';
import JoinButton from '../../JoinButton/JoinButton';

// styles
import {
  CreatedAt,
  Flair,
  PostInfo, PostInfoLink, PostTitle,
} from './styles';
/**
 * This component is the upper section of post
 *
 * @component PostHeader
 * @property {string} title -Post title.
 * @property {string} image -Post owner icon.
 * @property {string} owner -Post subreddit(post owner).
 * @property {string} author -Post author.
 * @property {string} flairText -Post flair text.
 * @property {string} flairBackgroundColor -Post flair background color.
 * @property {string} flairColor -Post flair color.
 * @property {boolean} subredit -to identify if post in home page or subreddit.
 * @returns {React.Component} Post header
 */

function PostHeader(props) {
  const {
    title, image, owner, author, flair, flairBackgroundColor, flairColor, createdAt,
    subredit,
  } = props;
  return (
    <>
      <PostInfo pb={1}>
        {!subredit
        && (
          <>
            <Avatar
              src={image}
              sx={{
                width: 20,
                height: 20,
              }}
              alt="Profile Image"
            />

            <PostInfoLink to={`/Subreddit/${owner}`} color="#000" fontWeight="bolder">
              r/
              {owner}
            </PostInfoLink>
          </>
        )}
        <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
          {!subredit && (
          <span>
            •
          </span>
          )}
          <div>Posted By</div>
          <PostInfoLink to={`/user/${author}`} color="inherit" fontWeight="normal">
            u/
            {author}
          </PostInfoLink>

          <CreatedAt color="inherit" fontWeight="normal">
            {calculateTime(createdAt)}
          </CreatedAt>

        </Box>
        {!subredit && (
        <Box display="flex" justifyContent="flex-end" flexGrow={1} alignItems="flex-start">
          <JoinButton />
        </Box>
        )}
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

export default PostHeader;
