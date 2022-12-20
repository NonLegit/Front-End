import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Comments from './Comments';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Comments />).toJSON();
  expect(tree).toMatchSnapshot();
});
