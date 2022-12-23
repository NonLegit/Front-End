import renderer from 'react-test-renderer';
import CreatePostContainer from './CreatePostContainer';
import CommunitiesInCreatePostContextProvider from '../../../contexts/CommunitiesInCreatePostContext';
import CreatePostSidebarContextProvider from '../../../contexts/CreatePostSidebarContext';

describe(CreatePostContainer, () => {
  it('CreatePostContainer renders correctly', () => {
    const tree = renderer
      .create(
        <CreatePostSidebarContextProvider>
          <CommunitiesInCreatePostContextProvider>
            <CreatePostContainer />
          </CommunitiesInCreatePostContextProvider>
        </CreatePostSidebarContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
