import renderText from '../../../../../utils/renderText';

test('given the parameter is hidden it gives the sentence of the hidden tap', () => {
  expect(renderText('hidden')).toBe(`hmm... looks like you
            haven't hidden and thing yet`);
});

test('given the parameter is saved it gives the sentence of the saved tap', () => {
  expect(renderText('saved')).toBe(`hmm... looks like you
            haven't saved and thing yet`);
});

test('given the parameter is upvoted it gives the sentence of the upvoted tap', () => {
  expect(renderText('upvoted')).toBe(`hmm...looks like you
            haven't upvoted and thing yet`);
});

test('given the parameter is upvoted it gives the sentence of the upvoted tap', () => {
  expect(renderText('downvoted')).toBe(`hmm... looks like you
            haven't downvoted and thing yet`);
});

test('given the parameter is anything else it gives the sentence of no existing page', () => {
  expect(renderText('')).toBe('hmm... looks like you entered a non existing page and thing yet');
});
