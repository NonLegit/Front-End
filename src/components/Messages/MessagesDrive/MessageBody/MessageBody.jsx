import moment from 'moment/moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMessage } from '../../PostRepliesServer';
import
{
  Body, MessageBoddy, ReplayButton, Error,
  MessageHeader, LinkProfile, MessageContent, Footer,
} from './style';

function MessageBody({
  Message, index, setReplies, replies,
}) {
  const [unread, setUnread] = useState(false);
  //   const [text, setText] = useState('');
  const navigate = useNavigate();
  const LinkToProfile = (user, f) => {
    if (f) {
      navigate(`/r/${user}`);
    } else {
      navigate(`/user/${user}`);
    }
  };
  const handleDelete = () => {
    deleteMessage(Message._id);
    const arr = replies;
    setReplies(arr.filter((e) => e?._id !== Message?._id));
  };
  const handleUnread = () => {
    setUnread(true);
  };
  const getBody = (type, user, subreddit, fixed) => {
    let body = '';
    if (type === 'subredditBan') {
      body = `u/${user} have been banned from participating in r/$subreddit.You can still view and subscribe to r/$subreddit,but you won't be able to post or comment.If you have a question regarding your ban,you can contact moderator theam for r/${subreddit}.`;
    } else if (type === 'subredditMute') {
      body = `u/${user} have been muted from r/${subreddit}. You will not be able to message the moderators of r/${subreddit} for 3 days`;
    } else if (type === 'subredditModeratorInvite') {
      body = `u/${user} is invited to become a moderator of r/$subreddit : r/${fixed}! \n to accept,visit the moderators page for r/${subreddit}.Otherwise if you did not expect to recieve this,you can simply ignore this invitation or report it. `;
    } else if (type === 'subredditModeratorRemove') {
      body = `u/${user}: You have been removed as a moderator from r/$subreddit.If you have a question regarding your removal,tou can contact moderator of r/${subreddit}`;
    } else if (type === 'subredditApprove') {
      body = `u/${user} have been added as an approved user to r/$subreddit : r/${fixed}`;
    }
    return body;
  };
  const getHeader = (type) => {
    let body = '';
    if (type === 'subredditBan') {
      body = 'subreddit Ban';
    } else if (type === 'subredditMute') {
      body = 'Subreddit Mute';
    } else if (type === 'subredditModeratorInvite') {
      body = 'Subreddit Moderator Invite ';
    } else if (type === 'subredditModeratorRemove') {
      body = 'Subreddit Moderator Remove';
    } else if (type === 'subredditApprove') {
      body = 'Subreddit Approve';
    }
    return body;
  };

  return (
    <Body index={index}>
      <MessageHeader>
        {getHeader(Message?.type)}
        {': '}
      </MessageHeader>
      <MessageBoddy>
        <Error unread={unread}> from</Error>
        { ' ' }
        <LinkProfile onClick={() => { LinkToProfile(Message?.from.userName); }} type="profile">
          { Message?.from.userName }
          { ' ' }
        </LinkProfile>
        <Error unread={unread}>  via</Error>
        {' '}
        <LinkProfile onClick={() => { LinkToProfile(Message?.subreddit.fixedName, true); }} type="subreddit">
          { Message?.subreddit.fixedName }
          { ' ' }
        </LinkProfile>
        { ' ' }
        <Error unread={unread}>
          { moment.utc(Message?.createdAt).local().startOf('seconds').fromNow() }
        </Error>
        <MessageContent>{ getBody(Message?.type, Message?.to.userName, Message?.subreddit.fixedName, Message?.subreddit.names)}</MessageContent>
        <Footer>
          <ReplayButton onClick={() => { handleDelete(); }}>Remove</ReplayButton>
          {!unread && <ReplayButton onClick={() => { handleUnread(); }}>Mark Unread</ReplayButton>}
        </Footer>
      </MessageBoddy>

    </Body>
  );
}

export default MessageBody;
