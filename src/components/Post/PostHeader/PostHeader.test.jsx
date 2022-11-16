import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import PostHeader from './PostHeader';
import calculateTime from '../../../utils/calculateTime';

describe(PostHeader, () => {
  it('PostHeader renders correctly', () => {
    const testCase = {
      title: 'title', image: 'image', owner: 'owner', creator: 'creator', flair: 'flair', flairBackgroundColor: 'flairBackgroundColor', flairColor: 'flairColor',
    };
    const tree = renderer
      .create(
        <Router>
          <PostHeader
            title={testCase.title}
            image={testCase.image}
            owner={testCase.owner}
            creator={testCase.creator}
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

  it('calculateTime works correctly', () => {
    const today = new Date();
    const testCases = [{
      input: today - second,
      output: '1 second',
    },
    {
      input: today - 2 * second,
      output: '2 seconds',
    },
    {
      input: today - 60 * second,
      output: '1 minute',
    },
    {
      input: today - minute,
      output: '1 minute',
    },
    {
      input: today - 2 * minute,
      output: '2 minutes',
    },
    {
      input: today - 120 * minute,
      output: '2 hours',
    },
    {
      input: today - hour,
      output: '1 hour',
    },
    {
      input: today - 2 * hour,
      output: '2 hours',
    },
    {
      input: today - 24 * hour,
      output: '1 day',
    },
    {
      input: today - 1 * day,
      output: '1 day',
    },
    {
      input: today - 2 * day,
      output: '2 days',
    },
    {
      input: today - 7 * day,
      output: '1 week',
    },
    {
      input: today - 14 * day,
      output: '2 weeks',
    },
    {
      input: today - week,
      output: '1 week',
    },
    {
      input: today - 2 * week,
      output: '2 weeks',
    },
    {
      input: today - 30 * day,
      output: '1 month',
    },
    {
      input: today - month,
      output: '1 month',
    },
    {
      input: today - 2 * month,
      output: '2 months',
    },
    {
      input: today - 365 * day,
      output: '1 year',
    },
    {
      input: today - year,
      output: '1 year',
    },
    {
      input: today - 2 * year,
      output: '2 years',
    },
    ];
    testCases.forEach((testCase) => {
      console.log(testCase.input);
      expect(calculateTime(new Date(testCase.input).toISOString())).toBe(testCase.output);
    });
  });
});
