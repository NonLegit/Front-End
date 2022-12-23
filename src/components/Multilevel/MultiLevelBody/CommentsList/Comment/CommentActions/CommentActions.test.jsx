// 63a47f3710ebdf1da11a5b96
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import PostContextProvider from '../../../../../../contexts/PostContext';
import CommentActions from './CommentActions';

// test snapshot
test('CommentActions-test-snapshot', async () => {
  const tree = renderer.create(
    <PostContextProvider>
      <CommentActions />
    </PostContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
