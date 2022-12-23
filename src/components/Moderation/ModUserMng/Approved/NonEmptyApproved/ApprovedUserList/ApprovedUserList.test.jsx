import renderer from 'react-test-renderer';
import ApprovedUserList from './ApprovedUserList';

test('test snapshot', async () => {
  const tree = renderer.create(<ApprovedUserList />).toJSON();
  expect(tree).toMatchSnapshot();
});
