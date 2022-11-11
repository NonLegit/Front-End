import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';

// filled
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// outlined
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  FilteButton, FilterFullBox, SelectBox, SelectItem,
} from '../styles';

/**
 * filter posts by their type for large screens
 *
 * @component FilterFull
 * @property {string} subTitle -subTitle of page the user is currently in
 * @returns {React.Component} FilterFull
 */
function FilterFull(props) {
  const { subTitle2 } = props;
  const { sort, subTitle } = useParams();
  const navigate = useNavigate();
  const newCondition = (sort === 'sort=new' || subTitle === 'sort=new');
  const hotCondition = (sort === 'sort=hot' || subTitle === 'sort=hot');
  const topCondition = (sort === 'sort=top' || sort === 'sort=top&t=day' || subTitle === 'sort=top' || subTitle === 'sort=top&t=day');
  const [showList, setShowList] = useState(false);
  const [allTime, setAllTime] = useState('All Time');

  // navigate
  const handleClick = (subPage) => {
    setAllTime('All Time');
    navigate(`${subTitle2}sort=${subPage}`);
  };
  const handleClick2 = () => {
    setAllTime('Today');
    navigate(`${subTitle2}sort=top&t=day`);
  };
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };
  return (
    <FilterFullBox>
      <FilteButton
        startIcon={(newCondition || (!hotCondition && !topCondition)) ? <NewReleasesIcon /> : <NewReleasesOutlinedIcon />}
        condition={(newCondition || (!hotCondition && !topCondition)).toString()}
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
              {allTime}
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
            </FilteButton>

          )
        }

    </FilterFullBox>
  );
}

export default FilterFull;
