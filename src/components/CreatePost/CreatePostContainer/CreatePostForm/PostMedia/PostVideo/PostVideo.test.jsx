import renderer from 'react-test-renderer';
import PostVideo from './PostVideo';

describe(PostVideo, () => {
  it('PostVideo renders correctly', () => {
    const tree = renderer
      .create(<PostVideo src="" setPostMedia={(arr) => arr} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
