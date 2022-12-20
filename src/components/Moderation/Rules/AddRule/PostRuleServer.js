import axios from '../../../../services/instance';

/**
 * Post new rule
 *
 * @property {string} url - url to post data
 * @property {string} defaultName - name for rule
 * @property {string} description - description of rule
 * @property {string} appliesTo - applies to in rule

 */

const PostRule = async (url, defaultName, description, appliesTo) => {
  await axios.post(
    url,
    JSON.stringify({
      defaultName,
      description,
      appliesTo,
    }),
  ).then((response) => {
    console.log(response.status);
    if (response?.status === 401) {
      window.location.pathname = 'login';
    }
    return response.status;
  }).catch((error) => {
    console.log(error);
    return false;
  });
};
export default PostRule;
