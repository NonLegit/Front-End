import '@testing-library/jest-dom';
// import renderer from 'react-test-renderer';
// import {
//   fireEvent,
//   render, screen,
// } from '@testing-library/react';
import renderer from 'react-test-renderer';
import PostFooter from './PostFooter';

// it('open posts tap', async () => {
//   // window.history.pushState({}, '', '/Login');
//   render(<PostFooter />);
//   const btn = screen.getByTestId('hidden');
//   fireEvent.click(btn);
//   const cancelHidden = screen.getByTestId('text-hide');
//   expect(cancelHidden.innerHTML).toEqual('Unhide');

// // expect(cancelHidden).toBeInTheDocument();
// //   expect(global.window.location.pathname).toContain('/submitted');
// });

test('test snapshot', async () => {
  const tree = renderer.create(<PostFooter />).toJSON();
  expect(tree).toMatchSnapshot();
});
