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
/**
 *  Notification Categories
 *  @component
 * @param {Array} earlier - Array of earlier notifications
 * @param {Array} today - type of today notifiactions
 * @param {Function} handleClose - function to set what notifiacation we select and it's type
 * @param {Function} handleClick - function to handel deleteing when click hide
 * @param {Boolean} open - bool to set open or close
 * @param {object} anchorEl - anchor element
 * @return {React.Component} - Retrun all notificaions dependent on type today or earlier
 */
function NotificationCategories() {
  const {
    earlier, today, handleClose, handleClick, open, anchorEl,
  } = useContext(CategoriesContext);
  // options of see more
  const options = ['Hide this notification', 'Disable updates from this community'];
  // to set today or earlier
  const value = (today) || earlier;
  moment.updateLocale('en', {
    relativeTime: {
      past: '%s ',
      ago: '',
      s: 'now',
      mm: '%dm',
      hh: '%dh',
      dd: '%dd',
      MM: moment().format('MMM d'),
      yy: '%dy',
    },
  });
  return (
    <div data-testid={`notification-categories-${today ? 'today' : 'earlier'}`}>
      { value?.map((ele, indx) => (
        <Notification today={today} key={`${ele.date}${indx + 0}`}>
          <ReplayContext.Provider value={ele.type}>
            <NotificationImages />
          </ReplayContext.Provider>
          <NotificationBody>
            <ContainerHead>
              <BodyHead>
                { (ele.type === 'follower') ? ('New follower!')
                  : (ele.type === 'msg') ? ('New message! ')
                    : (ele.type === 'post_reply') ? (`u/${ele.userId} replied to your post in r/${ele.subreddit}`)
                      : (ele.type === 'comment_reply') ? (`u/${ele.userId} replied to your comment in r/${ele.subreddit}`)
                        : (ele.type === 'user_mention') ? (`u/${ele.userId} mentioned you in r/${ele.subreddit}`)
                          : (ele.type === 'post_upvote') ? (`u/${ele.userId} upvote you post in r/${ele.subreddit}`)
                            : (ele.type === 'comment_upvote') ? (`u/${ele.userId} upvote you comment in r/${ele.subreddit}`) : '' }
                <NotificationTime>
                  { ' · ' }
                  { (moment.utc(ele.createdAt).local().startOf('seconds')
                    .fromNow())}
                </NotificationTime>
              </BodyHead>
              <SeeMore>
                <IconButton
                  data-testid="seeMore"
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
                  data-testid="options"
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
            <Body>
              { (ele.type === 'follower') ? (`${ele.userId} followed you. Follow them back or start a chat! `)
                : (ele.type === 'msg') ? (`${ele.userId} send message to you!! `)
                  : (String(ele.type).includes('post')) ? ele.postId : ele.commentId }
            </Body>
          </NotificationBody>
        </Notification>

      ))}
    </div>
  );
}

export default NotificationCategories;
