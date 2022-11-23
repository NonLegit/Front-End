import { EmailFormat } from '../../utils/checkEmail';
import '@testing-library/jest-dom';

// test time is now or not
describe(' Check if Email Format', () => {
  const tests = [{
    email: '11111111111',
    output: false,
  }, {
    email: 'basma@gmail',
    output: false,
  }, {
    email: 'basma_Elhoseny',
    output: false,
  }, {
    email: 'basmaelhoseny6@gmail.com',
    output: true,
  }, {
    email: 'basmaelhoseny6@st-cu.edu.eg',
    output: true,
  }];
  tests.forEach((item, index) => {
    it(`test case ${index}`, () => {
      const result = EmailFormat(item.email);
      expect(result).toBe(item.output);
    });
  });
});
