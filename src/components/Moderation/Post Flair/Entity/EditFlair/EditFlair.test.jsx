import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Edit from './Edit';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Edit />).toJSON();
  expect(tree).toMatchSnapshot();
});
