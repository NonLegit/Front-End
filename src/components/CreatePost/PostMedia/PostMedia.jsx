import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  AddMoreMediaFiles, PostEmptyMediaContainer, PostOneMediaContainer, UploadButton,
} from './styles';
import DraggableMedia from '../DraggableMedia/DraggableMedia';

function PostMedia(props) {
  const { handlePostMedia, postMedia, setPostMedia } = props;
  const mediaCount = postMedia.length;
  const mediaSwap = (source, destination) => {
    setPostMedia((postMedia) => {
      const temp = [...postMedia];
      if (Math.abs(source - destination) === 1) {
        console.log(source, destination);
        console.log('post', postMedia);
        temp[source] = postMedia[destination];
        temp[destination] = postMedia[source];
        console.log(temp);
      } else {
        temp.splice(destination, 0, postMedia[source]);
        // console.log(destination);
        temp.splice((source > destination ? source + 1 : source), 1);
        // console.log((source > destination ? source + 1 : source));
      }
      return temp;
    });
  };
  // console.log(mediaCount);
  // console.log(postMedia);
  // console.log(postMedia);
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
            <DndProvider backend={HTML5Backend}>
              {postMedia.map((media, index) => (
                <DraggableMedia mediaSwap={mediaSwap} media={media} key={media} id={index} />
              ))}
            </DndProvider>
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
