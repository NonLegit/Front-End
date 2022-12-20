import {
  useContext, createContext, useState, useMemo,
} from 'react';

const EditPostContext = createContext(null);

function EditPostContextProvider({ children }) {
  const [editPost, setEditPost] = useState(false);
  const [commentPost, setCommentPost] = useState(false);

  const value = useMemo(() => ({
    editPost, setEditPost, commentPost, setCommentPost,
  }), [editPost, setEditPost, commentPost, setCommentPost]);
  return (
    <EditPostContext.Provider
      value={value}
    >
      {children}
    </EditPostContext.Provider>
  );
}

export const useEditPostContext = () => useContext(EditPostContext);

export default EditPostContextProvider;
