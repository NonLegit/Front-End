import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import RedditButton from '../../../RedditButton/RedditButton';

export const Title = styled('div')(() => ({
  backgroundImage: 'url("https://styles.redditmedia.com/t5_2ql2m/styles/bannerBackgroundImage_h0m8doj409o91.png")',
  height: 80,
  borderRadius: '8px 8px 0 0',
  backgroundPosition: 'center',
  '& a':
  {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}));

export const CommunitiesContainer = styled('div')(() => ({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '8px',
  marginTop: 16,
  border: '1px solid #ccc',
}));

export const Layer = styled('div')(() => ({
  background: 'linear-gradient(0deg,rgba(0,0,0,.7) 0,transparent)',
  width: '100%',
  height: '100%',
  paddingLeft: '8px',
  paddingBottom: '4px',
  display: 'flex',
  alignItems: 'flex-end',
  borderRadius: 'inherit',
}));

export const ViewAllButtonBox = styled(Box)(() => ({
  margin: '15px 15px 0 15px',
  display: 'flex',
  justifyContent: 'center',

}));

export const CategoriesBox = styled(Box)(() => ({
  display: 'flex',
  gap: 5,
  paddingLeft: 15,
  paddingTop: 15,
  paddingBottom: 15,
}));

export const CommunitiesTypeButton = styled(RedditButton)(() => ({
  fontSize: 12,
  padding: '2px 14px',
  fontWeight: 'bold',
  backgroundColor: '#f6f7f8',
}));

export const CustomLink = styled(Link)(() => ({
  textDecoration: 'none',
}));
