import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import AddBtn from './AddBtn';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<AddBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
