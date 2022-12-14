import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import More from './More';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<More />).toJSON();
  expect(tree).toMatchSnapshot();
});
