import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import { CustomIconButton } from './styles';

/* eslint-disable jsx-a11y/media-has-caption */
function PostVideo(props) {
  const { src, setPostMedia } = props;
  const handleClick = () => {
    setPostMedia([]);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      border={1}
      borderRadius={1}
      borderColor="#edeff1"
    >
      <video
        controls
        style={{ width: '100%', maxHeight: '512px' }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <CustomIconButton
        color="third"
        onClick={handleClick}
      >
        <DeleteIcon />
      </CustomIconButton>
    </Box>
  );
}

export default PostVideo;
