import renderer from 'react-test-renderer';
import PostMedia from './PostMedia';

describe(PostMedia, () => {
  it('PostMedia renders correctly', () => {
    const tree = renderer
      .create(<PostMedia
        mediaFile={
        {
          src: 'src',
          caption: 'caption',
          link: 'link',
        }
      }
        handleCaptionChange={() => (null)}
        handlePostLinkChange={() => (null)}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
