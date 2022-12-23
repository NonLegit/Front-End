import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CommunityType from './CommunityType';

// test snapshot
const myType = () => {};
test('test snapshot', async () => {
  const props = {
    type: 'public',
    myType,
  };
  const tree = renderer.create(<CommunityType {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
