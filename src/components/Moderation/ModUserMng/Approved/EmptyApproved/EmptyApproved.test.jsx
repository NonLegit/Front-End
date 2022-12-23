import renderer from 'react-test-renderer';
import EmptyApproved from './EmptyApproved';

test('test snapshot', async () => {
  const tree = renderer.create(<EmptyApproved />).toJSON();
  expect(tree).toMatchSnapshot();
});
