import {
  useContext, createContext, useState, useMemo,
} from 'react';

const HeaderSubtitleContext = createContext(null);

function HeaderSubtitleContextProvider({ children }) {
  const [headerSubtitle, setHeaderSubtitle] = useState(0);
  const value = useMemo(() => ({ headerSubtitle, setHeaderSubtitle }), [headerSubtitle, setHeaderSubtitle]);
  return (
    <HeaderSubtitleContext.Provider
      value={value}
    >
      {children}
    </HeaderSubtitleContext.Provider>
  );
}

export const useHeaderSubtitleContext = () => useContext(HeaderSubtitleContext);

export default HeaderSubtitleContextProvider;
