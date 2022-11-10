import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import {
  fireEvent,
  render, screen,
} from '@testing-library/react';
import AddList from './AddList';

it('open input to add disc', async () => {
  // window.history.pushState({}, '', '/Login');
  render(<AddList />);
  const add = screen.getByTestId('add');
  fireEvent.click(add);
  const input = screen.getByTestId('input');
  expect(input).toBeInTheDocument();
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<AddList />).toJSON();
  expect(tree).toMatchSnapshot();
});
