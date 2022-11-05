/* eslint-disable import/no-cycle */
import { useContext, createContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment/moment';
import { CategoriesContext } from '../NotificationsBody';
import {
  Notification, Options, MenuOptions, NotificationTime,
  NotificationBody, BodyHead, Body, ContainerHead, SeeMore,
} from './styles';
import NotificationImages from './NotificationImage/NotificationImages';

export const ReplayContext = createContext();
function NotificationCategories() {
  const {
    earlier, today, handleClose, handleClick, open, anchorEl,
  } = useContext(CategoriesContext);
  const options = ['Hide this notification', 'Disable updates from this community'];
  const value = (today) || earlier;
  moment.updateLocale('en', {
    relativeTime: {
      past: '%s ',
      ago: '',
      s: 'now',
      m: '%d m',
      h: '%dh',
      dd: '%dd',
      MM: moment().format('MMM d'),
      yy: '%dy',
    },
  });
  return (
    value?.map((ele, indx) => (
      <Notification key={`${ele.date}${indx + 0}`}>
        <ReplayContext.Provider value={ele.replay}>
          <NotificationImages />
        </ReplayContext.Provider>
        <NotificationBody>
          <ContainerHead>
            <BodyHead>
              { ele.head}
              <NotificationTime>
                { ' · ' }
                { (moment.utc(ele.date).local().startOf('seconds')
                  .fromNow())}
              </NotificationTime>
            </BodyHead>
            <SeeMore>
              <IconButton
                id={indx}
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                catorige={(today) ? 'today' : 'earlier'}
              >
                <MoreHorizIcon />
              </IconButton>
              <MenuOptions
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                id={indx}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {options.map((option) => (
                  <Options
                    key={option}
                    selected={option === 'Pyxis'}
                    onClick={handleClose}
                  >
                    {option}
                  </Options>
                ))}
              </MenuOptions>
            </SeeMore>
          </ContainerHead>
          <Body>{ ele.body}</Body>
        </NotificationBody>
      </Notification>
    ))
  );
}

export default NotificationCategories;
