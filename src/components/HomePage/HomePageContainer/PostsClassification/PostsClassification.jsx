import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ClickAwayListener, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  CustomClassLink, PostsClassContainer, ClassButton, PostClassesList, PostClassSmButton,
} from './styles';

/**
 * Determine which type of posts should be fetched
 * @component PostsClassification
 * @returns {React.Component} Tabs (each tab indicate the type of posts that will be fetched)
 */

function PostsClassification(props) {
  const { subredditName, allOrPopular } = props;
  const { postClass } = useParams();
  const [activeClass, setActiveClass] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));
  const postClasses = [
    {
      name: 'best',
      activeIcon: <RocketIcon />,
      nonActiveIcon: <RocketOutlinedIcon />,
    },

    {
      name: 'hot',
      activeIcon: <LocalFireDepartmentIcon />,
      nonActiveIcon: <LocalFireDepartmentOutlinedIcon />,
    },
    {
      name: 'new',
      activeIcon: <NewReleasesIcon />,
      nonActiveIcon: <NewReleasesOutlinedIcon />,
    },
    {
      name: 'top',
      activeIcon: <UploadIcon />,
      nonActiveIcon: <UploadOutlinedIcon />,
    },
  ];

  /**
   * this function handles change in post class
   */
  const handleChangeClass = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  /**
   * this function handles click away from posts classification post
   */
  const handleClickAway = () => {
    setOpen(false);
  };
  useEffect(() => {
    setActiveClass(postClass || 'best');
    if (subredditName) {
      setActiveClass(postClass || 'hot');
    }
  }, [postClass]);

  /**
   * this function set the active class of posts
   */
  const handleClick = (e) => {
    if (!matchSm) {
      e.preventDefault();
      setOpen(true);
    }
  };
  return (
    <PostsClassContainer>
      {postClasses.map((ele) => {
        const { name, activeIcon, nonActiveIcon } = ele;

        return (
          !(name === 'best' && subredditName)
            && (matchSm || activeClass === name)
            && (
            <CustomClassLink
              onClick={handleClick}
              to={(subredditName) ? `/r/${subredditName}/${name}/` : `/${(allOrPopular || '') + name}/`}
              key={name}
            >
              <ClassButton
                color={(activeClass === name ? 'primary' : 'third')}
                active={activeClass === name}
              >
                {(activeClass === name && matchSm ? activeIcon : nonActiveIcon)}
                <div>
                  {name}
                </div>
                {!matchSm && <ExpandMoreIcon />}
              </ClassButton>
              {!matchSm && activeClass === name && open
              && (
                <ClickAwayListener onClickAway={handleClickAway}>
                  <PostClassesList boxShadow={2}>
                    {postClasses.map((innerEle) => {
                      const { name, nonActiveIcon } = innerEle;
                      return (
                        <PostClassSmButton
                          to={(subredditName) ? `/r/${subredditName}/${name}/` : `/${(allOrPopular || '') + name}/`}
                          key={name}
                          active={activeClass === name}
                          onClick={handleChangeClass}
                        >
                          {nonActiveIcon}
                          <div>
                            {name}
                          </div>
                        </PostClassSmButton>
                      );
                    })}
                  </PostClassesList>
                </ClickAwayListener>
              )}
            </CustomClassLink>
            )
        );
      })}

    </PostsClassContainer>
  );
}

export default PostsClassification;
