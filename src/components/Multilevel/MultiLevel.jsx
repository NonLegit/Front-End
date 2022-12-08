import { useEffect } from 'react';

// Components
import MultiLevelBody from './MultiLevelBody/MultiLevelBody';
import MultiLevelHeader from './MultiLevelHeader/MultiLevelHeader';
import MultiLevelSideBar from './MultiLevelSideBar/MultiLevelSideBar';

// Styles
import { MultiLevelContentConatiner, MultiLevelConatiner } from './Styles';

// Context
import PostContextProvider from '../../contexts/PostContext';

function MultiLevel({ Edit }) {
  useEffect(() => {
    // Fetch Post
  }, []);
  return (
    <PostContextProvider>
      <MultiLevelConatiner>
        <MultiLevelHeader votes={2} Title="Title" />
        <MultiLevelContentConatiner>
          <MultiLevelBody Edit={Edit} />
          <MultiLevelSideBar />
        </MultiLevelContentConatiner>
      </MultiLevelConatiner>
    </PostContextProvider>
  );
}

export default MultiLevel;
