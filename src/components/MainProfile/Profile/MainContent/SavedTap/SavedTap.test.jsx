import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainProfile from '../../../MainProfile';
import ListingContextProvider from '../../../../../contexts/ListingContext';
import SavedTap from './SavedTap';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <MainProfile>
          <SavedTap />
        </MainProfile>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
