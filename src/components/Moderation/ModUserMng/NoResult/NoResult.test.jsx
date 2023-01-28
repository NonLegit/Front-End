import renderer from 'react-test-renderer';
import NoResult from './NoResult';

test('test snapshot', async () => {
  const tree = renderer.create(<NoResult />).toJSON();
  expect(tree).toMatchSnapshot();
});
