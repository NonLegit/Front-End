import { useEditPostContext } from '../contexts/EditPostContext';
import MultiLevel from '../components/Multilevel/MultiLevel';

function PostPage() {
  const { editPost } = useEditPostContext();
  return (
    <MultiLevel Edit={editPost} Comment />
  );
}

export default PostPage;
