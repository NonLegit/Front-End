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
import { CustomClassLink, PostsClassContainer, ClassButton } from './styles';

function PostsClassification() {
  const { postClass } = useParams();
  const [activeClass, setActiveClass] = useState({
    best: (postClass === 'best' || !postClass),
    hot: (postClass === 'hot'),
    new: (postClass === 'new'),
    top: (postClass === 'top'),
  });
  useEffect(() => {
    setActiveClass({
      best: (postClass === 'best' || !postClass),
      hot: (postClass === 'hot'),
      new: (postClass === 'new'),
      top: (postClass === 'top'),
    });
  }, [postClass]);
  return (
    <PostsClassContainer>
      <CustomClassLink to="/best/">
        <ClassButton color={(activeClass.best ? 'primary' : 'third')} active={activeClass.best}>
          {(activeClass.best ? <RocketIcon /> : <RocketOutlinedIcon />)}
          <div>
            best
          </div>
        </ClassButton>
      </CustomClassLink>
      <CustomClassLink to="/hot/">
        <ClassButton color={(activeClass.hot ? 'primary' : 'third')} active={activeClass.hot}>
          {(activeClass.hot ? <LocalFireDepartmentIcon /> : <LocalFireDepartmentOutlinedIcon />)}
          <div>
            hot
          </div>
        </ClassButton>
      </CustomClassLink>
      <CustomClassLink to="/new/">
        <ClassButton color={(activeClass.new ? 'primary' : 'third')} active={activeClass.new}>
          {(activeClass.new ? <NewReleasesIcon /> : <NewReleasesOutlinedIcon />)}
          <div>
            new
          </div>
        </ClassButton>
      </CustomClassLink>
      <CustomClassLink to="/top/">
        <ClassButton color={(activeClass.top ? 'primary' : 'third')} active={activeClass.top}>
          {(activeClass.top ? <UploadIcon /> : <UploadOutlinedIcon />)}
          <div>
            top
          </div>
        </ClassButton>
      </CustomClassLink>
    </PostsClassContainer>
  );
}

export default PostsClassification;
