import renderText from '../../../../../utils/renderText';

test('given the parameter is hidden it gives the sentence of hidden tap', () => {
  expect(renderText('hidden')).toBe(`hmm... looks like you
            haven't hidden and thing yet`);
});
