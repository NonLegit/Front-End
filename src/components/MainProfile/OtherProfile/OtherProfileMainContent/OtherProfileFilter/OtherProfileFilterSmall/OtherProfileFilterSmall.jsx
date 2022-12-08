// outlined
import NewReleasesOutlinedIcon from '@mui/icons-material/NewReleasesOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClickAwayListener } from '@mui/material';
import { useState, useMemo } from 'react';
import {
  FilteButton, FilterSmallBox, SelectBox, SelectItem,
} from '../styles';

// choose to render one of the new - hot - top buttons in smaller screens
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
  allTime,
) => {
  if (newCondition) {
    return (
      <FilteButton
        startIcon={<NewReleasesOutlinedIcon />}
        condition="true"
        onClick={() => { handleClickList(); }}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
        data-testid="new-btn"
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
    // top and all time button and its show more menu
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
          {allTime}
          {showList2 && (
            <ClickAwayListener onClickAway={handleClickAway2}>
              <SelectBox>
                <SelectItem
                  color="inherit"
                  onClick={() => { handleClick2(); }}
                  condition={(sort === 'top&t=day').toString()}
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
    <div />
  );
};

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Filter the posts by type for small screens
 *
 * @component OtherProfileFilterSmall
 * @property {string} subTitle -subTitle of page the user is currently in
 * @returns {React.Component} OtherProfileFilterSmall
 */

function OtherProfileFilterSmall(props) {
  const { subTitle2 } = props;
  const query = useQuery();
  const sort = query.get('sort');
  const navigate = useNavigate();
  // check the url of the page i m currently in
  const hotCondition = (sort === 'hot');
  const topCondition = (sort === 'top' || sort === 'top&t=day');
  // new by default
  const newCondition = !hotCondition && !topCondition;
  const [showList, setShowList] = useState(false);
  const [showList2, setShowList2] = useState(false);
  const [allTime, setAllTime] = useState('All Time');

  const handleClick = (subPage) => {
    setAllTime('All Time');
    navigate(`${subTitle2}?sort=${subPage}`);
  };
  const handleClick2 = () => {
    setAllTime('Today');
    navigate(`${subTitle2}?sort=top&t=day`);
  };

  // show list of new - hot - top
  const handleClickList = () => {
    setShowList((prev) => !prev);
  };

  const handleClickAway = () => {
    setShowList(false);
  };

  // show list of all time
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
        allTime,
      )}

      {showList && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <SelectBox sx={{ marginTop: -1, marginLeft: 0 }} data-testid="more-menu">
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

export default OtherProfileFilterSmall;
