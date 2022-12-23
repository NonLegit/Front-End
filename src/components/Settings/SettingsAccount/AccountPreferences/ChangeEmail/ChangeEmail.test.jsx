import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ChangeEmail from './ChangeEmail';
import SettingsProvider from '../../../../../contexts/SettingsProvider';

const mockAlert = jest.fn();
jest.mock('react-alert', () => ({
  ...jest.requireActual('react-alert'),
  useAlert: () => mockAlert,
}));
// test snapshot
test('test snapshot', async () => {
  const setOpenEmail = (flag) => {
    console.log(flag);
  };
  const props = {
    setOpenEmail,
  };
  const tree = renderer.create(
    <Router>
      <SettingsProvider>
        <ChangeEmail {...props} />
      </SettingsProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
