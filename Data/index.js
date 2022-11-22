const signup = require('./signUp.json');
const unique = require('./uniqueUserName.json');
const me = require('./me.json');
const google = require('./google.json');
const facebook = require('./facebook.json');
const login = require('./login.json');
const forgetpassword = require('./forgetpassword.json');
const forgetusername = require('./forgetusername.json');
const resetpassword = require('./resetpassword.json');
// Something more

module.exports = () => ({
  signup,
  unique,
  me,
  google,
  facebook,
  login,
  forgetpassword,
  forgetusername,
  resetpassword,
  // Something more
});
