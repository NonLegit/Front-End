import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Post from './Post';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Post />).toJSON();
  expect(tree).toMatchSnapshot();
});
