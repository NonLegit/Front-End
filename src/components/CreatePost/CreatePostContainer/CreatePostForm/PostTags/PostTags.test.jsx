import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/system';
import PostTags from './PostTags';
import theme from '../../../../../styles/theme';

describe(PostTags, () => {
  const hanldeSpoiler = jest.fn((param) => param);
  const hanldeNsfw = jest.fn((param) => param);

  afterEach(() => {
    hanldeSpoiler.mockReset();
    hanldeNsfw.mockReset();
  });

  it('PostTags renders correctly', async () => {
    const testCase = {
      spoiler: true, hanldeSpoiler, nswf: true, hanldeNsfw,
    };
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <PostTags
            spoiler={testCase.spoiler}
            hanldeSpoiler={testCase.hanldeSpoiler}
            nswf={testCase.nswf}
            hanldeNsfw={testCase.hanldeNsfw}
          />
        </ThemeProvider>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('spoiler and nsfw works correctly', () => {
    const testCase = {
      spoiler: true, hanldeSpoiler, nswf: true, hanldeNsfw,
    };
    render(
      <ThemeProvider theme={theme}>
        <PostTags
          spoiler={testCase.spoiler}
          hanldeSpoiler={testCase.hanldeSpoiler}
          nswf={testCase.nswf}
          hanldeNsfw={testCase.hanldeNsfw}
        />
      </ThemeProvider>,
    );
    const spoilerButton = screen.getByTestId('spoiler button');
    expect(hanldeSpoiler.mock.calls.length).toEqual(0);
    fireEvent.click(spoilerButton);
    expect(hanldeSpoiler.mock.calls.length).toEqual(1);
    const nsfwButton = screen.getByTestId('nsfw button');
    expect(hanldeNsfw.mock.calls.length).toEqual(0);
    fireEvent.click(nsfwButton);
    expect(hanldeNsfw.mock.calls.length).toEqual(1);
  });

  it('spoiler and nsfw colors are correct 1', () => {
    const testCase = {
      spoiler: true, hanldeSpoiler, nswf: true, hanldeNsfw,
    };
    render(
      <ThemeProvider theme={theme}>
        <PostTags
          spoiler={testCase.spoiler}
          hanldeSpoiler={testCase.hanldeSpoiler}
          nswf={testCase.nswf}
          hanldeNsfw={testCase.hanldeNsfw}
        />
      </ThemeProvider>,
    );
    const spoilerButton = screen.getByTestId('spoiler button');
    let style = window.getComputedStyle(spoilerButton);
    expect(style.backgroundColor).toEqual('rgb(0, 0, 0)');
    const nsfwButton = screen.getByTestId('nsfw button');
    style = window.getComputedStyle(nsfwButton);
    expect(style.backgroundColor).toEqual('rgb(255, 88, 91)');
  });

  it('spoiler and nsfw colors are correct 2', () => {
    const testCase = {
      spoiler: false, hanldeSpoiler, nswf: false, hanldeNsfw,
    };
    render(
      <ThemeProvider theme={theme}>
        <PostTags
          spoiler={testCase.spoiler}
          hanldeSpoiler={testCase.hanldeSpoiler}
          nswf={testCase.nswf}
          hanldeNsfw={testCase.hanldeNsfw}
        />
      </ThemeProvider>,
    );
    const spoilerButton = screen.getByTestId('spoiler button');
    let style = window.getComputedStyle(spoilerButton);
    expect(style.backgroundColor).not.toEqual('rgb(0, 0, 0)');
    const nsfwButton = screen.getByTestId('nsfw button');
    style = window.getComputedStyle(nsfwButton);
    expect(style.backgroundColor).not.toEqual('rgb(255, 88, 91)');
  });
});
