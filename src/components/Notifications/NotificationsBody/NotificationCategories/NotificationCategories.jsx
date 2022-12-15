/* eslint-disable consistent-return */
/* eslint-disable import/no-cycle */
import { useContext, createContext, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment/moment';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../NotificationsBody';
import { notificationMarkRead } from '../notificationsServer';
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
function NotificationCategories({ NavBar }) {
  const {
    earlier, today, handleClose, handleClick, open, anchorEl,
  } = useContext(CategoriesContext);
  // options of see more
  const options = ['Hide this notification'];
  // to set today or earlier
  const [cookies, setCookies] = useCookies(['redditUser']);
  const navigate = useNavigate();
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
  const handleLink = (ele) => {
    const follow = (ele?.followedSubreddit) ? `/Subreddit/${ele?.followedSubreddit.fixedName}` : `/user/${cookies?.redditUser.userName}`;
    if (!ele.seen) { notificationMarkRead(ele._id); }
    if (ele?.type === 'follow') {
      navigate(`/user/${ele.followerUser.userName}`);
    } else {
      navigate(`${follow}/comments/${ele.post}`);
    }
  };
  return (
    <div data-testid={`notification-categories-${today ? 'today' : 'earlier'}`}>
      { value?.map((element, indx) => (
        <Notification seen={!element.seen} key={`${indx + 0}`}>
          <ReplayContext.Provider value={element?.type}>
            <NotificationImages image={element.followerUser?.profilePicture} />
          </ReplayContext.Provider>
          <NotificationBody onClick={() => { handleLink(element); }}>
            <ContainerHead>
              <BodyHead>
                {follwed(element)}
                <NotificationTime>
                  { ' · ' }
                  { (moment.utc(element.createdAt).local().startOf('seconds')
                    .fromNow())}
                </NotificationTime>
              </BodyHead>
              {(!NavBar)
                ? (
                  <SeeMore>
                    <IconButton
                      data-testid="seeMore"
                      id="long-button"
                      aria-controls={open ? 'long-menu' : undefined}
                      aria-expanded={open ? 'true' : undefined}
                      aria-haspopup="true"
                      catorige={(today) ? 'today' : 'earlier'}
                      onClick={(e) => { handleClick(e, element._id); }}
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
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'long-button',
                      }}
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
                ) : null}
            </ContainerHead>
            <Body>
              { body(element).slice(0, 200) }
              {
                body(element).length > 200 && '...'
              }
            </Body>
          </NotificationBody>
        </Notification>

      ))}
    </div>
  );
}

export default NotificationCategories;
