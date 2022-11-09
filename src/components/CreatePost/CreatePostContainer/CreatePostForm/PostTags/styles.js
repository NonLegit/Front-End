import { styled } from '@mui/system';
import RedditButton from '../../../../RedditButton/RedditButton';

export const OptionButton = styled(RedditButton)(() => ({
  padding: '3px 16px',
  fontSize: 14,
  fontWeight: 'bold',

}));

export const SpoilerButton = styled(RedditButton)(({ spoiler }) => ({
  padding: '3px 16px',
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
  padding: '3px 16px',
  fontSize: 14,
  fontWeight: 'bold',
  color: nswf ? '#fff' : '',
  backgroundColor: nswf ? '#ff585b' : '',
  '&:hover': {
    color: nswf ? '#fff' : '',
    backgroundColor: nswf ? '#ff585b' : '',
  },
}));
