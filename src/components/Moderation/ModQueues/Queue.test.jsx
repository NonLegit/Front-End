import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
// import {
//   fireEvent, render,
// } from '@testing-library/react';
import ListingContextProvider from '../../../contexts/ListingContext';
import Queue from './Queue';
import ModerationDrawer from '../ModerationDrawer/ModerationDrawer';

test('Queue test snapshot', async () => {
  window.history.pushState({}, '', '/r/dd/about/aa');
  // render(
  //   <Router>
  //     <ModerationDrawer />
  //   </Router>,
  // );

  // const ele = document.querySelector('h6');
  // fireEvent.click(ele);

  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <ModerationDrawer />
        <Queue />
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
