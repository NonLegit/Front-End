// 63a47f3710ebdf1da11a5b96
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import PostContextProvider from '../../../../../../contexts/PostContext';
import EditComment from './EditComment';

// test snapshot
test('EditComment-test-snapshot', async () => {
  const tree = renderer.create(
    <PostContextProvider>
      <EditComment />
    </PostContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
