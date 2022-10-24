import { Link } from 'react-router-dom';
import RedditButton from '../../RedditButton/RedditButton';
import CommunityList from '../CommunityList/CommunityList';
import {
  CategoriesBox,
  CommunitiesContainer, Layer, Title, ViewAllButtonBox,
} from './styles';

function Communities() {
  return (
    <CommunitiesContainer>
      <Title>
        <Layer>
          <Link to="/">
            communities near you
          </Link>
        </Layer>
      </Title>
      <CommunityList />
      <ViewAllButtonBox>
        <RedditButton variant="contained" padding="4px" fontSize={15} fontWeight="bold" sx={{ width: '100%' }}>
          view all
        </RedditButton>
      </ViewAllButtonBox>
      <CategoriesBox>
        <RedditButton
          fontSize={12}
          padding="2px 14px"
          fontWeight="bold"
          sx={{
            backgroundColor: '#f6f7f8',
          }}
        >
          top
        </RedditButton>
        <RedditButton
          fontSize={12}
          padding="2px 14px"
          fontWeight="bold"
          sx={{
            backgroundColor: '#f6f7f8',
          }}
        >
          news
        </RedditButton>
        <RedditButton
          fontSize={12}
          padding="2px 14px"
          fontWeight="bold"
          sx={{
            backgroundColor: '#f6f7f8',
          }}
        >
          aww
        </RedditButton>
        <RedditButton
          fontSize={12}
          padding="2px 14px"
          fontWeight="bold"
          sx={{
            backgroundColor: '#f6f7f8',
          }}
        >
          sports
        </RedditButton>
      </CategoriesBox>
    </CommunitiesContainer>
  );
}

export default Communities;
