import renderer from 'react-test-renderer';
import BannedUserList from './BannedUserList';

test('test snapshot', async () => {
  const tree = renderer.create(<BannedUserList />).toJSON();
  expect(tree).toMatchSnapshot();
});
