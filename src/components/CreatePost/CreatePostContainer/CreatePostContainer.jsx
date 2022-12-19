import { useMediaQuery, useTheme } from '@mui/material';
import getSubredditAllData from '../../SubReddit/SubrridetDataServer';
import UserInfo from '../../MainProfile/Profile/MainContent/Sidebar/UserInfo/UserInfo';
import { useCommunitiesInCreatePostContext } from '../../../contexts/CommunitiesInCreatePostContext';
import MainContent from '../../MainContent/MainContent';
import SideBar from '../../SideBar/SideBar';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import { MainContainer, OuterContainer } from './styles';
import { useCreatePostSidebarContext } from '../../../contexts/CreatePostSidebarContext';
import SubredditSideBar from '../../SubReddit/SideBar/SideBar';
import PostingToReddit from './PostingToReddit/PostingToReddit';
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
  const [data] = getSubredditAllData('Nonliget');
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={740}>
          {!communitiesError ? (communities && <CreatePostForm />) : 'error in communities fetching'}
        </MainContent>
        {match
        && (
          (communityToPostIn === null || ownerType === null) ? (
            <SideBar>
              {
              (communityToPostIn === null || ownerType === null) ? (
                <PostingToReddit />
              ) : (
                <UserInfo username="nour" />

              )
}
            </SideBar>
          ) : (
            <SubredditSideBar
              rules={data?.rules}
              members={data?.membersCount}
              Name={data?.fixedName}
              username="noue"
              topics={data?.topics}
              disc={data?.description}
              primaryTopic={data?.primaryTopic}
              createdAt={data?.createdAt}
              moderatoesName={data?.moderators}
            />
          )
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default CreatePostContainer;
