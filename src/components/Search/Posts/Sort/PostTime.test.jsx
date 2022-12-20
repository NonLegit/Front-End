import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Time from './Time';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Time />).toJSON();
  expect(tree).toMatchSnapshot();
});
