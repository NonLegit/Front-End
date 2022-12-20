import { useEffect } from 'react';
import { useListingContext } from '../contexts/ListingContext';

function cleanPage() {
  // contexts
  const { setPage } = useListingContext();
  useEffect(() => () => {
    setPage(0);
  }, []);
}

export default cleanPage;
