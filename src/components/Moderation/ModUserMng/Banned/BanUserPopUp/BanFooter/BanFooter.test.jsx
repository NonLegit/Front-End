import renderer from 'react-test-renderer';
import BanFooter from './BanFooter';

test('test snapshot', async () => {
  const tree = renderer.create(<BanFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
