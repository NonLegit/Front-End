import renderer from 'react-test-renderer';
import BanReason from './BanReason';

test('test snapshot', async () => {
  const tree = renderer.create(<BanReason />).toJSON();
  expect(tree).toMatchSnapshot();
});
