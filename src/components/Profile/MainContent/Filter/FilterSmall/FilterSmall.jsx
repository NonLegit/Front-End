// outlined
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import { ClickAwayListener } from '@mui/material';
import { useState } from 'react';
import {
  FilteButton, FilterSmallBox, SelectBox, SelectItem,
} from '../styles';

const renderSwitch = (
  newCondition,
  hotCondition,
  topCondition,
  handleClickList,
  handleClickList2,
  showList2,
  handleClick2,
  handleClickAway2,
  sort,
) => {
  if (newCondition) {
    return (
      <FilteButton
        startIcon={<NewReleasesOutlinedIcon />}
        condition="true"
        onClick={() => { handleClickList(); }}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
      >
        New
      </FilteButton>
    );
  }

  if (hotCondition) {
    return (
      <FilteButton
        startIcon={<LocalFireDepartmentOutlinedIcon />}
        condition="true"
        onClick={() => { handleClickList(); }}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
      >
        HOT
      </FilteButton>
    );
  }
  if (topCondition) {
    return (
      <>
        <FilteButton
          startIcon={<CloudUploadOutlinedIcon />}
          condition="true"
          onClick={() => { handleClickList(); }}
          endIcon={<KeyboardArrowDownOutlinedIcon />}
        >
          TOP
        </FilteButton>
        <FilteButton
          endIcon={<KeyboardArrowDownOutlinedIcon />}
          condition="true"
          onClick={() => { handleClickList2(); }}
        >
          All Time
          {showList2 && (
            <ClickAwayListener onClickAway={handleClickAway2}>
              <SelectBox>
                <SelectItem
                  color="inherit"
                  onClick={() => { handleClick2(); }}
                  condition={sort.includes('day').toString()}
                >
                  Today

                </SelectItem>
              </SelectBox>
            </ClickAwayListener>
          )}
        </FilteButton>
      </>
    );
  }
  return (
    <>no</>
  );
};

function FilterSmall(props) {
  const { subTitle2 } = props;
  const { sort, subTitle } = useParams();
  const navigate = useNavigate();
  const hotCondition = (sort === 'sort=hot' || subTitle === 'sort=hot');
  const topCondition = (sort === 'sort=top' || sort === 'sort=top&t=day' || subTitle === 'sort=top' || subTitle === 'sort=top&t=day');
  const newCondition = !hotCondition && !topCondition;
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);

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

  const handleClickList2 = () => {
    setShowList2((prev) => !prev);
  };

  const handleClickAway2 = () => {
    setShowList2(false);
  };

  const content = [
    {
      id: 1, text: 'New', nav: 'new', icon: <NewReleasesOutlinedIcon />, condition: !hotCondition && !topCondition,
    },
    {
      id: 2, text: 'Hot', nav: 'hot', icon: <LocalFireDepartmentOutlinedIcon />, condition: hotCondition,
    },
    {
      id: 3, text: 'Top', nav: 'top', icon: <CloudUploadOutlinedIcon />, condition: topCondition,
    },
  ];

  return (
    <FilterSmallBox>

      {renderSwitch(
        newCondition,
        hotCondition,
        topCondition,
        handleClickList,
        handleClickList2,
        showList2,
        handleClick2,
        handleClickAway2,
        sort,
      )}

      {showList && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <SelectBox sx={{ marginTop: -1, marginLeft: 0 }}>
            { content.map((entity) => (
              <FilteButton
                key={entity.id}
                startIcon={entity.icon}
                condition={(entity.condition).toString()}
                onClick={() => { handleClick(`${entity.nav}`); }}
                sx={{
                  borderRadius: 0,
                  '&:hover': {
                    color: 'black',
                    bgcolor: '#e9f5fd',
                  },
                }}
              >
                {entity.text}
              </FilteButton>
            ))}
          </SelectBox>
        </ClickAwayListener>
      )}

    </FilterSmallBox>
  );
}

export default FilterSmall;
