/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

// Components
import MultiLevelBody from './MultiLevelBody/MultiLevelBody';
import MultiLevelHeader from './MultiLevelHeader/MultiLevelHeader';
import MultiLevelSideBar from './MultiLevelSideBar/MultiLevelSideBar';

// Styles
import { MultiLevelContentConatiner, MultiLevelConatiner } from './Styles';

// Context
import PostContextProvider from '../../contexts/PostContext';

// scripts
import { redditCookie } from '../Authentication/authenticationServer';

function MultiLevel({ Edit }) {
  // cookies
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies(['redditUser']);

  // useParams
  const { postID } = useParams();

  useEffect(() => {
    redditCookie(setCookies);
  }, []);

  return (
    <PostContextProvider postID={postID}>
      <MultiLevelConatiner>
        <MultiLevelHeader />
        <MultiLevelContentConatiner>
          <MultiLevelBody Edit={Edit} />
          {/* <MultiLevelSideBar /> */}
        </MultiLevelContentConatiner>
      </MultiLevelConatiner>
    </PostContextProvider>
  );
}

export default MultiLevel;
