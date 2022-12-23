// import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/system';
import ShallowRenderer from 'react-test-renderer/shallow';
import PostMedia from './PostMedia';
import theme from '../../../../../styles/theme';

const renderer = new ShallowRenderer();
describe(PostMedia, () => {
  const mockHandler = jest.fn();
  it('PostMedia renders correctly', () => {
    const tree = renderer.render(
      <ThemeProvider theme={theme}>
        <PostMedia
          handlePostMedia={mockHandler}
          postMedia={[]}
          setPostMedia={mockHandler}
          activeMediaFile={1}
          setActiveMediaFile={mockHandler}
          availableType="image"
        />
      </ThemeProvider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
