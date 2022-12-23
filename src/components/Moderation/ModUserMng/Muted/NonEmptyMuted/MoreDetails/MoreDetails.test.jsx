import renderer from 'react-test-renderer';
import MoreDetails from './MoreDetails';

test('test snapshot', async () => {
  const tree = renderer.create(<MoreDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
