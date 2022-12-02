import renderer from 'react-test-renderer';
import UserList from './UserList';

test('test snapshot', async () => {
  const tree = renderer.create(<UserList />).toJSON();
  expect(tree).toMatchSnapshot();
});
