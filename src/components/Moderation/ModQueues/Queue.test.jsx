import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import ListingContextProvider from '../../../contexts/ListingContext';
import Queue from './Queue';

test('Queue test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <Queue />
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
