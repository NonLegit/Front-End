import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CreatePostContainer from './CreatePostContainer';
import CommunitiesInCreatePostContextProvider from '../../../contexts/CommunitiesInCreatePostContext';

describe(CreatePostContainer, () => {
  it('CreatePostContainer renders correctly', () => {
    const tree = renderer
      .create(
        <CommunitiesInCreatePostContextProvider>
          <CreatePostContainer />
        </CommunitiesInCreatePostContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
