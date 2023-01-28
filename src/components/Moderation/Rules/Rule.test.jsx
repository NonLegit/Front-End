import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Rules from './Rules';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Rules />).toJSON();
  expect(tree).toMatchSnapshot();
});
