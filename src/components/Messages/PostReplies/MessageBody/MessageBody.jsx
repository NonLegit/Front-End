import moment from 'moment/moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMessage } from '../../PostRepliesServer';
import { blockuser } from '../../messageSever';
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
  const LinkToProfile = (user) => {
    if (Message?.subreddit) {
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
  const handleBlock = () => {
    blockuser(Message?.from.userName);
  };
  const follow = (Message?.subreddit) ? `r/${Message?.subreddit.fixedName}` : `u/${Message?.to.userName}`;
  return (
    <Body index={index}>
      <MessageHeader>
        post reply
        {' '}
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
        <LinkProfile onClick={() => { LinkToProfile(Message?.to.userName); }} type="profile">
          { follow}
          { ' ' }
        </LinkProfile>
        { ' ' }
        <Error unread={unread}>
          { moment.utc(Message?.createdAt).local().startOf('seconds').fromNow() }
        </Error>
        <MessageContent>{ Message?.comment.text?.replace(/<[^>]+>/g, '').slice(0, 200) }</MessageContent>
        <Footer>
          <ReplayButton onClick={() => { handleDelete(); }}>Remove</ReplayButton>
          <ReplayButton onClick={() => { handleBlock(); }}>Block user</ReplayButton>
          {!unread && <ReplayButton onClick={() => { handleUnread(); }}>Mark Unread</ReplayButton>}
        </Footer>
      </MessageBoddy>

    </Body>
  );
}

export default MessageBody;
