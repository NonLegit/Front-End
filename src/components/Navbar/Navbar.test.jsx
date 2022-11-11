import renderer from 'react-test-renderer';
import Navbar from './Navbar';

test('test snapshot', async () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
