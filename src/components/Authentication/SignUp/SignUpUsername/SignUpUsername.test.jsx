import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SignUp from '../SignUp';
import SignUpUsername from './SignUpUsername';

import replaceDashWithUnderScore from '../../../../utils/replaceDashWithUnderScore';

// Testing Generate user Name
describe(replaceDashWithUnderScore, () => {
  const testCases = [{
    input: 'aaa-aaaa-aa--aa',
    output: 'aaa_aaaa_aa__aa',
  },
  {
    input: 'basma',
    output: 'basma',
  },
  {
    input: 'Adha-m',
    output: 'Adha_m',
  },
  {
    input: '-',
    output: '_',
  },
  {
    input: '_',
    output: '_',
  },
  {
    input: '------',
    output: '______',
  },
  {
    input: '________',
    output: '________',
  },
  {
    input: 'basm-asds_dfg-',
    output: 'basm_asds_dfg_',
  },
  {
    input: '-_-_-_-_-_-_',
    output: '____________',
  },
  {
    input: 'Basma-Elhoseny',
    output: 'Basma_Elhoseny',
  },
  {
    input: 'teen-agecrick',
    output: 'teen_agecrick',
  },
  ];
  testCases.forEach((testCase, index) => {
    it(`Test Case #${index} : replaceDashWithUnderScore works correctly with input = ${testCase.input}, output = ${testCase.output}`, () => {
      expect(replaceDashWithUnderScore(testCase.input, testCase.output)).toBe(testCase.output);
    });
  });
});

// test snapshot
test('SigUp test snapshot', async () => {
  const tree = renderer.create(<SignUp><SignUpUsername /></SignUp>).toJSON();
  expect(tree).toMatchSnapshot();
});
