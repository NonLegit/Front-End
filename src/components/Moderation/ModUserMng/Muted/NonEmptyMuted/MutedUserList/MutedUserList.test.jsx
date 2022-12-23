import renderer from 'react-test-renderer';
import MutedUserList from './MutedUserList';

test('test snapshot', async () => {
  const tree = renderer.create(<MutedUserList />).toJSON();
  expect(tree).toMatchSnapshot();
});
