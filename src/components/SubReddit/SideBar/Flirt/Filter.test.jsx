import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Flirt from './Flirt';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Flirt />).toJSON();
  expect(tree).toMatchSnapshot();
});
