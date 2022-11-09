/* eslint-disable import/no-cycle */
import { Divider } from '@mui/material';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import { CommentsBox } from './styles';

function Comments(props) {
  const {
    comment,
  } = props;

  return (
    <CommentsBox>
      <CommentsHeader
        subReddit={comment.subReddit}
        publisher={comment.publisher}
        title={comment.title}
      />
      <Divider variant="middle" />
      <CommentsContent time={comment.time} points={comment.points} body={comment.body} />
      {/* <Divider orientation="vertical" flexItem /> */}

    </CommentsBox>
  );
}

export default Comments;
