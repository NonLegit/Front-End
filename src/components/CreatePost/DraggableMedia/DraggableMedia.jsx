import { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {
  DeleteButton, Droppable, MediaFileContainer, MediaScreenShot,
} from './styles';

function DraggableMedia(props) {
  const {
    media, id, mediaSwap, activeMediaFile, setActiveMediaFile, mediaDelete,
  } = props;

  const [isHover, setIsHover] = useState(false);
  // console.log(media[30], id);
  // console.log('in', media[30], id);
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
      // console.log(item.id, id);
      if (item.id === id) return;
      mediaSwap(item.id, id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }), [id]);
  // console.log(isOver && isDragging);
  const handleClick = () => {
    setActiveMediaFile(id);
  };
  const handleHovering = (value) => {
    setIsHover(value);
    // console.log('hi', value);
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
