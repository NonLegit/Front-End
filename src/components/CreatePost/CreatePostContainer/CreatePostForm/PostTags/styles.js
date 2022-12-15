import { Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import RedditButton from '../../../../RedditButton/RedditButton';

export const OptionButton = styled(RedditButton)(({ flair }) => ({
  padding: `${flair ? 0 : 2}px 16px`,
  fontSize: 14,
  fontWeight: 'bold',
  '&.Mui-disabled': {
    cursor: 'not-allowed',
  },
  color: flair?.textColor,
  backgroundColor: flair?.backgroundColor,
  '&:hover': {
    color: flair?.textColor,
    backgroundColor: flair?.backgroundColor,
  },
}));

export const SpoilerButton = styled(RedditButton)(({ spoiler }) => ({
  padding: '2px 16px',
  fontSize: 14,
  fontWeight: 'bold',
  color: spoiler ? '#fff' : '',
  backgroundColor: spoiler ? '#000' : '',
  '&:hover': {
    color: spoiler ? '#fff' : '',
    backgroundColor: spoiler ? '#000' : '',
  },
}));

export const NsfwButton = styled(RedditButton)(({ nswf }) => ({
  padding: '2px 16px',
  fontSize: 14,
  fontWeight: 'bold',
  color: nswf ? '#fff' : '',
  backgroundColor: nswf ? '#ff585b' : '',
  '&:hover': {
    color: nswf ? '#fff' : '',
    backgroundColor: nswf ? '#ff585b' : '',
  },
}));

export const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 0.9,
    marginBottom: '5px !important',
    padding: '5px 16px',
    borderRadius: 5,
  },
  '& .MuiTooltip-arrow': {
    color: '#000',
  },
}));
