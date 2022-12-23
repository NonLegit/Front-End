import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import PostContextProvider from '../../../contexts/PostContext';
import MultiLevelHeader from './MultiLevelHeader';

// Use Navigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// test snapshot
test('MultiLevelHeader-test-snapshot', async () => {
  // Render Component Of Post Provider
  const tree = renderer.create(
    <PostContextProvider postID="123556">
      <MultiLevelHeader />
    </PostContextProvider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
