import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from '../Profile/MainContent/Content/Content';
import ListingContextProvider from '../../../contexts/ListingContext';
import Comments from './Comments';

it('comments test snapshot', async () => {
  const tree = renderer.create(
    <Router>
      <ListingContextProvider>
        <Content>
          <Comments />
        </Content>
      </ListingContextProvider>
    </Router>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
