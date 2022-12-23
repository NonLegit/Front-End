import ShallowRenderer from 'react-test-renderer/shallow';
import { ThemeProvider } from '@mui/system';
import { DndProvider } from 'react-dnd';
import PostMediaDetails from './PostMediaDetails';
import theme from '../../../../../../styles/theme';

describe(PostMediaDetails, () => {
  it('PostMediaDetails renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
      .render(
        <ThemeProvider theme={theme}>
          <DndProvider>
            <PostMediaDetails
              mediaFile={
        {
          src: 'src',
          caption: 'caption',
          link: 'link',
        }
      }
              handleCaptionChange={() => (null)}
              handlePostLinkChange={() => (null)}
            />
          </DndProvider>
        </ThemeProvider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
