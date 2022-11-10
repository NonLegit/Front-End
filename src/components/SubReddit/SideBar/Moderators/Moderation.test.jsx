import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Moderators from './Moderators';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Moderators />).toJSON();
  expect(tree).toMatchSnapshot();
});
