import renderer from 'react-test-renderer';
import Footer from './Footer';

test('test snapshot', async () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
