import renderer from 'react-test-renderer';
import EditBanFooter from './EditBanFooter';

test('test snapshot', async () => {
  const tree = renderer.create(<EditBanFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
