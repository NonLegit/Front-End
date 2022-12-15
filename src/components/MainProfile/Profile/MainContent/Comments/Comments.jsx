import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { PostsQueueBox } from './styles';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';

function Comments(props) {
  const { entity } = props;
  const { username } = useParams();

  return (
    <PostsQueueBox>
      <CommentsHeader
        post={entity}
      />
      <Divider variant="middle" />
      { entity?.comments?.map((comment, index) => (
        <>
          <CommentsContent
            key={`${index + 0}`}
            comment={comment}
            op={entity?.author?.name === username}
          />
          <Divider variant="middle" />
        </>
      ))}

    </PostsQueueBox>

  );
}

export default Comments;
