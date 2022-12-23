import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CommentReactions from './CommentReactions';

// test snapshot
test('CommentReactions-test-snapshot', async () => {
  const tree = renderer.create(<CommentReactions votes={10} commentVoteStatus={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
