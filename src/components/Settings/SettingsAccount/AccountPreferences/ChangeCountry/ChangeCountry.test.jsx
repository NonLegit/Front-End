import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import ChangeCountry from './ChangeCountry';
import SettingsAccount from '../../SettingsAccount';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
const renderer = new ShallowRenderer();
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.render(
    <Router>
      <SettingsAccount>
        <ChangeCountry />
      </SettingsAccount>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
