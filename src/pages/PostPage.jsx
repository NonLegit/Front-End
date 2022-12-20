import { useEditPostContext } from '../contexts/EditPostContext';
import MultiLevel from '../components/Multilevel/MultiLevel';

function PostPage() {
  const { editPost, commentPost } = useEditPostContext();
  return (
    <MultiLevel Edit={editPost} Comment={commentPost} />
  );
}

export default PostPage;
