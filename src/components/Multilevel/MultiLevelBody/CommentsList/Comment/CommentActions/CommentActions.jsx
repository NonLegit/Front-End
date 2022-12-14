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
      <Reactions flexDirection="row" votes={post?.votes} />
      <div>up</div>
      <div>up</div>
      <div>up</div>
      <div>up</div>
    </CommentActionsContainer>
  );
}

export default CommentActions;
