// decide which message to show for an empty page
/**
 * function to return the empty page text
 *
 * @property {string} param - the subPage of profile
 * @returns {string} text of the empty page
 */
const renderText = (param) => {
  switch (param) {
    case 'upvoted':
      return `hmm...looks like you
            haven't upvoted and thing yet`;
    case 'downvoted':
      return `hmm... looks like you
            haven't downvoted and thing yet`;
    case 'saved':
      return `hmm... looks like you
            haven't saved and thing yet`;
    case 'hidden':
      return `hmm... looks like you
            haven't hidden and thing yet`;

    default:
      return 'hmm... looks like you entered a non existing page and thing yet';
  }
};

export default renderText;
