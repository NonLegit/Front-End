import { useMediaQuery, useTheme } from '@mui/material';
import { useCommunitiesInCreatePostContext } from '../../../contexts/CommunitiesInCreatePostContext';
import MainContent from '../../MainContent/MainContent';
import SideBar from '../../SideBar/SideBar';
import CreatePostForm from '../CreatePostForm/CreatePostForm';
import { MainContainer, OuterContainer } from './styles';

function CreatePostContainer() {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const { communities, communitiesError } = useCommunitiesInCreatePostContext();
  return (
    <OuterContainer>
      <MainContainer>
        <MainContent width={740}>
          {!communitiesError ? (communities && <CreatePostForm />) : 'error in communities fetching'}
        </MainContent>
        {match
        && (
        <SideBar>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed modi officiis ratione, sapiente maxime nihil, labore recusandae totam quisquam ipsa dolorum omnis rem soluta aperiam vero eum? Itaque, ipsum deleniti.
        </SideBar>
        )}
      </MainContainer>
    </OuterContainer>
  );
}

export default CreatePostContainer;
