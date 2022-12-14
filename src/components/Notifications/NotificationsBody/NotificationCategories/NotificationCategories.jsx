/* eslint-disable import/no-cycle */
import { useContext, createContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment/moment';
import { useCookies } from 'react-cookie';
import { CategoriesContext } from '../NotificationsBody';
import {
  Notification, Options, MenuOptions, NotificationTime,
  NotificationBody, BodyHead, Body, ContainerHead, SeeMore,
} from './styles';
import NotificationImages from './NotificationImage/NotificationImages';
import { redditCookie } from '../../../Authentication/authenticationServer';

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
  const options = ['Hide this notification'];
  // to set today or earlier
  const [cookies, setCookies] = useCookies(['redditUser']);
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
  useEffect(() => {
    redditCookie(setCookies);
  }, []);
  const follwed = (ele) => {
    const follow = (ele?.followedSubreddit) ? `r/${ele?.followedSubreddit.fixedName}` : `u/${cookies?.redditUser.userName}`;
    if (ele?.type === 'follow') {
      return 'New follower!';
    } if (ele?.type === 'postReply') {
      const temp = `u/${ele?.followerUser.userName} replied to your post in `;
      return temp + follow;
    }
    if (ele?.type === 'commentReply') {
      const temp = `u/${ele?.followerUser.userName} replied to your comment in `;
      return temp + follow;
    }
    if (ele?.type === 'userMention') {
      const temp = `u/${ele?.followerUser.userName} mentioned you in `;
      return temp;
    }
    if (ele?.type === 'firstPostUpVote' || ele?.type === 'firstCommentUpVote') {
      const temp = '⬆️ 1st upvote!';
      return temp;
    }
    return '';
  };
  const body = (ele) => {
    const follow = (ele?.followedSubreddit) ? `r/${ele?.followedSubreddit.fixedName}` : `u/${cookies?.redditUser.userName}`;
    if (ele?.type === 'follow') {
      return `${ele.followerUser.userName} followed you. Start a chat!`;
    } if (ele?.type === 'postReply') {
      const temp = `${ele?.comment.text}`;
      return temp;
    }
    if (ele?.type === 'commentReply') {
      const temp = `${ele?.comment.text}  `;
      return temp;
    }
    if (ele?.type === 'userMention') {
      const temp = `${ele?.comment.text}`;
      return temp;
    }
    if (ele?.type === 'firstPostUpVote') {
      const temp = 'Go see your comment on ';
      return temp + follow;
    }
    if (ele?.type === 'firstCommentUpVote') {
      const temp = 'Go see your comment on ';
      return temp + follow;
    }
    return '';
  };
  return (
    <div data-testid={`notification-categories-${today ? 'today' : 'earlier'}`}>
      { value?.map((ele, indx) => (
        <Notification seen={ele.seen} key={`${indx + 0}`}>
          <ReplayContext.Provider value={ele?.type}>
            <NotificationImages image={ele.followerUser.profilePicture} />
          </ReplayContext.Provider>
          <NotificationBody>
            <ContainerHead>
              <BodyHead>
                {follwed(ele)}
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
              {body(ele)}
            </Body>
          </NotificationBody>
        </Notification>

      ))}
    </div>
  );
}

export default NotificationCategories;
