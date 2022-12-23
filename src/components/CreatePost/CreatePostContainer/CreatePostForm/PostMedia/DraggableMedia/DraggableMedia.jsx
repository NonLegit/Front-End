import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {
  DeleteButton, Droppable, MediaFileContainer, MediaScreenShot,
} from './styles';
/**
 * This component is Draggable Media
 *
 * @component DraggableMedia
 * @property {function} handlePostMedia -Handle the change in post media.
 * @property {function} mediaSwap -To handle swapping between media.
 * @property {function} mediaDelete -To handle delete media.
 * @property {function} setActiveMediaFile -To set active media file.
 * @property {Media} media -The object of media.
 * @property {Number} activeMediaFile -The id of the active media file.
 * @property {Number} id -The id of Draggable Media.
 * @returns {React.Component} DraggableMedia
 */
function DraggableMedia(props) {
  const {
    media, id, mediaSwap, activeMediaFile, setActiveMediaFile, mediaDelete,
  } = props;

  const [isHover, setIsHover] = useState(false);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'media',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [id]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'media',
    drop: (item) => {
      if (item.id === id) return;
      mediaSwap(item.id, id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [id]);
  const handleClick = () => {
    setActiveMediaFile(id);
  };
  const handleHovering = (value) => {
    setIsHover(value);
  };
  const handleDeletion = (e) => {
    e.stopPropagation();
    mediaDelete(id);
  };
  return (
    <Droppable ref={drop} isOver={isOver}>
      <MediaFileContainer
        ref={drag}
        isDragging={isDragging}
        isActive={activeMediaFile === id}
        onClick={handleClick}
        isHover={isHover}
      >
        <MediaScreenShot
          image={media.src}
          onMouseEnter={() => handleHovering(true)}
          onMouseLeave={() => handleHovering(false)}
        >
          {(isHover ? (
            <DeleteButton onClick={handleDeletion}>
              <ClearRoundedIcon sx={{
                color: '#fff',
                fontSize: 20,
              }}
              />
            </DeleteButton>
          ) : null)}
        </MediaScreenShot>
      </MediaFileContainer>
    </Droppable>
  );
}

export default DraggableMedia;
