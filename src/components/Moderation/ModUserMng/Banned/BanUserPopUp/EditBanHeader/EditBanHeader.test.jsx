import renderer from 'react-test-renderer';
import EditBanHeader from './EditBanHeader';

test('test snapshot', async () => {
  const tree = renderer.create(<EditBanHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
