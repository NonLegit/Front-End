// mui components
import {
  Avatar, Box, Typography,
} from '@mui/material';
import JoinButton from '../../JoinButton/JoinButton';

// styles
import {
  Flair,
  PostInfo, PostInfoLink, PostTitle,
} from './styles';

function PostHeader(props) {
  const {
    title, image, sr, creator, flair, flairBackgroundColor, flairColor,
  } = props;
  console.log(flairColor);
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
          {sr}
        </PostInfoLink>
        <Box color="#787C7E" fontWeight={300} display="flex" gap="4px" flexWrap="wrap">
          <span>
            •
          </span>
          <div>Posted By</div>
          <PostInfoLink to="/" color="inherit" fontWeight="normal">
            u/
            {creator}
          </PostInfoLink>
        </Box>
        <Box display="flex" justifyContent="flex-end" flexGrow={1} alignItems="flex-start">
          <JoinButton />
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

export default PostHeader;
