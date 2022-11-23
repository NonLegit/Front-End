import {
  screen, render, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import FirstParty from './FirstParty';

it('Short length username', () => {
  render(<FirstParty />);
  // Invalid username Format
  const field1 = screen.getByTestId('UserName-FirstParty-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'B' } });

  const field2 = screen.getByTestId('Password-FirstParty-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '1234569' } });

  const loginbtn = screen.getByTestId('login-btn-test');
  expect(loginbtn).toBeInTheDocument();
  fireEvent.click(loginbtn);

  expect(screen.getByText('Username must be between 3 and 20 characters')).toBeInTheDocument();
  // The Hoempage isn't loaded
  expect(screen.getByTestId('FirstParty-test')).toBeInTheDocument();
});

it('Empty Fields', () => {
  render(<FirstParty />);
  // Invalid username Format
  const loginbtn = screen.getByTestId('login-btn-test');
  expect(loginbtn).toBeInTheDocument();
  fireEvent.click(loginbtn);

  // The Hoempage isn't loaded
  expect(screen.getByTestId('FirstParty-test')).toBeInTheDocument();
});

it('Valid Username length', () => {
  render(<FirstParty />);
  // Invalid username Format
  const field1 = screen.getByTestId('UserName-FirstParty-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Basma_Elhoseny01' } });

  const field2 = screen.getByTestId('Password-FirstParty-test').querySelector('input');
  expect(field2).toBeInTheDocument();
  fireEvent.change(field2, { target: { value: '1234569' } });

  const loginbtn = screen.getByTestId('login-btn-test');
  expect(loginbtn).toBeInTheDocument();
  fireEvent.click(loginbtn);

  // The Hoempage is loaded
  expect(window.location.pathname).toEqual('/');
});

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<FirstParty />).toJSON();
  expect(tree).toMatchSnapshot();
});
