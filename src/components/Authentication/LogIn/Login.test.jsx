import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import LogIn from './LogIn';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<LogIn />).toJSON();
  expect(tree).toMatchSnapshot();
});
