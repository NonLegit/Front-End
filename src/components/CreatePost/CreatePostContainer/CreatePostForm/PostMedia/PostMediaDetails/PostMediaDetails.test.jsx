import renderer from 'react-test-renderer';
import PostMediaDetails from './PostMediaDetails';

describe(PostMediaDetails, () => {
  it('PostMediaDetails renders correctly', () => {
    const tree = renderer
      .create(<PostMediaDetails
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
