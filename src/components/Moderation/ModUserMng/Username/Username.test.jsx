import renderer from 'react-test-renderer';
import Username from './Username';

test('test snapshot', async () => {
  const tree = renderer.create(<Username />).toJSON();
  expect(tree).toMatchSnapshot();
});
