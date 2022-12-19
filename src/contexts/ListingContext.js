import {
  useContext, createContext, useState, useMemo,
} from 'react';

const ListingContext = createContext(null);

function ListingContextProvider({ children }) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(11);
  const value = useMemo(() => ({
    page, setPage, limit, setLimit,
  }), [page, setPage, limit, setLimit]);
  return (
    <ListingContext.Provider
      value={value}
    >
      {children}
    </ListingContext.Provider>
  );
}

export const useListingContext = () => useContext(ListingContext);

export default ListingContextProvider;
