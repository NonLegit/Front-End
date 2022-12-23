import renderer from 'react-test-renderer';
import NonEmptyModerator from './NonEmptyModerator';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<NonEmptyModerator />).toJSON();
  expect(tree).toMatchSnapshot();
});
