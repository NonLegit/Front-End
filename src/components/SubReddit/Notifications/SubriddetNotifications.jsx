import { Box } from '@mui/material';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import {
  Notification,
  Select, SelectBox, SelectItem,
} from './style';
/**
 * More icon
 * @return {React.Component} - More icon
 */
export default function Notifications() {
  const [showList1, setShowList1] = useState(false);
  const [noti, setNoti] = useState('Low');

  // toggle the list when click
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  // handle disable the list when click away
  const handleClickAway1 = () => {
    setShowList1(false);
  };

  return (
    <>
      <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box data-testid="sort" sx={{ display: 'flex' }} onClick={() => { handleClick1(); }}>
            <Notification sx={{
              '@media screen and (max-width: 435px)': {
                display: 'none',
              },
            }}
            >
              {noti === 'Low'
            && <NotificationsIcon color="primary" sx={{ marginTop: '-1px' }} />}
              {noti === 'Frequently'
            && <NotificationsActiveIcon color="primary" sx={{ marginTop: '-1px' }} />}
              {noti === 'Off'
            && <NotificationsOffIcon color="primary" sx={{ marginTop: '-1px' }} />}
            </Notification>
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox data-testid="items">
        <SelectItem onClick={() => setNoti('Low')} condition={(noti === 'Low').toString()}>
          <NotificationsNoneOutlinedIcon
            color={(noti === 'Low') ? 'primary' : 'black'}
            sx={{
              marginTop: '-1px',
              lineHeight: 0,
              cursor: 'pointer',
            }}
          />
          Low
        </SelectItem>
        <SelectItem onClick={() => setNoti('Frequently')} condition={(noti === 'Frequently').toString()}>
          <NotificationsActiveOutlinedIcon
            color={(noti === 'Frequently') ? 'primary' : 'black'}
            sx={{
              marginTop: '-1px',
              lineHeight: 0,
              cursor: 'pointer',
            }}
          />
          Frequently
        </SelectItem>
        <SelectItem onClick={() => setNoti('Off')} condition={(noti === 'Off').toString()}>
          <NotificationsOffOutlinedIcon
            color={(noti === 'Off') ? 'primary' : 'black'}
            sx={{
              marginTop: '-1px',
              lineHeight: 0,
              cursor: 'pointer',
            }}
          />
          Off
        </SelectItem>
      </SelectBox>
      )}
    </>

  );
}
