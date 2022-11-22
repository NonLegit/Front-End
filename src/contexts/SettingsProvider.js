import {
  createContext, useMemo,
} from 'react';

export const SettingsContext = createContext();

function SettingsProvider(props) {
  const {
    children, prefs, setPrefs,
  } = props;
  const value = useMemo(() => ({ prefs, setPrefs }), [prefs, setPrefs]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>

  );
}

export default SettingsProvider;
