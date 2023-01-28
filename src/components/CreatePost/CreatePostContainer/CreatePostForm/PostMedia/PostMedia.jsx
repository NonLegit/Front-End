import { IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  AddMoreMediaFiles, PostEmptyMediaContainer, PostMediaOuterContainer, PostOneMediaContainer, UploadButton,
} from './styles';
import DraggableMedia from './DraggableMedia/DraggableMedia';
import PostMediaDetails from './PostMediaDetails/PostMediaDetails';
import PostVideo from './PostVideo/PostVideo';

/**
 * This component is post media
 *
 * @component PostMedia
 * @property {function} handlePostMedia -Handle the change in post media.
 * @property {function} setPostMedia -To set post media
 * @property {function} setActiveMediaFile -To set active media file
 * @property {Array<Media>} postMedia -Array of post media.
 * @property {Number} activeMediaFile -The id of the active media file.
 * @property {Number} availableType -The type of available suploads (images or vidoes).
 * @returns {React.Component} PostMedia
 */

function PostMedia(props) {
  // props
  const {
    handlePostMedia, postMedia, setPostMedia, activeMediaFile, setActiveMediaFile, availableType,
  } = props;
  const mediaCount = postMedia.length;

  // handlers
  const mediaSwap = (source, destination) => {
    setActiveMediaFile((activeMediaFile) => {
      if (activeMediaFile === source) {
        return destination;
      }
      if (activeMediaFile === destination) {
        return source;
      }
      return activeMediaFile;
    });

    setPostMedia((postMedia) => {
      const temp = [...postMedia];
      temp.splice(source, 1);
      temp.splice(destination, 0, postMedia[source]);
      return temp;
    });
  };

  const mediaDelete = (id) => {
    setPostMedia((postMedia) => {
      const temp = [...postMedia];
      temp.splice(id, 1);
      setActiveMediaFile((activeMediaFile) => {
        if (activeMediaFile === id) {
          return (activeMediaFile !== 0 ? activeMediaFile - 1 : 0);
        } if (activeMediaFile > id) {
          return activeMediaFile - 1;
        }
        return activeMediaFile;
      });
      return temp;
    });
  };

  const handleCaptionChange = (e) => {
    const temp = [...postMedia];
    temp[activeMediaFile].caption = e.target.value;
    setPostMedia(temp);
  };
  const handlePostLinkChange = (e) => {
    const temp = [...postMedia];
    temp[activeMediaFile].link = e.target.value;
    setPostMedia(temp);
  };
  console.log('the media type', availableType);
  console.log('my condition', !availableType ? 'video/*,image/*' : `${availableType}/*`);
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
        </PostEmptyMediaContainer>
      ) : (availableType === 'video' ? (
        <PostVideo
          src={postMedia[0].src}
          setPostMedia={setPostMedia}
        />
      )
        : (mediaCount >= 1
          ? (
            <PostMediaOuterContainer>
              <PostOneMediaContainer>
                <DndProvider backend={HTML5Backend}>
                  {postMedia.map((media, index) => (
                    <DraggableMedia
                      mediaSwap={mediaSwap}
                      mediaDelete={mediaDelete}
                      media={media}
                      key={media.src}
                      id={index}
                      activeMediaFile={activeMediaFile}
                      setActiveMediaFile={setActiveMediaFile}
                    />
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
                      accept="image/*"
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
              {mediaCount > 1
                ? (
                  <PostMediaDetails
                    mediaFile={postMedia[activeMediaFile]}
                    key={postMedia[activeMediaFile].src}
                    handleCaptionChange={handleCaptionChange}
                    handlePostLinkChange={handlePostLinkChange}
                  />
                )
                : null}
            </PostMediaOuterContainer>
          )
          : null)
      )
  );
}

export default PostMedia;
