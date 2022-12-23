import renderer from 'react-test-renderer';
import Permissions from './Persmissions';

test('test snapshot', async () => {
  const tree = renderer.create(<Permissions />).toJSON();
  expect(tree).toMatchSnapshot();
});
