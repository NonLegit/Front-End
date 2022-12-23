import renderer from 'react-test-renderer';
import SearchField from './Search';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<SearchField />).toJSON();
  expect(tree).toMatchSnapshot();
});
