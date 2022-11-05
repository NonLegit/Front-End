import { Divider } from '@mui/material';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import { CommentsBox } from './styles';

function Comments(props) {
  const {
    subReddit, username, publisher, title, time, points,
  } = props;
  return (
    <CommentsBox>
      <CommentsHeader
        subReddit={subReddit}
        publisher={publisher}
        username={username}
        title={title}
      />
      <Divider variant="middle" />
      <CommentsContent username={username} time={time} points={points} />
      {/* <Divider orientation="vertical" flexItem /> */}

    </CommentsBox>
  );
}

export default Comments;
