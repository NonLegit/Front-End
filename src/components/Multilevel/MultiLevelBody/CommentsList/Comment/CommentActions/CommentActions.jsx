// Components
import Reactions from '../../../../../Post/Reactions/Reactions';

// Context
import { usePostContext } from '../../../../../../contexts/PostContext';

// styles
import { CommentActionsContainer } from './styles';

function CommentActions() {
  // Context
  const { post } = usePostContext();

  return (
    <CommentActionsContainer>
      {post && (
      <Reactions
        flexDirection="row"
        viewPost
        votes={post?.votes}
        postVoteStatus={post?.postVoteStatus}
        postId={post?._id}
      />
      )}
      <div>up</div>
      <div>up</div>
      <div>up</div>
      <div>up</div>
    </CommentActionsContainer>
  );
}

export default CommentActions;
