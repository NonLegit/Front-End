import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { PostsQueueBox } from './styles';
import OtherProfileCommentsContent from './OtherProfileCommentsContent/OtherProfileCommentsContent';
import OtherProfileCommentsHeader from './OtherProfileCommentsHeader/OtherProfileCommentsHeader';

function OtherProfileComments(props) {
  const { entity } = props;
  const { username } = useParams();

  return (
    <PostsQueueBox>
      <OtherProfileCommentsHeader
        post={entity}
      />
      <Divider variant="middle" />
      { entity?.comments?.map((comment, index) => (
        <>
          <OtherProfileCommentsContent
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

export default OtherProfileComments;
