import renderer from 'react-test-renderer';
import EmptyMuted from './EmptyMuted';

test('test snapshot', async () => {
  const tree = renderer.create(<EmptyMuted />).toJSON();
  expect(tree).toMatchSnapshot();
});
