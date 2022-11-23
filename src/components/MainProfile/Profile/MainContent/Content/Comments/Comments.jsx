import { Divider } from '@mui/material';
import CommentsContent from './CommentsContent/CommentsContent';
import CommentsHeader from './CommentsHeader/CommentsHeader';
import { CommentsBox } from './styles';

/**
 * Content component represents an entity of a comment
 *
 * @component Comments
 * @property {object} comment - conatin all info needed to be shown in the comment
 * @returns {React.Component} Comments
 */
function Comments(props) {
  const { comment } = props;
  return (
    <CommentsBox>
      <CommentsHeader
        subReddit={comment?.ownerType}
        publisher={comment?.author}
        title={comment?.title}
      />
      <Divider variant="middle" />
      <CommentsContent
        time={comment?.createdAt}
        points={comment?.votes}
        body={comment?.text}
      />
      {/* <Divider orientation="vertical" flexItem /> */}

    </CommentsBox>
  );
}

export default Comments;
