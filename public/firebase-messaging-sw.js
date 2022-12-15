/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Registration successful, scope is:', registration.scope);
    }).catch((err) => {
      console.log('Service worker registration failed, error:', err);
    });
}

const firebaseConfig = {
  apiKey: 'AIzaSyAYaIh5gzJ42Nj_iIevGsh36EuXk14BDqg',
  authDomain: 'nonlegit-df8a9.firebaseapp.com',
  projectId: 'nonlegit-df8a9',
  storageBucket: 'nonlegit-df8a9.appspot.com',
  messagingSenderId: '82072335604',
  appId: '1:82072335604:web:fd17be6c3765b21236daa1',
  measurementId: 'G-4FGQ5GZZFP',
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef

const messaging = firebase.messaging();
// eslint-disable-next-line no-undef
const follwed = (ele) => {
  if (ele?.type === 'follow') {
    return 'New follower!';
  } if (ele?.type === 'postReply') {
    const temp = `u/${ele?.followerUser.userName} replied to your post `;
    return temp;
  }
  if (ele?.type === 'commentReply') {
    const temp = `u/${ele?.followerUser.userName} replied to your comment `;
    return temp;
  }
  if (ele?.type === 'userMention') {
    const temp = `u/${ele?.followerUser.userName} mentioned you in `;
    return temp;
  }
  if (ele?.type === 'firstPostUpVote' || ele?.type === 'firstCommentUpVote') {
    const temp = '⬆️ 1st upvote!';
    return temp;
  }
  return '';
};
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  const { data: { val } } = payload;

  const notificationTitle = 'New Notifications !!';

  const notificationOptions = {
    body: follwed(JSON.parse(val)),

  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
