import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/system';
import { MemoryRouter as Router } from 'react-router-dom';
import PopularContainer from './PopularContainer';
import theme from '../../../styles/theme';
import ListingContextProvider from '../../../contexts/ListingContext';
import PostTypeContextProvider from '../../../contexts/PostTypeContext';
import HiddenPostsContextProvider from '../../../contexts/HiddenPostsContext';
import EditPostContextProvider from '../../../contexts/EditPostContext';
import CreatePostSidebarContextProvider from '../../../contexts/CreatePostSidebarContext';

describe(PopularContainer, () => {
  it('PopularContainer renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <CreatePostSidebarContextProvider>
            <ListingContextProvider>
              <PostTypeContextProvider>
                <HiddenPostsContextProvider>
                  <EditPostContextProvider>
                    <ThemeProvider theme={theme}>
                      <PopularContainer />
                    </ThemeProvider>
                  </EditPostContextProvider>
                </HiddenPostsContextProvider>
              </PostTypeContextProvider>
            </ListingContextProvider>
          </CreatePostSidebarContextProvider>
          ,
        </Router>,

      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
