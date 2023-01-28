import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import EditPostContextProvider from '../../../../contexts/EditPostContext';
import ListingContextProvider from '../../../../contexts/ListingContext';
import NonEmptyQueue from './NonEmptyQueue';
import Queue from '../Queue';
import ModerationDrawer from '../../ModerationDrawer/ModerationDrawer';

test('NonEmptyQueue test snapshot', async () => {
  const ele = document.getElementsByClassName('css-14qooqa-MuiButtonBase-root-MuiListItemButton-root');
  ele.click();

  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <EditPostContextProvider>
          <ModerationDrawer />
          <Queue>
            <NonEmptyQueue />
          </Queue>
        </EditPostContextProvider>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
