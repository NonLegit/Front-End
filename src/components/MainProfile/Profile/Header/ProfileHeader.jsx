import { ClickAwayListener } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {
  PageHeader, HeaderBox, HeaderButton, SelectBox, SelectItem,
} from './styles';

/**
 * ProfileHeader
 * @component
 * @property  {function} handleClick to navigate to the subpage
 * @return {React.Component} - Header
 */

function ProfileHeader() {
  const { subTitle, username } = useParams();
  const navigate = useNavigate();

  /**
   * this function to navigate between the taps
   * @param {string} subPage - the page to navigate to
   */

  const handleClick = (subPage) => {
    navigate(`/user/${username}/${subPage}`);
  };

  const [showList, setShowList] = useState(false);

  const handleShowList = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  const content = [
    {
      id: 1, Title: 'Comments', text: 'comments', res: 'res6',
    },
    {
      id: 2, Title: 'History', text: 'history', res: 'res5',
    },
    {
      id: 3, Title: 'Saved', text: 'saved', res: 'res4',
    },
    {
      id: 4, Title: 'Hidden', text: 'hidden', res: 'res3',
    },
    {
      id: 5, Title: 'Upvoted', text: 'upvoted', res: 'res2',
    },
    {
      id: 6, Title: 'Downvoted', text: 'downvoted', res: 'res1',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <PageHeader position="static">
        <HeaderBox subtitle={subTitle}>
          <HeaderButton
            color="inherit"
            onClick={() => { handleClick(''); }}
            condition={(subTitle === undefined || subTitle.includes('sort')).toString()}
          >
            overview

          </HeaderButton>
          <HeaderButton
            color="inherit"
            onClick={() => { handleClick('submitted'); }}
            condition={(subTitle === 'submitted').toString()}
            data-testid="posts-tap"
          >
            posts
          </HeaderButton>
          {content.map((entity) => (
            <HeaderButton
              color="inherit"
              key={entity.id}
              onClick={() => { handleClick(`${entity.text}`); }}
              condition={(subTitle === entity.text).toString()}
              responsive={entity.res}
            >
              {entity.Title}
            </HeaderButton>
          ))}
          <ClickAwayListener onClickAway={handleClickAway}>
            <HeaderButton removedots="true">
              <MoreHorizOutlinedIcon onClick={handleShowList} color="action" />
              {showList && (

              <SelectBox>
                {content.map((entity) => (
                  <SelectItem
                    onClick={() => { handleClick(`${entity.text}`); }}
                    responsive={entity.res}
                    key={entity.id}
                  >
                    {entity.Title}
                  </SelectItem>
                ))}
              </SelectBox>

              )}
            </HeaderButton>
          </ClickAwayListener>

        </HeaderBox>
      </PageHeader>
    </Box>
  );
}

export default ProfileHeader;
