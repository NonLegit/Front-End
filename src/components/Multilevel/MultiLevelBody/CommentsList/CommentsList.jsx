import { useParams } from 'react-router-dom';

// Components
import Comment from './Comment/Comment';

// Context
import { usePostContext } from '../../../../contexts/PostContext';

// Server
import { getComments } from './commentsListServer';

// Styles
import { MultilevelPostCommentsConatiner } from './styles';
import NoComments from './NoComments/NoComments';

function CommentsList() {
  const { postID } = useParams();
  // Context
  const { post } = usePostContext();
  const [comments] = getComments({ postID, depth: 9, limit: 20 });// 9=depth
  const commentsCount = (post?.commentCount <= 0);

  return (
    commentsCount ? <NoComments />
      : (
        <MultilevelPostCommentsConatiner>
          {comments?.map((comment, i) => <Comment key={comment?._id} comment={comment} src="https://styles.redditmedia.com/t5_74w4tr/styles/profileIcon_9or0sb8dtc5a1.jpeg?width=256&height=256&crop=256:256,smart&s=2a8b7dc794b00e51a6b9f423da2204a999136ecb" depth={0} level={i} />)}
        </MultilevelPostCommentsConatiner>
      )
  );
}

export default CommentsList;
