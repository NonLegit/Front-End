import { Divider } from '@mui/material';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import { CommentsBox } from './styles';

/**
 * Comment component in profile
 * @return {React.Component} - Comments
 * @param {object} comment - conatin all info needed to be shown in the comment
 */
function Comments(props) {
  const { comment } = props;
  return (
    <CommentsBox>
      <CommentsHeader
        subReddit={comment.creator} // from back
        publisher={comment.owner}
        title={comment.owner} // from back
      />
      <Divider variant="middle" />
      <CommentsContent
        time={comment.createdAt}
        points={comment.votes}
        body={comment.text}
      />
      {/* <Divider orientation="vertical" flexItem /> */}

    </CommentsBox>
  );
}

export default Comments;
