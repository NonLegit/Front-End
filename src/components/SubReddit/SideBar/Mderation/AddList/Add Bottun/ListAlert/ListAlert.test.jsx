import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Alert from './Alert';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Alert />).toJSON();
  expect(tree).toMatchSnapshot();
});
