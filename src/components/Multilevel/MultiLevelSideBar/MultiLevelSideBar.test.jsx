import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import PostContextProvider from '../../../contexts/PostContext';
import MultiLevelSideBar from './MultiLevelSideBar';

// test snapshot
test('MultiLevelSideBar-test-snapshot', async () => {
  const tree = renderer.create(
    <PostContextProvider postID="123556">
      <MultiLevelSideBar />
    </PostContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
