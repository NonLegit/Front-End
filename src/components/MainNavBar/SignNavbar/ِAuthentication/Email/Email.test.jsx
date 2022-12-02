// import {
//   screen, render, fireEvent,
// } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Email from './Email';

// it('Invlaid Email', () => {
//   render(<Email />);
//   // Invalid Email Format
//   const field1 = screen.getByTestId('SignUpEmail-test').querySelector('input');
//   expect(field1).toBeInTheDocument();
//   fireEvent.change(field1, { target: { value: 'Bamsa_Elhoseny' } });

//   const emailbtn = screen.getByTestId('email-btn-test');
//   expect(emailbtn).toBeInTheDocument();
//   fireEvent.click(emailbtn);

//   // The Email isn't Valid
//   expect(screen.getByText('Please fix your email to continue')).toBeInTheDocument();
//   expect(screen.getByTestId('SignUpEmail-test')).toBeInTheDocument();
// });

// it('Valid Email', () => {
//   render(<Email />);
//   // Invalid Email Format
//   const field1 = screen.getByTestId('SignUpEmail-test').querySelector('input');
//   expect(field1).toBeInTheDocument();
//   fireEvent.change(field1, { target: { value: 'basmaelhoseny6@gmail.com' } });

//   const emailbtn = screen.getByTestId('email-btn-test');
//   expect(emailbtn).toBeInTheDocument();
//   fireEvent.click(emailbtn);

//   // The Email is Valid
//   expect(screen.getByTestId('SignUpEmail-test')).not.toBeInTheDocument();
// });

// test snapshot
test('test snapshot', async () => {
  const tree = renderer.create(<Email />).toJSON();
  expect(tree).toMatchSnapshot();
});
