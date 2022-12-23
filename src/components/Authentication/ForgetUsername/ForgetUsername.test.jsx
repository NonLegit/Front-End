import {
  screen, render, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import ForgetUsername from './ForgetUsername';
// import App from '../../../App';

// render forget username page
it('should render Forget username page', () => {
  window.history.pushState({}, '', '/username');
  render(<ForgetUsername />);
  expect(screen.queryByTestId('forgetusername-test')).toBeInTheDocument();
});

// Empty Email Field
it('Empty Email Field Keeps view on ForgetUsername Page', () => {
  window.history.pushState({}, '', '/username');
  render(<ForgetUsername />);
  expect(screen.queryByTestId('forgetusername-test')).toBeInTheDocument();

  const emailbtn = screen.getByTestId('email-btn-test');
  fireEvent.click(emailbtn);
  setTimeout(() => {
    expect(screen.queryByTestId('forgetusername-test')).toBeInTheDocument();
    expect(screen.queryByTestId('forgetusername-redirect-caption-test')).toBeNull();
  }, 5000);
});

it('Invlaid Email', () => {
  window.history.pushState({}, '', '/username');
  render(<ForgetUsername />);
  const field1 = screen.getByTestId('SignUpEmail-test').querySelector('input');
  expect(field1).toBeInTheDocument();
  fireEvent.change(field1, { target: { value: 'Bamsa_Elhoseny' } });

  const emailbtn = screen.getByTestId('email-btn-test');
  expect(emailbtn).toBeInTheDocument();
  fireEvent.click(emailbtn);

  // The Email isn't Valid
  expect(screen.queryByText('Please fix your email to continue')).toBeInTheDocument();
});

// test snapshot
test('ForgetUsername-test-snapshot', async () => {
  const tree = renderer.create(<ForgetUsername />).toJSON();
  expect(tree).toMatchSnapshot();
});
