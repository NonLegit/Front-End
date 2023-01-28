import renderer from 'react-test-renderer';
import NonEmptyModerator from './NonEmptyModerator';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(
    <NonEmptyModerator
      userName="fady"
      profilePicture="users/default.png"
      modDate="2022-12-20T00:53:55.071Z"
      all
      access
      config
      flair
      posts
      type={1}
    />,
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
