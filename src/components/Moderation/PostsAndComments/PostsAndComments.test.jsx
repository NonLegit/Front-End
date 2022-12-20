import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PostsAndComments from './PostsAndComments';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<PostsAndComments />).toJSON();
  expect(tree).toMatchSnapshot();
});
