/**
 * This function replaces each occurence of - (dash) with _ (underscore) in a given text
 *
 * @function replaceDashWithUnderScore
 * @param {string} text - text to be processed
 * @returns {string} text after processing
 */

const replaceDashWithUnderScore = (text) => text.replace(/-/g, '_');

export default replaceDashWithUnderScore;
