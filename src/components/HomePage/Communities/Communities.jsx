import { Link } from 'react-router-dom';
import RedditButton from '../../RedditButton/RedditButton';
import CommunityList from './CommunityList/CommunityList';
import {
  CategoriesBox,
  CommunitiesContainer, CommunitiesTypeButton, Layer, Title, ViewAllButtonBox, CustomLink,
} from './styles';
/**
 * This component is upper section of home page sidebar
 *
 * @component Communities
 * @property {object} communities -Object contains the title of the communities and list of them
 * @returns {React.Component} Communities
 */

function Communities(props) {
  // props
  const { communities } = props;
  const { communitiesTitle, communitiesList } = communities;

  return (
    <CommunitiesContainer data-testid="Communities">
      <Title>
        <Layer>
          <Link
            to="/subreddits/leaderboard/"
            data-testid="communities title"
          >
            {communitiesTitle}
          </Link>
        </Layer>
      </Title>
      <CommunityList communitiesList={communitiesList} />
      <ViewAllButtonBox>
        <CustomLink
          to="/subreddits/leaderboard/aww/"
          style={{ width: '100%' }}
        >
          <RedditButton
            variant="contained"
            padding="4px"
            fontSize={15}
            fontWeight="bold"
            sx={{ width: '100%' }}
          >
            view all
          </RedditButton>
        </CustomLink>
      </ViewAllButtonBox>
      <CategoriesBox>
        <CustomLink to="/subreddits/leaderboard/">
          <CommunitiesTypeButton>
            top
          </CommunitiesTypeButton>
        </CustomLink>
        <CustomLink to="/subreddits/leaderboard/news/">
          <CommunitiesTypeButton>
            news
          </CommunitiesTypeButton>
        </CustomLink>
        <CustomLink to="/subreddits/leaderboard/aww/">
          <CommunitiesTypeButton>
            aww
          </CommunitiesTypeButton>
        </CustomLink>
        <CustomLink to="/subreddits/leaderboard/sports/">
          <CommunitiesTypeButton>
            sports
          </CommunitiesTypeButton>
        </CustomLink>
      </CategoriesBox>
    </CommunitiesContainer>
  );
}

export default Communities;
