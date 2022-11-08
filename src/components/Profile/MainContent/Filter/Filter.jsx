import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  FilterBox, FilteButton, SelectBox, SelectItem,
} from './styles';

function Filter(props) {
  const { subTitle2 } = props;
  const { sort, subTitle } = useParams();
  const navigate = useNavigate();
  const newCondition = (sort === 'sort=new' || subTitle === 'sort=new');
  const hotCondition = (sort === 'sort=hot' || subTitle === 'sort=hot');
  const topCondition = (sort === 'sort=top' || sort === 'sort=top&t=day' || subTitle === 'sort=top' || subTitle === 'sort=top&t=day');
  const [showList, setShowList] = useState(false);
  // navigate
  const handleClick = (subPage) => {
    navigate(`${subTitle2}sort=${subPage}`);
  };
  const handleClick2 = () => {
    navigate(`${subTitle2}sort=top&t=day`);
  };
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };
  return (
    <FilterBox>
      <FilteButton
        startIcon={newCondition ? <NewReleasesIcon /> : <NewReleasesOutlinedIcon />}
        condition={newCondition.toString()}
        onClick={() => { handleClick('new'); }}
      >
        New
      </FilteButton>

      <FilteButton
        startIcon={hotCondition ? <LocalFireDepartmentIcon /> : <LocalFireDepartmentOutlinedIcon />}
        condition={hotCondition.toString()}
        onClick={() => { handleClick('hot'); }}
      >
        HOT
      </FilteButton>

      <FilteButton
        startIcon={topCondition ? <CloudUploadIcon /> : <CloudUploadOutlinedIcon />}
        condition={topCondition.toString()}
        onClick={() => { handleClick('top'); }}
      >
        TOP
      </FilteButton>
      {
          topCondition && (

            <FilteButton
              endIcon={<KeyboardArrowDownOutlinedIcon />}
              condition={true.toString()}
              onClick={() => { handleClickList(); }}
            >
              All Time
            </FilteButton>

          )
        }
      {showList && (
      <ClickAwayListener onClickAway={handleClickAway}>
        <SelectBox>
          <SelectItem
            color="inherit"
            onClick={() => { handleClick2(); }}
            condition={(sort === 'sort=top&t=day' || subTitle === 'sort=top&t=day').toString()}
          >
            Today

          </SelectItem>
        </SelectBox>
      </ClickAwayListener>
      )}

    </FilterBox>
  );
}

export default Filter;
