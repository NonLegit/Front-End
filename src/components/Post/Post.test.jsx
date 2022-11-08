import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/system';
// import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import theme from '../../styles/theme';
import Post from './Post';

describe(Post, () => {
  it('Reactions renders correctly', () => {
    const testCase = {
      commentCount:
        12,
      creator:
        'righteous_boldness07',
      flairBackgroundColor:
        '#0079D3',
      flairColor:
        '#000',
      flairText:
        'sports/r/all',
      id:
        0,
      image:
        'https://styles.redditmedia.com/t5_3ptyd/styles/communityIcon_p18jqwszxcv51.png',
      kind:
        'image',
      popularity:
        'Popular videos',
      sr:
        'toptalent',
      title:
        'In 1991 Michael Jordan shot a free throw with his eyes closed while playing the Denver Nuggets.',
      url:
        'https://external-preview.redd.it/IRAK4IuafQCZdIC_OnB0X2ASJrSSRjqL7Vtnx3jt6mc.jpg?width=640&crop=smart&auto=webp&s=1db6de95af4fecf325ed1f06771b9a6eb947ac8e',
      votes:
        245,
    };
    const tree = renderer
      .create(
        <Router>
          <ThemeProvider theme={theme}>
            <Post
              title={testCase.title}
              image={testCase.image}
              owner={testCase.owner}
              creator={testCase.creator}
              flairText={testCase.flairText}
              flairBackgroundColor={testCase.flairBackgroundColor}
              popularity={testCase.popularity}
              flairColor={testCase.flairColor}
              url={testCase.url}
              kind={testCase.kind}
              votes={testCase.votes}
              commentCount={testCase.commentCount}
              text={testCase.text}
              key={testCase.id}
            />
          </ThemeProvider>
        </Router>
        ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
