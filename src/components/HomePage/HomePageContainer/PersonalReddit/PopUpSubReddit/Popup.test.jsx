import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import App from '../../../../../App';
import Popup from './PopUp';

it('open form', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<Popup />);
  const btn = screen.getByTestId('btn');
  fireEvent.click(btn);
  const cancel = screen.getByTestId('cancel-Btn');
  expect(cancel).toBeInTheDocument();
});

it('subreddit empty', async () => {
  window.history.pushState({}, '', '/Login');
  render(<App />);
  const btn = screen.getByTestId('btn');
  fireEvent.click(btn);
  const input = screen.getByTestId('input');
  const warning = screen.getByTestId('warning');
  fireEvent.click(input);
  const cancel = screen.getByTestId('cancel-Btn');
  fireEvent.click(cancel);
  expect(warning.innerHTML).toEqual('A community name is required');
});
it('checkbox select from text', async () => {
  window.history.pushState({}, '', '/Login');
  render(<App />);
  const btn = screen.getByTestId('btn');
  fireEvent.click(btn);
  const input = screen.getByTestId('cont');
  const check = screen.getByTestId('my-Check-Box');
  fireEvent.click(input);
  expect(check.firstChild).toBeChecked();
});

it('close form', async () => {
  render(<Popup />);
  const btn = screen.getByTestId('btn');
  fireEvent.click(btn);

  const cancel = screen.getByTestId('cancel-Btn');
  fireEvent.click(cancel);
  expect(cancel).not.toBeVisible();
});
// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Popup />).toJSON();
  expect(tree).toMatchSnapshot();
});
