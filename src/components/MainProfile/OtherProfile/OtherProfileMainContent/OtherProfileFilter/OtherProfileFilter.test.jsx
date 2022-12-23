import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from '../OtherProfileMainContent';
import OtherProfileFilter from './OtherProfileFilter';
import ListingContextProvider from '../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <OtherProfileMainContent>
          <OtherProfileFilter />
        </OtherProfileMainContent>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
