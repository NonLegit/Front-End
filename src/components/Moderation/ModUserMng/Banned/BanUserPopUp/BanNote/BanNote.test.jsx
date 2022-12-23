import renderer from 'react-test-renderer';
import BanNote from './BanNote';

test('test snapshot', async () => {
  const tree = renderer.create(<BanNote note="spam" />).toJSON();
  expect(tree).toMatchSnapshot();
});
