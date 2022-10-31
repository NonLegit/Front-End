import { useDrag, useDrop } from 'react-dnd';
import { Droppable, MediaFileContainer, MediaScreenShot } from './styles';

function DraggableMedia(props) {
  const { media, id, mediaSwap } = props;
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
  console.log(isOver && isDragging);
  return (
    <Droppable ref={drop} isOver={isOver} isDragging={isDragging}>
      <MediaFileContainer ref={drag}>
        <MediaScreenShot image={media} isOver={isOver} isDragging={isDragging} />
      </MediaFileContainer>
    </Droppable>
  );
}

export default DraggableMedia;
