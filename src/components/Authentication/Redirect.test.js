import '@testing-library/jest-dom';
import { redirectHome, redirectLogin } from '../../utils/Redirect';

it('Redirect To home page', () => {
  redirectHome(0);
  setTimeout(() => {
    expect(global.window.location.pathname).toBe('/');
  }, 50);
});

it('Redirect To Login page', () => {
  redirectLogin(0);
  setTimeout(() => {
    expect(global.window.location.pathname).tobe('/login');
  }, 50);
});
