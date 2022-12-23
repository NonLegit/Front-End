import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import OtherProfileMainContent from '../../OtherProfileMainContent';
import OtherProfileFilterFull from './OtherProfileFilterFull';
import ListingContextProvider from '../../../../../../contexts/ListingContext';

test('test snapshot', async () => {
  const renderer = new ShallowRenderer();

  const tree = renderer.render(
    <Router>
      <ListingContextProvider>
        <OtherProfileMainContent>
          <OtherProfileFilterFull />
        </OtherProfileMainContent>
      </ListingContextProvider>
    </Router>,
  );
  expect(tree).toMatchSnapshot();
});
