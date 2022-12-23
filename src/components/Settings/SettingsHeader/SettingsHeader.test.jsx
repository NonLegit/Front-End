import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import SettingsHeader from './SettingsHeader';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsHeader />
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
// render settings-privacy page
it('should render settings-header page', () => {
  window.history.pushState({}, '', '/settings');
  render(<SettingsHeader />, { wrapper: MemoryRouter });
  expect(screen.getByTestId('settings-header')).toBeInTheDocument();
});
