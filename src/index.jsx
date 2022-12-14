import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('firebase-messaging-sw.js')
    .then((registration) => registration.scope)
    .catch((err) => err);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
