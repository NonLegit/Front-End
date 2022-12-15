export const addPostToHistory = (post) => {
  // isHidden
  const savedPost = (({
    _id, author, owner, ownerType,
    title, kind,
    text, url, votes, commentCount, views, createdAt, suggestedSort, nsfw, spoiler,
    sendReplies, locked, flairId, flairText, postVoteStatus, isSaved, isHidden, modState, sharedFrom, shareCount, images, video, sortOnHot,
  }) => ({
    _id,
    author,
    owner,
    ownerType,
    title,
    kind,
    text,
    url,
    votes,
    commentCount,
    views,
    createdAt,
    suggestedSort,
    nsfw,
    spoiler,
    sendReplies,
    locked,
    flairId,
    flairText,
    postVoteStatus,
    isSaved,
    isHidden,
    modState,
    sharedFrom,
    shareCount,
    images,
    video,
    sortOnHot,
  }))(post);
  savedPost.isHidden = false;
  console.log('Saved Post');
  console.log(savedPost);

  // Push This post to Hiistory in the local storage
  const savedPostArray = [savedPost];
  let history;
  if (localStorage.getItem('RedditHistory')) {
    const historyArray = JSON.parse(localStorage.getItem('RedditHistory'));
    // Remove From array
    const objWithIdIndex = historyArray.findIndex((obj) => obj._id === savedPost._id);
    if (objWithIdIndex > -1) {
      historyArray.splice(objWithIdIndex, 1);
    }

    history = [...savedPostArray, ...historyArray];
  } else {
    history = [...savedPostArray];
  }
  console.log(history);
  localStorage.setItem('RedditHistory', JSON.stringify(history));
};
