import { useMediaQuery, useTheme } from '@mui/material';
import RedditPremium from '../../HomePage/HomePageContainer/RedditPremium/RedditPremium';
import { useCommunitiesInCreatePostContext } from '../../../contexts/CommunitiesInCreatePostContext';
import MainContent from '../../MainContent/MainContent';
import SideBar from '../../SideBar/SideBar';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import { MainContainer, OuterContainer } from './styles';
import { useCreatePostSidebarContext } from '../../../contexts/CreatePostSidebarContext';
/**
 * This component works as a container for all create post page components
 * and a repository the data fetched in
 *
 * @component CreatePostContainer
 * @returns {React.Component} Container represents the create post page
 */

function CreatePostContainer() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const { communities, communitiesError } = useCommunitiesInCreatePostContext();
  const {
    communityToPostIn, ownerType,
  } = useCreatePostSidebarContext();
  console.log('oooowbbhdd', communityToPostIn, ownerType);
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={740}>
          {!communitiesError ? (communities && <CreatePostForm />) : 'error in communities fetching'}
        </MainContent>
        {match
        && (
        <SideBar>
          {
            (communityToPostIn === null || ownerType === null) ? (
              <RedditPremium />
            ) : <div>adham</div>
}
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default CreatePostContainer;
