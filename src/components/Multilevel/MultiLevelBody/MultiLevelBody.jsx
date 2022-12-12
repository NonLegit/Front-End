// Components
import Reactions from '../../Post/Reactions/Reactions';
import CommentsList from './CommentsList/CommentsList';
import MultiLevelPostContent from './MultiLevelPostContent/MultiLevelPostContent';

// Context
import { usePostContext } from '../../../contexts/PostContext';

// Styles
import { MultiLevelBodyConatiner, PostContainer } from './styles';

function MultiLevelBody({ Edit }) {
  // Context
  const { post } = usePostContext();
  return (
    <MultiLevelBodyConatiner>
      <PostContainer>
        {/* Reactions */}
        <Reactions whitebg flexDirection="column" votes={post?.votes} />
        <MultiLevelPostContent Edit={Edit} />
      </PostContainer>
      <CommentsList />
    </MultiLevelBodyConatiner>
  );
}

export default MultiLevelBody;
