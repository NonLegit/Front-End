import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ChangeCountry from './ChangeCountry';
import SettingsAccount from '../../SettingsAccount';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <SettingsAccount>
        <ChangeCountry />
      </SettingsAccount>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
