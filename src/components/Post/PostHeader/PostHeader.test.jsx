import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostHeader from './PostHeader';
import calculateTime from '../../../utils/calculateTime';

describe(PostHeader, () => {
  it('PostHeader renders correctly', () => {
    const testCase = {
      title: 'title', image: 'image', owner: 'owner', author: 'author', flair: 'flair', flairBackgroundColor: 'flairBackgroundColor', flairColor: 'flairColor',
    };
    const tree = renderer
      .create(
        <Router>
          <PostHeader
            title={testCase.title}
            image={testCase.image}
            owner={testCase.owner}
            author={testCase.author}
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

describe(calculateTime, () => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  const today = new Date();
  const testCases = [{
    input: today - second,
    output: 'a few seconds ago',
  },
  {
    input: today - 2 * second,
    output: 'a few seconds ago',
  },
  {
    input: today - 60 * second,
    output: 'a minute ago',
  },
  {
    input: today - minute,
    output: 'a minute ago',
  },
  {
    input: today - 2 * minute,
    output: '2 minutes ago',
  },
  {
    input: today - 120 * minute,
    output: '2 hours ago',
  },
  {
    input: today - hour,
    output: 'an hour ago',
  },
  {
    input: today - 21 * hour,
    output: '21 hours ago',
  },
  {
    input: today - 23 * hour,
    output: 'a day ago',
  },
  {
    input: today - 2 * hour,
    output: '2 hours ago',
  },
  {
    input: today - 24 * hour,
    output: 'a day ago',
  },
  {
    input: today - 1 * day,
    output: 'a day ago',
  },
  {
    input: today - 2 * day,
    output: '2 days ago',
  },
  {
    input: today - 7 * day,
    output: '7 days ago',
  },
  {
    input: today - 14 * day,
    output: '14 days ago',
  },
  {
    input: today - week,
    output: '7 days ago',
  },
  {
    input: today - 2 * week,
    output: '14 days ago',
  },
  {
    input: today - 30 * day,
    output: 'a month ago',
  },
  {
    input: today - month,
    output: 'a month ago',
  },
  {
    input: today - 2 * month,
    output: '2 months ago',
  },
  {
    input: today - 365 * day,
    output: 'a year ago',
  },
  {
    input: today - year,
    output: 'a year ago',
  },
  {
    input: today - 2 * year,
    output: '2 years ago',
  },
  ];
  testCases.forEach((testCase, index) => {
    it(`Test Case #${index} : calculateTime works correctly with input = ${new Date(testCase.input).toISOString()}`, () => {
      expect(calculateTime(new Date(testCase.input).toISOString())).toBe(testCase.output);
    });
  });
});
