import renderer from 'react-test-renderer';
import ApproveUser from './ApproveUser';

test('test snapshot', async () => {
  const tree = renderer.create(<ApproveUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
