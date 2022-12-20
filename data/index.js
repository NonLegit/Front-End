const {
  top, best, hot, newPosts,
} = require('./homePagePosts.json');
const { subredditsHomePage } = require('./createPostSubreddits.json');
const { usernameAvailable } = require('./usernameAvailability.json');
const homePageCommunities = require('./homePageCommunities.json');
const Subreddit = require('./Subreddit.json');
const subredditFlairs = require('./subredditFlairs.json');
const Flair = require('./Flair.json');
const CreatSubreddit = require('./CreatSubreddit.json');
const signup = require('./SignUp.json');
const unique = require('./UniqueUserName.json');
const me = require('./me.json');
const userImage = require('./me.json');
const google = require('./google.json');
const facebook = require('./facebook.json');
const login = require('./login.json');
const forgetpassword = require('./forgetpassword.json');
const forgetusername = require('./forgetusername.json');
const resetpassword = require('./resetpassword.json');
const notifications = require('./Notifications.json');
const settings = require('./Settings.json');
const overview = require('./overview.json');
const subreddits = require('./subreddits.json');
const userSubreddits = require('./userSubreddits.json');
const downvoted = require('./downvoted.json');
const upvoted = require('./upvoted.json');
const saved = require('./saved.json');
const hidden = require('./hidden.json');
const postsTap = require('./postsTap.json');
const join = require('./join.json');
const logout = require('./logout.json');
const token = require('./token.json');
const userInfo = require('./userInfo.json');
const socialLinks = require('./socialLinks.json');
const postSocialLinks = require('./postSocialLinks.json');
const hideNotification = require('./hideNotification.json');
const markAsRead = require('./markAsRead.json');
const follow = require('./follow.json');
const block = require('./block.json');
const followers = require('./followers.json');
const actionOnPost = require('./actionOnPost.json');
const commentsTap = require('./commentsTap.json');
const getPost = require('./getpost.json');
const createcomment = require('./createcomment.json');
const postComments = require('./postcomments.json');
const moreComments = require('./moreComments.json');
const editcomment = require('./editcomment.json');
const save = require('./save.json');
const unsave = require('./unsave.json');
const hide = require('./hide.json');
const unhide = require('./unhide.json');
const vote = require('./vote.json');
const addImagesToPost = require('./addImagesToPost.json');
const moderatorAction = require('./moderatorAction.json');
const UpdateFlair = require('./UpdateFlair.json');
const exploreCommunities = require('./exploreCommunities.json');
const TopCommunities = require('./topCommunities.json');
const SearchByPeople = require('./SearchByPeople.json');
const SearchByPost = require('./SearchByPost.json');
const SearchByComments = require('./SearchByComments.json');

const SearchByCommunity = require('./SearchByCommunty.json');
const AddFlair = require('./AddFlair.json');
const EditFlair = require('./EditFliar.json');
const AddRule = require('./AddRule.json');
const EditRule = require('./AddRule.json');

const listBlock = require('./listBlock.json');
const notificationToken = require('./notificationToken.json');
const messageSent = require('./messageSent.json');
const MessagePostReplay = require('./MessagePostReplay.json');
const messageRemove = require('./messageRemove.json');
const MessageDrive = require('./MessageDrive.json');
const MessageReplay = require('./messageReplay.json');
const messagesAll = require('./messagesAll.json');
const baned = require('./bannedList.json');
const modQueue = require('./modQueue.json');
const commentMod = require('./commentMod.json');
const banned = require('./bannedList.json');
const muted = require('./mutedList.json');
const moderators = require('./moderatorsList.json');
const approved = require('./approvedList.json');
const muteUnmute = require('./muteUnmuteList.json');
const approvedUnapproved = require('./approvedUnapprovedList.json');
const banUnban = require('./banUnban.json');
const invitedModerators = require('./invitedModerators.json');
// Something more

module.exports = () => ({
  SearchByComments,
  SearchByPost,
  EditRule,
  AddRule,
  EditFlair,
  AddFlair,
  baned,
  UpdateFlair,
  userInfo,
  Subreddit,
  Flair,
  CreatSubreddit,
  signup,
  unique,
  me,
  google,
  facebook,
  login,
  forgetpassword,
  forgetusername,
  resetpassword,
  notifications,
  settings,
  overview,
  subreddits,
  userSubreddits,
  downvoted,
  upvoted,
  saved,
  hidden,
  postsTap,
  join,
  subredditsHomePage,
  usernameAvailable,
  top,
  best,
  hot,
  logout,
  token,
  new: newPosts,
  socialLinks,
  postSocialLinks,
  userImage,
  hideNotification,
  markAsRead,
  follow,
  block,
  followers,
  actionOnPost,
  commentsTap,
  getPost,
  createcomment,
  postComments,
  moreComments,
  editcomment,
  subredditFlairs,
  save,
  unsave,
  hide,
  unhide,
  vote,
  addImagesToPost,
  listBlock,
  notificationToken,
  moderatorAction,
  exploreCommunities,
  TopCommunities,
  messageSent,
  MessagePostReplay,
  messageRemove,
  MessageDrive,
  MessageReplay,
  messagesAll,

  homePageCommunities,
  modQueue,
  commentMod,
  SearchByPeople,
  SearchByCommunity,
  banned,
  muted,
  moderators,
  approved,
  muteUnmute,
  approvedUnapproved,
  banUnban,
  invitedModerators,
  // Something more
});
