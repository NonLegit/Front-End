import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import PostClassification from './PostClassification';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<PostClassification />).toJSON();
  expect(tree).toMatchSnapshot();
});
