import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
