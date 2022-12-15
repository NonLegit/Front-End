import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import HiddenPostsContextProvider from './contexts/HiddenPostsContext';
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
import CreatePost from './pages/CreatePost';
import PostTypeContextProvider from './contexts/PostTypeContext';
import Notifications from './pages/Notifications';
import SubReddit from './pages/SubReddit';
import MainProfile from './components/MainProfile/MainProfile';
import PostPage from './pages/PostPage';
import theme from './styles/theme';
import Cover from './components/SubReddit/Cover';
import EditPostContextProvider from './contexts/EditPostContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostTypeContextProvider>
        <HiddenPostsContextProvider>
          <EditPostContextProvider>
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
                  path="/user/:Name"
                  element={
                    <Profile />
                  }
                >
                  <Route
                    path=""
                    element={
                      <MainProfile />
                    }
                  />

                  <Route
                    path=":subTitle"
                    element={
                      <MainProfile />
                    }
                  />

                  <Route
                    path="comments/:postID"
                    element={
                      <PostPage />
                    }
                  />
                </Route>

                <Route
                  path="/login"
                  element={
                    <LogInPage />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <SignUpPage />
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
                  path="/submit"
                  element={
                    <CreatePost />
                  }
                />

                <Route
                  path="/submit/r/:subredditName"
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
                  path="/r/:Name"
                  element={
                    <SubReddit />
                  }
                >
                  <Route
                    path=""
                    element={
                      <Cover />
                    }
                  />
                  <Route
                    path=":postClass"
                    element={
                      <Cover />
                    }
                  />

                  <Route
                    path="comments/:postID"
                    element={
                      <PostPage />
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

                <Route
                  path="/r/:subReddit/about/"
                  element={
                    <Moderation />
                  }
                >
                  <Route
                    path=":subTitle"
                    element={
                      <Moderation />
                    }
                  />
                </Route>

                <Route
                  path="/r"
                  element={(
                    <SubReddit />
                  )}
                >

                  <Route
                    path=":Name"
                    element={
                      <Cover />
                    }
                  >
                    <Route
                      path=":postClass"
                      element={
                        <Cover />
                    }
                    />

                    {/* <Route
                      path="/about"
                      element={
                        <Moderation />
                    }
                    >
                      <Route
                        path=":subTitle"
                        element={
                          <Moderation />
                    }
                      />
                    </Route> */}

                    <Route
                      path="comments/:postID"
                      element={
                        <PostPage />
                    }
                    />
                  </Route>

                </Route>

              </Routes>
            </Router>
          </EditPostContextProvider>
        </HiddenPostsContextProvider>
      </PostTypeContextProvider>
    </ThemeProvider>
  );
}

export default App;
