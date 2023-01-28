// mui components
import {
  Avatar, Box, Typography,
} from '@mui/material';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import calculateTime from '../../../utils/calculateTime';

// styles
import {
  CreatedAt,
  Flair,
  PostInfo, PostInfoLink, PostTitle, Tag,
} from './styles';
/**
 * This component is the upper section of post
 *
 * @component PostHeader
 * @property {string} title -Post title.
 * @property {string} ownerType -Post owner type user or subreddit.
 * @property {string} ownerIcon -Post ownerName icon.
 * @property {string} ownerName -Post subreddit(post ownerName).
 * @property {string} authorName -Post authorName.
 * @property {string} flairText -Post flair text.
 * @property {string} flairBackgroundColor -Post flair background color.
 * @property {string} flairColor -Post flair color.
 * @property {boolean} subredit -to identify if post in home page or subreddit.
 * @property {boolean} nsfw -Whether the post is not safe for work or not.
 * @property {boolean} spoiler -Whether the post is spoiler or not.
 * @returns {React.Component} Post header
 */

function PostHeader(props) {
  const {
    title, ownerIcon, ownerType, ownerName, authorName, flairText, flairBackgroundColor, flairColor, createdAt,
    subredit, nsfw, spoiler, redirectToPost, sharedFrom,
  } = props;

  const handleClickOnTitle = (e) => {
    e.preventDefault();
    redirectToPost(true, false);
  };

  return (
    <>
      <PostInfo pb={1}>
        {!subredit
        && (
          <>
            <Avatar
              src={ownerIcon}
              sx={{
                width: 20,
                height: 20,
              }}
              alt="Profile ownerIcon"
            />
            <PostInfoLink to={ownerType === 'Subreddit' ? `/r/${ownerName}` : `/user/${ownerName}`} color="#000" fontWeight="bolder">
              {ownerType === 'Subreddit' ? 'r/' : 'u/'}
              {ownerName}
            </PostInfoLink>
          </>
        )}
        <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
          {ownerType === 'Subreddit' && (
          <>
            {!subredit && (
            <span>
              •
            </span>
            )}
            {sharedFrom
              ? (
                <>
                  <CallSplitIcon
                    sx={{
                      color: '#0079D3',
                      transform: 'rotate(90deg)',
                      width: 15,
                      height: 15,
                    }}
                  />
                  <div>Crossed By</div>
                </>
              )
              : <div>Posted By</div>}
            <PostInfoLink to={`/user/${authorName}`} color="inherit" fontWeight="normal">
              u/
              {authorName}
            </PostInfoLink>
          </>
          )}

          <CreatedAt color="inherit" fontWeight="normal">
            {calculateTime(createdAt)}
          </CreatedAt>
        </Box>
      </PostInfo>
      <PostTitle onClick={handleClickOnTitle}>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontSize: 18 }}
        >
          {title}
          {' '}
          {
            flairText
            && (
            <Flair
              disableRipple
              backgroundColor={flairBackgroundColor}
              flairColor={flairColor}
            >
              {flairText}
            </Flair>
            )
          }
          {' '}
          {
            spoiler && (
            <Tag
              color="third"
              variant="outlined"
            >
              spoiler
            </Tag>
            )
          }
          {
            nsfw && (
            <Tag
              color="nsfw"
              variant="outlined"
            >
              nsfw
            </Tag>
            )
          }
        </Typography>
      </PostTitle>
    </>
  );
}

export default PostHeader;
