import CreatePostContainer from '../components/CreatePost/CreatePostContainer/CreatePostContainer';
import CommunitiesInCreatePostContextProvider from '../contexts/CommunitiesInCreatePostContext';

function CreatePost() {
  return (
    <CommunitiesInCreatePostContextProvider>
      <CreatePostContainer />
    </CommunitiesInCreatePostContextProvider>
  );
}

export default CreatePost;
