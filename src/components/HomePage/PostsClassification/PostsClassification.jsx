import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import RocketIcon from '@mui/icons-material/Rocket';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomClassLink, PostsClassContainer, ClassButton } from './styles';
/**
 * Determine which type of posts should be fetched
 * @component PostsClassification
 * @returns {React.Component} Tabs (each tab indicate the type of posts that will be fetched)
 */

function PostsClassification() {
  const { postClass } = useParams();
  const [activeClass, setActiveClass] = useState({
    best: (postClass === 'best' || !postClass),
    hot: (postClass === 'hot'),
    new: (postClass === 'new'),
    top: (postClass === 'top'),
  });
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    setActiveClass({
      best: (postClass === 'best' || !postClass),
      hot: (postClass === 'hot'),
      new: (postClass === 'new'),
      top: (postClass === 'top'),
    });
  }, [postClass]);

  const handleClick = (e) => {
    if (!matchSm) {
      e.preventDefault();
    }
  };

  return (
    <PostsClassContainer>
      {(matchSm || activeClass.best)
      && (
      <CustomClassLink
        onClick={handleClick}
        to="/best/"
      >
        <ClassButton
          color={(activeClass.best ? 'primary' : 'third')}
          active={activeClass.best}
        >
          {(activeClass.best && matchSm ? <RocketIcon /> : <RocketOutlinedIcon />)}
          <div>
            best
          </div>
          {!matchSm && <ExpandMoreIcon />}
        </ClassButton>
      </CustomClassLink>
      )}
      {(matchSm || activeClass.hot)
      && (
      <CustomClassLink
        onClick={handleClick}
        to="/hot/"
      >
        <ClassButton
          color={(activeClass.hot ? 'primary' : 'third')}
          active={activeClass.hot}
        >
          {(activeClass.hot && matchSm ? <LocalFireDepartmentIcon /> : <LocalFireDepartmentOutlinedIcon />)}
          <div>
            hot
          </div>
          {!matchSm && <ExpandMoreIcon />}
        </ClassButton>
      </CustomClassLink>
      )}
      {(matchSm || activeClass.new)
      && (
      <CustomClassLink
        onClick={handleClick}
        to="/new/"
      >
        <ClassButton
          color={(activeClass.new ? 'primary' : 'third')}
          active={activeClass.new}
        >
          {(activeClass.new && matchSm ? <NewReleasesIcon /> : <NewReleasesOutlinedIcon />)}
          <div>
            new
          </div>
          {!matchSm && <ExpandMoreIcon />}
        </ClassButton>
      </CustomClassLink>
      )}
      {(matchSm || activeClass.top)
      && (
      <CustomClassLink
        onClick={handleClick}
        to="/top/"
      >
        <ClassButton
          color={(activeClass.top ? 'primary' : 'third')}
          active={activeClass.top}
        >
          {(activeClass.top && matchSm ? <UploadIcon /> : <UploadOutlinedIcon />)}
          <div>
            top
          </div>
          {!matchSm && <ExpandMoreIcon />}
        </ClassButton>
      </CustomClassLink>
      )}
    </PostsClassContainer>
  );
}

export default PostsClassification;
