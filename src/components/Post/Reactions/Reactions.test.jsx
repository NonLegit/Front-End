import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/system';
import { screen, render, fireEvent } from '@testing-library/react';
import theme from '../../../styles/theme';
import Reactions from './Reactions';

describe(Reactions, () => {
  it('Reactions renders correctly', () => {
    const testCase = {
      flexDirection: 'row', votes: 100,
    };
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Reactions
            votes={testCase.votes}
            flexDirection={testCase.flexDirection}
          />
        </ThemeProvider>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Upvoting and downvoting work correctly', () => {
    const testCase = {
      flexDirection: 'row', votes: 100,
    };
    render(
      <ThemeProvider theme={theme}>
        <Reactions
          votes={testCase.votes}
          flexDirection={testCase.flexDirection}
        />
      </ThemeProvider>,
    );
    expect(screen.queryByTestId('upvote button')).toBeInTheDocument();
    expect(screen.queryByTestId('upvoted button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('downvote button')).toBeInTheDocument();
    expect(screen.queryByTestId('downvoted button')).not.toBeInTheDocument();

    fireEvent.click(screen.queryByTestId('upvote button'));

    expect(screen.queryByTestId('upvote button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('upvoted button')).toBeInTheDocument();
    expect(screen.queryByTestId('downvote button')).toBeInTheDocument();
    expect(screen.queryByTestId('downvoted button')).not.toBeInTheDocument();

    fireEvent.click(screen.queryByTestId('downvote button'));

    expect(screen.queryByTestId('upvote button')).toBeInTheDocument();
    expect(screen.queryByTestId('upvoted button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('downvote button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('downvoted button')).toBeInTheDocument();
  });
});
