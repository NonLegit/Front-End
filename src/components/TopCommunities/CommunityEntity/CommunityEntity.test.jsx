import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CommunityEntity from './CommunityEntity';

test('test snapshot', async () => {
  const tree = renderer.create(
    <CommunityEntity />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
