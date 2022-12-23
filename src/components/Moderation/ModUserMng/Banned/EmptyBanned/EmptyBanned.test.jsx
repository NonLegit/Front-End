import renderer from 'react-test-renderer';
import EmptyBanned from './EmptyBanned';

test('test snapshot', async () => {
  const tree = renderer.create(<EmptyBanned />).toJSON();
  expect(tree).toMatchSnapshot();
});
