import renderer from 'react-test-renderer';
import BanUser from './BanUser';

test('test snapshot', async () => {
  const tree = renderer.create(<BanUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
