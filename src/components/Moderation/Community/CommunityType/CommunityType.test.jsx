import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CommunityType from './CommunityType';

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<CommunityType />).toJSON();
  expect(tree).toMatchSnapshot();
});
