import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PostFlair from './PostFlair';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<PostFlair />).toJSON();
  expect(tree).toMatchSnapshot();
});
