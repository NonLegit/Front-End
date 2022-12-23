import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import SettingsProvider from '../../../../contexts/SettingsProvider';
import DeleteAccountButton from './DeleteAccountButton';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsProvider>
        <DeleteAccountButton />
      </SettingsProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
