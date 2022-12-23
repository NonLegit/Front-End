import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchField from './Search';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('test snapshot', async () => {
  const tree = renderer.create(<Router><SearchField /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
