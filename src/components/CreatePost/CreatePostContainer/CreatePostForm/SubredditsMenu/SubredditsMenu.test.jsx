import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/system';
import SubredditsMenu from './SubredditsMenu';
import theme from '../../../../../styles/theme';
import CommunitiesInCreatePostContextProvider from '../../../../../contexts/CommunitiesInCreatePostContext';

describe(SubredditsMenu, () => {
  it('SubredditsMenu renders correctly', async () => {
    const testCase = {
      setCommunityToPostIn: () => ({}), setOwnerType: () => ({}),
    };
    const tree = renderer
      .create(
        <CommunitiesInCreatePostContextProvider>
          <ThemeProvider theme={theme}>
            <SubredditsMenu
              setCommunityToPostIn={testCase.setCommunityToPostIn}
              setOwnerType={testCase.setOwnerType}
            />
          </ThemeProvider>
        </CommunitiesInCreatePostContextProvider>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
