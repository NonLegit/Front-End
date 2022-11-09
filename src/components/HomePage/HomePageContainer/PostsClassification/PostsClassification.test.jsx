import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostsClassification from './PostsClassification';

describe(PostsClassification, () => {
  it('PostsClassification renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <PostsClassification />
          ,
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
