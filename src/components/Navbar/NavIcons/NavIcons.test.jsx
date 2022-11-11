import renderer from 'react-test-renderer';
import NavIcons from './NavIcons';

test('test snapshot', async () => {
  const tree = renderer.create(<NavIcons />).toJSON();
  expect(tree).toMatchSnapshot();
});
