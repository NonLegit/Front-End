import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@mui/system';
import SubredditsMenu from './SubredditsMenu';
import theme from '../../../../../styles/theme';
import CommunitiesInCreatePostContextProvider from '../../../../../contexts/CommunitiesInCreatePostContext';
import numberWithCommas from '../../../../../utils/numberWithCommas';
import iMatcher from '../../../../../utils/iMatcher';

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

describe(numberWithCommas, () => {
  const testCases = [{
    input: 123123123,
    output: '123,123,123',
  },
  {
    input: 1000,
    output: '1,000',
  },
  {
    input: 12,
    output: '12',
  },
  {
    input: 192,
    output: '192',
  },
  {
    input: 1,
    output: '1',
  },
  {
    input: 12000,
    output: '12,000',
  },
  {
    input: 3123123,
    output: '3,123,123',
  },
  {
    input: 123123,
    output: '123,123',
  },
  ];
  testCases.forEach((testCase, index) => {
    it(`Test Case #${index} : numberWithCommas works correctly with input = ${testCase.input}`, () => {
      expect(numberWithCommas(testCase.input)).toBe(testCase.output);
    });
  });
});

describe(iMatcher, () => {
  const testCases = [{
    input1: 'r/communityName',
    input2: 'comm',
    output: true,
  },
  {
    input1: 'r/communityName',
    input2: 'comma',
    output: false,
  },
  {
    input1: 'r/communityName',
    input2: 'coMmUni',
    output: true,
  },
  {
    input1: 'r/communityName',
    input2: 'r/comm',
    output: true,
  },
  {
    input1: 'r/communityName',
    input2: 'r/Name',
    output: false,
  },
  {
    input1: 'r/communityName',
    input2: 'communityName',
    output: true,
  },
  {
    input1: 'u/communityName',
    input2: 'r/comm',
    output: false,
  },
  {
    input1: 'u/username',
    input2: 'usern',
    output: true,
  },
  {
    input1: 'u/username',
    input2: 'u/username',
    output: true,
  },
  {
    input1: 'u/username',
    input2: 'username',
    output: true,
  },
  {
    input1: 'u/username',
    input2: '',
    output: true,
  },
  ];
  testCases.forEach((testCase, index) => {
    it(`Test Case #${index} : iMatcher works correctly with input1 = ${testCase.input1}, input2 = ${testCase.input2}`, () => {
      expect(iMatcher(testCase.input1, testCase.input2)).toBe(testCase.output);
    });
  });
});
