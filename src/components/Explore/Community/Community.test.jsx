import renderer from 'react-test-renderer';
import Community from './Community';

test('test snapshot', async () => {
  const tree = renderer.create(<Community />).toJSON();
  expect(tree).toMatchSnapshot();
});
