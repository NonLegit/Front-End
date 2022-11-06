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

function Filter() {
  const { subTitle } = useParams();
  const navigate = useNavigate();

  const [showList, setShowList] = useState(false);
  // navigate
  const handleClick = (subPage) => {
    navigate(`sort=${subPage}`);
  };
  const handleClick2 = () => {
    navigate('sort=top&t=day');
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
        startIcon={(subTitle === 'sort=new') ? <NewReleasesIcon /> : <NewReleasesOutlinedIcon />}
        condition={(subTitle === 'sort=new').toString()}
        onClick={() => { handleClick('new'); }}
      >
        New
      </FilteButton>

      <FilteButton
        startIcon={(subTitle === 'sort=hot') ? <LocalFireDepartmentIcon /> : <LocalFireDepartmentOutlinedIcon />}
        condition={(subTitle === 'sort=hot').toString()}
        onClick={() => { handleClick('hot'); }}
      >
        HOT
      </FilteButton>

      <FilteButton
        startIcon={(subTitle === 'sort=top' || subTitle === 'sort=top&t=day') ? <CloudUploadIcon /> : <CloudUploadOutlinedIcon />}
        condition={(subTitle === 'sort=top' || subTitle === 'sort=top&t=day').toString()}
        onClick={() => { handleClick('top'); }}
      >
        TOP
      </FilteButton>
      {
            (subTitle === 'sort=top' || subTitle === 'sort=top&t=day') && (

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
            condition={(subTitle === 'sort=top&t=day').toString()}
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
