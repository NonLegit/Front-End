import ShallowRenderer from 'react-test-renderer/shallow';
import { ThemeProvider } from '@mui/system';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import PostMediaDetails from './PostMediaDetails';
import theme from '../../../../../../styles/theme';

jest.mock('react-dnd', () => ({
  ...jest.requireActual('react-dnd'), // use actual for all non-hook parts
  useDrag: (p) => ([{ isDragging: p }, 'drag']),
  useDrop: (x) => ([{ isOver: x }, 'drop']),
}));
describe(PostMediaDetails, () => {
  it('PostMediaDetails renders correctly', () => {
    const renderer = new ShallowRenderer();
    const tree = renderer
      .render(
        <ThemeProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
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
