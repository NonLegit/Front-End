import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import AddRyle from './AddRyle';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<AddRyle />).toJSON();
  expect(tree).toMatchSnapshot();
});
