import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import RadioBtn from './RadioBtn';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<RadioBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
