import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostHeader from './PostHeader';

describe(PostHeader, () => {
  it('PostHeader renders correctly', () => {
    const testCase = {
      title: 'title', image: 'image', owner: 'owner', creator: 'creator', flair: 'flair', flairBackgroundColor: 'flairBackgroundColor', flairColor: 'flairColor',
    };
    const tree = renderer
      .create(
        <Router>
          <PostHeader
            title={testCase.title}
            image={testCase.image}
            owner={testCase.owner}
            creator={testCase.creator}
            flair={testCase.flairText}
            flairBackgroundColor={testCase.flairBackgroundColor}
            flairColor={testCase.flairColor}
          />
        </Router>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
