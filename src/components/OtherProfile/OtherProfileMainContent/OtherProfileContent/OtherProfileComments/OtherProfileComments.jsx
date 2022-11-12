import { Divider } from '@mui/material';
import OtherProfileCommentsContent from './OtherProfileCommentsContent/OtherProfileCommentsContent';
import OtherProfileCommentsHeader from './OtherProfileCommentsHeader/OtherProfileCommentsHeader';
import { CommentsBox } from './styles';

/**
 * Content component represents an entity of a comment
 *
 * @component Comments
 * @property {object} comment - conatin all info needed to be shown in the comment
 * @returns {React.Component} Comments
 */
function OtherProfileComments(props) {
  const { comment } = props;
  return (
    <CommentsBox>
      <OtherProfileCommentsHeader
        subReddit={comment?.ownerType}
        publisher={comment?.author}
        title={comment?.title}
      />
      <Divider variant="middle" />
      <OtherProfileCommentsContent
        time={comment?.createdAt}
        points={comment?.votes}
        body={comment?.text}
      />
      {/* <Divider orientation="vertical" flexItem /> */}

    </CommentsBox>
  );
}

export default OtherProfileComments;