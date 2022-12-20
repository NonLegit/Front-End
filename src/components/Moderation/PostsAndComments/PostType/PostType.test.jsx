import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PostType from './PostType';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<PostType />).toJSON();
  expect(tree).toMatchSnapshot();
});
