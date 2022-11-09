// import {
//   render, screen, fireEvent,
// } from '@testing-library/react';
// // import renderer from 'react-test-renderer';
// import '@testing-library/jest-dom';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import LogIn from './LogIn';
// import App from '../../../App';
// // import LogInPage from '../../../pages/LogInPage';

// // Render Login Page
// it('should render Login page', () => {
//   window.history.pushState({}, '', '/login');
//   render(<App />);
//   expect(screen.getByTestId('login-test')).toBeInTheDocument();
// });

// // Empty Field
// it('Not redirecting to HomePage Due to Empty Fields', () => {
//   window.history.pushState({}, '', '/login');
//   render(<App />);
//   fireEvent.click(screen.getByTestId('login-btn-test'));
//   // const { getByText } = within(screen.getByTestId('login-username-field-test'));
//   // Error Message Appears
//   expect(screen.getByText('Username must be between 3 and 20 characters')).toBeInTheDocument();
//   // The Hoempage isn't loaded
//   expect(screen.getByTestId('login-test')).toBeInTheDocument();
// });

// // // Valid UserNameSyntax and filled password field
// // it('Valid UserName Redirect to the homepage', () => {
// //   window.history.pushState({}, '', '/login');
// //   render(<App />);
// //   const contentInput = screen.getByTestId('login-username-field-test');
// //   fireEvent.change(contentInput, { target: { value: 'Basma_Elhoseny01' } });
// //   expect(contentInput.value).toBe('Basma_Elhoseny01');

// //   // fireEvent.change(contentInput, { target: { value: 'Basma_Elhoseny01' } });
// //   // expect(contentInput.value).toBe('Basma_Elhoseny01');

// //   // const { getByText } = within(screen.getByTestId('login-username-field-test'));
// //   // // Error Message Appears
// //   // expect(getByText('Username must be between 3 and 20 characters')).toBeInTheDocument();
// //   // // The Hoempage isn't loaded
// //   // expect(screen.getByTestId('login-test')).toBeInTheDocument();
// // });

// // test snapshot
// // test('test snapshot', async () => {
// //   const tree = renderer.create(<Router><LogIn /></Router>).toJSON();
// //   expect(tree).toMatchSnapshot();
// // });
