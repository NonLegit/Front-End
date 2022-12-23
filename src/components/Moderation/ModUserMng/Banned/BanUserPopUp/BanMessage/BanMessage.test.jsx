import renderer from 'react-test-renderer';
import BanMessage from './BanMessage';

test('test snapshot', async () => {
  const tree = renderer.create(<BanMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});
