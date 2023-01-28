import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { screen, render, fireEvent } from '@testing-library/react';
import PostReactions from './PostReactions';
import theme from '../../../styles/theme';
import EditPostContextProvider from '../../../contexts/EditPostContext';
import HiddenPostsContextProvider from '../../../contexts/HiddenPostsContext';

describe(PostReactions, () => {
  it('PostReactions renders correctly', () => {
    const testCase = {
      matchSm: true, comments: 100, matchMd: true, votes: 10,
    };
    const tree = renderer
      .create(
        <Router>
          <ThemeProvider theme={theme}>
            <HiddenPostsContextProvider>
              <EditPostContextProvider>
                <PostReactions
                  votes={testCase.votes}
                  matchSm={testCase.matchSm}
                  matchMd={testCase.matchMd}
                  comments={testCase.comments}
                />
              </EditPostContextProvider>
            </HiddenPostsContextProvider>

          </ThemeProvider>
        </Router>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Save button works correctly', () => {
    const testCase = {
      matchSm: true, comments: 100, matchMd: true, votes: 10,
    };
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <HiddenPostsContextProvider>
            <EditPostContextProvider>
              <PostReactions
                votes={testCase.votes}
                matchSm={testCase.matchSm}
                matchMd={testCase.matchMd}
                comments={testCase.comments}
              />
            </EditPostContextProvider>
          </HiddenPostsContextProvider>

        </ThemeProvider>
      </Router>,
    );
    expect(screen.queryByText('Save')).toBeInTheDocument();
    expect(screen.queryByText('Unsave')).not.toBeInTheDocument();
    const saveButton = screen.getByTestId('save button');
    fireEvent.click(saveButton);
    expect(screen.queryByText('Unsave')).toBeInTheDocument();
    expect(screen.queryByText('Save')).not.toBeInTheDocument();
  });
});
