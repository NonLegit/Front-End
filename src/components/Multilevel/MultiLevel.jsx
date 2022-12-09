/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import MultiLevelBody from './MultiLevelBody/MultiLevelBody';
import MultiLevelHeader from './MultiLevelHeader/MultiLevelHeader';
import MultiLevelSideBar from './MultiLevelSideBar/MultiLevelSideBar';

// Styles
import { MultiLevelContentConatiner, MultiLevelConatiner } from './Styles';

// Context
import PostContextProvider from '../../contexts/PostContext';

// Server

function MultiLevel({ Edit }) {
  // useParams
  const { postID } = useParams();

  useEffect(() => {
  }, []);
  return (
    <PostContextProvider postID={postID}>
      <MultiLevelConatiner>
        <MultiLevelHeader />
        <MultiLevelContentConatiner>
          <MultiLevelBody Edit={Edit} />
          <MultiLevelSideBar />
        </MultiLevelContentConatiner>
      </MultiLevelConatiner>
    </PostContextProvider>
  );
}

export default MultiLevel;
