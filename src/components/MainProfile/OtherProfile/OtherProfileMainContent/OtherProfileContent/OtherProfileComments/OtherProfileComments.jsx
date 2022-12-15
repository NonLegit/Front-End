import { Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
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
  const { comment, noheader } = props;
  const { username } = useParams();

  return (
    <CommentsBox>
      <OtherProfileCommentsHeader
        post={comment}
        noheader={noheader}
      />
      <Divider variant="middle" />
      { comment?.comments?.map((comment, index) => (
        <div key={`${index + 0}`}>
          <OtherProfileCommentsContent
            comment={comment}
            op={comment?.author?.name === username}
          />
          <Divider variant="middle" />
        </div>
      ))}

    </CommentsBox>
  );
}

export default OtherProfileComments;
