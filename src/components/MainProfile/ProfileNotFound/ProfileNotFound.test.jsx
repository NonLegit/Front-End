import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ProfileNotFound from './ProfileNotFound';

test('test snapshot', async () => {
  const tree = renderer.create(
    <ProfileNotFound />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
