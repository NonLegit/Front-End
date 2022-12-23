import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from '../OtherProfileMainContent';
import OtherProfileContent from './OtherProfileContent';
import ListingContextProvider from '../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <OtherProfileMainContent>
          <OtherProfileContent />
        </OtherProfileMainContent>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
