import { ThemeProvider } from '@mui/system';
import layoutTheme from '../styles/theme/layout';
import CreatePostContainer from '../components/CreatePost/CreatePostContainer/CreatePostContainer';
import CommunitiesInCreatePostContextProvider from '../contexts/CommunitiesInCreatePostContext';

function CreatePost() {
  return (
    <ThemeProvider theme={layoutTheme}>
      <CommunitiesInCreatePostContextProvider>
        <CreatePostContainer />
      </CommunitiesInCreatePostContextProvider>
    </ThemeProvider>
  );
}

export default CreatePost;
