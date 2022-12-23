import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import TopCommunities from '../TopCommunities';
import TopSidebar from './TopSidebar';
import ListingContextProvider from '../../../contexts/ListingContext';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <TopCommunities>
          <TopSidebar />
        </TopCommunities>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
