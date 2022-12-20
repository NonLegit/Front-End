import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getSubredditAllData from '../../SubReddit/SubrridetDataServer';
import UserInfo from '../../MainProfile/Profile/MainContent/Sidebar/UserInfo/UserInfo';
import { useCommunitiesInCreatePostContext } from '../../../contexts/CommunitiesInCreatePostContext';
import MainContent from '../../MainContent/MainContent';
import SideBar from '../../SideBar/SideBar';
import CreatePostForm from './CreatePostForm/CreatePostForm';
import SharePostForm from './SharePostForm/SharePostForm';
import { MainContainer, OuterContainer } from './styles';
import { useCreatePostSidebarContext } from '../../../contexts/CreatePostSidebarContext';
import SubredditSideBar from '../../SubReddit/SideBar/SideBar';
import PostingToReddit from './PostingToReddit/PostingToReddit';
import CrosspostingToReddit from './CrosspostingToReddit/CrosspostingToReddit';
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

  // params
  const { source } = useParams();

  // contexts
  const { communities, communitiesError } = useCommunitiesInCreatePostContext();
  const {
    communityToPostIn, setCommunityToPostIn, ownerType, setOwnerType, communityName, setCommunityName,
  } = useCreatePostSidebarContext();

  console.log('oooowbbhdd', communityToPostIn, ownerType);
  // cookies
  const [cookies] = useCookies(['redditUser']);

  // variables
  const username = cookies.redditUser?.userName;
  console.log('el comm elly fel', communityName?.substring(2), 'Nonlegit');
  const [data] = getSubredditAllData(communityName?.substring(2));

  useEffect(() => () => {
    setCommunityToPostIn(null);
    setOwnerType(null);
    setCommunityName(null);
  }, []);
  console.log(source);
  console.log('data from hosny', data);
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={740}>
          {!communitiesError ? (communities && (source ? <SharePostForm postId={source} /> : <CreatePostForm />)) : 'error in communities fetching'}
        </MainContent>
        {match
        && (
          (communityToPostIn === null || ownerType !== 'Subreddit') ? (
            <SideBar>

              <>
                <Box
                  margin={8}
                />
                {
                    !(communityToPostIn === null || ownerType === null)
                    && (
                    <UserInfo
                      username={username}
                      createPost
                    />
                    )
                  }
                {!source
                  ? <PostingToReddit />
                  : <CrosspostingToReddit />}
              </>

            </SideBar>
          ) : (
            <SubredditSideBar
              rules={data?.rules}
              members={data?.membersCount}
              Name={data?.fixedName}
              username={username}
              topics={data?.topics}
              disc={data?.description}
              primaryTopic={data?.primaryTopic}
              createdAt={data?.createdAt}
              moderatoesName={data?.moderators}
              createPost
            />
          )
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default CreatePostContainer;
