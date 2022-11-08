import { WideBox } from '../styles';
import EmptyContent from '../EmptyContent/EmptyContent';
import Posts from '../Posts/Posts';

function Hidden(props) {
  const { type } = props;
  const subReddit = 'hello_nour';
  const isContent = true;

  const emptyContent = `hmm... looks like you
            haven't hidden any thing yet`;
  return (
    <WideBox>
      {!isContent && <EmptyContent emptyContent={emptyContent} />}
      {isContent
          && (
          <Posts subReddit={subReddit} hidden={type === 'hidden'} />
          )}
    </WideBox>

  );
}

export default Hidden;
