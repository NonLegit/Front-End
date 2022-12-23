import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import OtherProfileMainContent from '../../OtherProfileMainContent';
import OtherProfileCommunities from './OtherProfileCommunities';
import ListingContextProvider from '../../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <OtherProfileMainContent>
          <OtherProfileCommunities />
        </OtherProfileMainContent>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
