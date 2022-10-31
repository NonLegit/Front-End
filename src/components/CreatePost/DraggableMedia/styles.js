import { styled } from '@mui/system';

export const MediaFileContainer = styled('div')(() => ({
  display: 'flex',
  border: '2px solid #898989',
  minWidth: 100,
  borderRadius: 5,
}));

export const MediaScreenShot = styled('div')(({ image, isDragging }) => ({
  margin: (isDragging ? 0 : 6),
  borderRadius: 5,
  backgroundImage: `url(${image})`,
  flexGrow: 1,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: (isDragging ? 1 : 0.5),
  cursor: 'grab',
}));

export const Droppable = styled('div')(({ isOver }) => ({
  paddingLeft: (isOver ? 10 : 0),
  borderLeft: (isOver ? '3px solid #898989' : 0),
  display: 'flex',
  transition: '0.25s',
}));
