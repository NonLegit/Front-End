import renderer from 'react-test-renderer';
import MainNavBar from './MainNavBar';

test('test snapshot', async () => {
  const tree = renderer.create(<MainNavBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
