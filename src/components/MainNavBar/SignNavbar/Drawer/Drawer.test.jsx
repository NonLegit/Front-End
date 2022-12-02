import renderer from 'react-test-renderer';
import Drawer from './Drawer';

test('test snapshot', async () => {
  const tree = renderer.create(<Drawer />).toJSON();
  expect(tree).toMatchSnapshot();
});
