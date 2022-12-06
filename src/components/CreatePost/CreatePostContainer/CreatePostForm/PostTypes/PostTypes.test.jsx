import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/system';
import PostTypes from './PostTypes';
import theme from '../../../../../styles/theme';

describe(PostTypes, () => {
  const handlePostType = jest.fn((param) => param);

  afterEach(() => {
    handlePostType.mockReset();
  });

  it('PostTypes renders correctly', async () => {
    const testCase = {
      postType: 0, handlePostType,
    };
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <PostTypes
            postType={testCase.postType}
            handlePostType={testCase.handlePostType}
          />
        </ThemeProvider>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('postType works correctly', () => {
    const testCase = {
      postType: 0, handlePostType,
    };
    render(
      <ThemeProvider theme={theme}>
        <PostTypes
          postType={testCase.postType}
          handlePostType={testCase.handlePostType}
        />
      </ThemeProvider>,
    );
    const text = screen.getByTestId('text');
    expect(text.classList.contains('Mui-selected')).toEqual(true);
    const media = screen.getByTestId('media');
    expect(media.classList.contains('Mui-selected')).toEqual(false);
    const url = screen.getByTestId('url');
    expect(url.classList.contains('Mui-selected')).toEqual(false);
  });

  it('handlePostType works correctly', () => {
    const testCase = {
      postType: 0, handlePostType,
    };
    render(
      <ThemeProvider theme={theme}>
        <PostTypes
          postType={testCase.postType}
          handlePostType={testCase.handlePostType}
        />
      </ThemeProvider>,
    );
    expect(handlePostType.mock.calls.length).toEqual(0);
    const text = screen.getByTestId('text');
    fireEvent.click(text);
    expect(handlePostType.mock.calls.length).toEqual(0);
    const media = screen.getByTestId('media');
    fireEvent.click(media);
    expect(handlePostType.mock.calls.length).toEqual(1);
    const url = screen.getByTestId('url');
    fireEvent.click(url);
    expect(handlePostType.mock.calls.length).toEqual(2);
  });
});
