import renderer from 'react-test-renderer';
import MuteUser from './MuteUser';

test('test snapshot', async () => {
  const tree = renderer.create(<MuteUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
