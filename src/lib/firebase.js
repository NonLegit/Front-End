/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-promise-executor-return */
/* eslint-disable no-return-await */
/* eslint-disable no-restricted-globals */
import { initializeApp } from 'firebase/app';

// import { getFirestore } from '@firebase/firestore';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyAYaIh5gzJ42Nj_iIevGsh36EuXk14BDqg',
  authDomain: 'nonlegit-df8a9.firebaseapp.com',
  projectId: 'nonlegit-df8a9',
  storageBucket: 'nonlegit-df8a9.appspot.com',
  messagingSenderId: '82072335604',
  appId: '1:82072335604:web:fd17be6c3765b21236daa1',
  measurementId: 'G-4FGQ5GZZFP',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const appNottification = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
export let messaging;//= getMessaging(app);
// export const messagingNottification = getMessaging(appNottification);

// export const onForegroundMessage = () => new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
export const onForegroundNottification = () => new Promise((resolve) => onMessage(messaging, (payload) => resolve(payload)));
export const getOrRegisterServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    return await window.navigator.serviceWorker
      .getRegistration('/firebase-push-notification-scope')
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register('/firebase-messaging-sw.js', {
          scope: '/firebase-push-notification-scope',
        });
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};
export const getFirebaseToken = () => getOrRegisterServiceWorker()
  .then((serviceWorkerRegistration) => getToken(messaging, { vapidKey: 'BLsmD9ZEQyLyHpNKCK0zUjWWkt4LHZLlTP1pkVC_w2QiS_ixyutdofxanfdeoaASHn3j71M0QZUS74s8fikX94M', serviceWorkerRegistration }));
