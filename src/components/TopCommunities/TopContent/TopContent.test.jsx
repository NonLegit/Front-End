import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ListingContextProvider from '../../../contexts/ListingContext';
import TopContent from './TopContent';
import TopCommunities from '../TopCommunities';

test('test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <TopCommunities>
          <TopContent />
        </TopCommunities>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
