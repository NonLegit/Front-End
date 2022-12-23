import renderer from 'react-test-renderer';
import NavButtons from './NavButtons';

test('test snapshot', async () => {
  const tree = renderer.create(<NavButtons />).toJSON();
  expect(tree).toMatchSnapshot();
});
