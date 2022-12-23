import renderer from 'react-test-renderer';
import MuteMessage from './MuteMessage';

test('test snapshot', async () => {
  const tree = renderer.create(<MuteMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});
