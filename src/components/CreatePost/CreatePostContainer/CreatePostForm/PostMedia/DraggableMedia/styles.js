import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

export const MediaFileContainer = styled('div')(({ isDragging, isActive, isHover }) => ({
  display: 'flex',
  border: (isActive ? '2px solid #898989' : 'medium none color'),
  borderRadius: 5,
  padding: (isActive ? 6 : 0),
  height: 100,
  width: 100,
  opacity: (isDragging || isActive || isHover ? 1 : 0.5),
  cursor: 'grab',
}));

export const MediaScreenShot = styled('div')(({ image }) => ({
  borderRadius: 5,
  backgroundImage: `url(${image})`,
  flexGrow: 1,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
}));

export const Droppable = styled('div')(({ isOver }) => ({
  paddingLeft: (isOver ? 10 : 0),
  borderLeft: (isOver ? '3px solid #898989' : 0),
  display: 'flex',
  transition: '0.25s',
}));

export const DeleteButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 4,
  top: 4,
  backgroundColor: '#000',
  '&:hover': {
    backgroundColor: '#000',
  },
  width: 22,
  height: 22,
}));
