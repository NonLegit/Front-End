import {
  useContext, createContext, useState, useMemo,
} from 'react';

const CreatePostSidebarContext = createContext(null);

function CreatePostSidebarContextProvider({ children }) {
  const [communityToPostIn, setCommunityToPostIn] = useState(null);
  const [ownerType, setOwnerType] = useState(null);
  const [communityName, setCommunityName] = useState(null);
  const value = useMemo(() => ({
    communityToPostIn, setCommunityToPostIn, ownerType, setOwnerType, communityName, setCommunityName,
  }), [communityToPostIn, setCommunityToPostIn, ownerType, setOwnerType, communityName, setCommunityName]);

  return (
    <CreatePostSidebarContext.Provider
      value={value}
    >
      {children}
    </CreatePostSidebarContext.Provider>
  );
}

export const useCreatePostSidebarContext = () => useContext(CreatePostSidebarContext);

export default CreatePostSidebarContextProvider;
