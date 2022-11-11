import renderer from 'react-test-renderer';
import LogoIcon from './LogoIcon';

test('test snapshot', async () => {
  const tree = renderer.create(<LogoIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
