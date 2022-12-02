import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import MainNavBar from './components/MainNavBar/MainNavBar';
import SettingsProfile from './components/Settings/SettingsProfile/SettingsProfile';
import SettingsPrivacy from './components/Settings/SettingsPrivacy/SettingsPrivacy';
import SettingsFeed from './components/Settings/SettingsFeed/SettingsFeed';
import SettingsAccount from './components/Settings/SettingsAccount/SettingsAccount';
import Settings from './pages/Settings';

import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import ForgetUsernamePage from './pages/ForgetUsernamePage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

import HomePage from './pages/HomePage';
import Messages from './pages/Messages';
import Moderation from './pages/Moderation';
import Profile from './pages/Profile';
import Search from './pages/Search';
import theme from './styles/theme';
import CreatePost from './pages/CreatePost';
import PostTypeContextProvider from './contexts/PostTypeContext';
import Notifications from './pages/Notifications';
import SubReddit from './pages/SubReddit';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostTypeContextProvider>
        <Router className="App">
          <MainNavBar />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage data-testid="home page" />
          }
            />
            <Route
              path="/:postClass"
              element={
                <HomePage />
          }
            />
            <Route
              path="/user"
              element={
                <Profile />
              }
            />
            <Route
              path="/register"
              element={
                <SignUpPage />
}
            />
            <Route
              path="/user/:username/"
              element={
                <Profile />
          }
            >
              <Route
                path=":subTitle"
                element={
                  <Profile />
          }
              >
                <Route
                  path=":sort"
                  element={
                    <Profile />
          }
                />

              </Route>
            </Route>

            <Route
              path="/login"
              element={
                <LogInPage />
          }
            />
            <Route
              path="/password"
              element={
                <ForgetPasswordPage />
          }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ResetPasswordPage />
          }
            />

            <Route
              path="/username"
              element={
                <ForgetUsernamePage />
          }
            />
            <Route
              path="/search"
              element={
                <Search />
          }
            />
            <Route
              path="/messages"
              element={
                <Messages />
          }
            />
            <Route
              path="/moderation"
              element={
                <Moderation />
          }
            />
            <Route
              path="/submit"
              element={
                <CreatePost />
            }
            />
            <Route
              path="/submit/:subredditName"
              element={
                <CreatePost />
            }
            />
            <Route
              path="/notifications"
              element={
                <Notifications />
          }
            />
            <Route
              path="/SubReddit/:Name"
              element={
                <SubReddit />
          }
            >
              <Route
                path=":postClass"
                element={
                  <SubReddit />
          }
              />
            </Route>
            <Route
              path="/settings"
              element={
                <Settings />
          }
            >
              <Route
                path=""
                element={
                  <SettingsAccount />
          }
              />
              <Route
                path="account"
                element={
                  <SettingsAccount />
          }
              />
              <Route
                path="profile"
                element={
                  <SettingsProfile />
          }
              />
              <Route
                path="privacy"
                element={
                  <SettingsPrivacy />
          }
              />
              <Route
                path="feed"
                element={
                  <SettingsFeed />
          }
              />
            </Route>
          </Routes>
        </Router>
      </PostTypeContextProvider>
    </ThemeProvider>
  );
}

export default App;
