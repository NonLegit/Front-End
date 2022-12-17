import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Input from './Input';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});
