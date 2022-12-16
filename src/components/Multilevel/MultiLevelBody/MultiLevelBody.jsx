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
  console.log(post);
  console.log('from multilevel', post?.postVoteStatus, post?._id);
  return (
    post
    && (
    <MultiLevelBodyConatiner>
      <PostContainer>
        {/* Reactions */}
        <Reactions
          viewPost
          flexDirection="column"
          votes={post?.votes}
          postVoteStatus={post?.postVoteStatus}
          postId={post?._id}
        />
        <MultiLevelPostContent Edit={Edit} />
      </PostContainer>
      <CommentsList />
    </MultiLevelBodyConatiner>
    )
  );
}

export default MultiLevelBody;