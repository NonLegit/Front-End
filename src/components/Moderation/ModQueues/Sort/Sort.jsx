import { Box } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState, useMemo } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Select,
  SelectText,
} from './styles';
import { SelectBox, SelectItem } from '../../styles';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function Sort() {
  const [showList1, setShowList1] = useState(false);
  const query = useQuery();
  const sort = query.get('sort');

  // handle disable the list when click away
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  const handleClickAway1 = () => {
    setShowList1(false);
  };

  const navigate = useNavigate();
  const { subTitle, subReddit } = useParams();

  const handleClick = (subPage) => {
    if (subPage) navigate(`/r/${subReddit}/about/${subTitle}?sort=${subPage}`);
    else navigate(`/r/${subReddit}/about/${subTitle}`);
  };

  return (
    <>
      <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box sx={{ marginRight: 2, display: 'flex' }} onClick={() => { handleClick1(); }}>
            <SelectText variant="caption" align="center">{sort !== 'old' ? 'NEWEST FIRST' : 'OLDEST FIRST'}</SelectText>
            <KeyboardArrowDownOutlinedIcon />
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox>
        <SelectItem onClick={() => { handleClick(); }} condition={(sort !== 'old').toString()}>Newest First</SelectItem>
        <SelectItem onClick={() => { handleClick('old'); }} condition={(sort === 'old').toString()}>Oldest First</SelectItem>
      </SelectBox>
      )}
    </>
  );
}

export default Sort;
