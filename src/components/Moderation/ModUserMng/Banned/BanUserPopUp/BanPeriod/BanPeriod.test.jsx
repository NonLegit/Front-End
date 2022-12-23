import renderer from 'react-test-renderer';
import BanPeriod from './BanPeriod';

test('test snapshot', async () => {
  const tree = renderer.create(<BanPeriod />).toJSON();
  expect(tree).toMatchSnapshot();
});
