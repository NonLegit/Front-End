import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Posts from '../Posts/Posts';

function Voted(props) {
  const { username, type } = props;
  const subReddit = 'hello_nour';
  const isContent = true;

  const emptyContent = (type === 'upvoted' ? `hmm... u/${username}
          hasn't upvoted recently` : `hmm... u/${username}
          hasn't downvoted recently`);
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <Posts subReddit={subReddit} upvoted={type === 'upvoted'} downvoted={type === 'downvoted'} />
          )}
    </WideBox>
  );
}

export default Voted;
