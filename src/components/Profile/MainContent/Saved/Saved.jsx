import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Posts from '../Posts/Posts';

function Saved(props) {
  const { type } = props;
  const subReddit = 'hello_nour';
  const isContent = true;

  const emptyContent = `hmm... looks like you
          haven't saved any thing yet`;
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <Posts subReddit={subReddit} saved={type === 'saved'} />
          )}
    </WideBox>
  );
}

export default Saved;
