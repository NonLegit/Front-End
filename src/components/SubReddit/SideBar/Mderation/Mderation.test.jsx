import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import Moderation from './Moderation';

it('open input to add disc', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<Moderation />);
  const select = screen.getByTestId('select');
  fireEvent.click(select);
  const list = screen.getByTestId('list');
  expect(list).toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Moderation />).toJSON();
  expect(tree).toMatchSnapshot();
});
