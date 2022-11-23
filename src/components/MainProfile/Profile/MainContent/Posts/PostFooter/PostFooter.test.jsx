import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PostFooter from './PostFooter';

test('test snapshot', async () => {
  const tree = renderer.create(<PostFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
