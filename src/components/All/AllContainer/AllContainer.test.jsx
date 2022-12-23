import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/system';
import { MemoryRouter as Router } from 'react-router-dom';
import AllContainer from './AllContainer';
import ListingContextProvider from '../../../contexts/ListingContext';
import theme from '../../../styles/theme';
import PostTypeContextProvider from '../../../contexts/PostTypeContext';
import HiddenPostsContextProvider from '../../../contexts/HiddenPostsContext';
import EditPostContextProvider from '../../../contexts/EditPostContext';
import CreatePostSidebarContextProvider from '../../../contexts/CreatePostSidebarContext';

describe(AllContainer, () => {
  it('AllContainer renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <CreatePostSidebarContextProvider>
            <ListingContextProvider>
              <PostTypeContextProvider>
                <HiddenPostsContextProvider>
                  <EditPostContextProvider>
                    <ThemeProvider theme={theme}>
                      <AllContainer />
                    </ThemeProvider>
                  </EditPostContextProvider>
                </HiddenPostsContextProvider>
              </PostTypeContextProvider>
            </ListingContextProvider>
          </CreatePostSidebarContextProvider>

        </Router>,

      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
