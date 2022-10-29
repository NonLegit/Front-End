import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  AddMoreMediaFiles, MediaFileContainer, MediaScreenShot, PostEmptyMediaContainer, PostOneMediaContainer, UploadButton,
} from './styles';

function PostMedia(props) {
  const { handlePostMedia, postMedia } = props;
  const mediaCount = postMedia.length;
  console.log(mediaCount);
  console.log(postMedia);
  return (
    mediaCount === 0
      ? (
        <PostEmptyMediaContainer>
          <Typography>
            Drag and drop images or
          </Typography>
          <UploadButton
            component="label"
            variant="outlined"
          >
            upload
            <input
              hidden
              accept="video/*,image/*"
              multiple
              type="file"
              onChange={handlePostMedia}
            />
          </UploadButton>
          {postMedia.map((media) => (<img key={media} src={media} width={100} alt="" />))}
        </PostEmptyMediaContainer>
      ) : (mediaCount >= 1
        ? (
          <PostOneMediaContainer>
            {postMedia.map((media) => (
              <MediaFileContainer key={media}>
                <MediaScreenShot image={media} />
              </MediaFileContainer>
            ))}
            <AddMoreMediaFiles>
              <IconButton
                color="third"
                sx={{
                  '&:hover': {
                    backgroundColor: 'inherit',
                    color: '#000',
                  },
                }}
                disableRipple
                component="label"
              >
                <input
                  hidden
                  accept="video/*,image/*"
                  multiple
                  type="file"
                  onChange={handlePostMedia}
                />
                <AddIcon
                  sx={{
                    fontSize: 35,
                  }}
                />
              </IconButton>
            </AddMoreMediaFiles>
          </PostOneMediaContainer>
        )
        : null)
  );
}

export default PostMedia;
