import { useEffect, useState } from 'react';
import MessageInboxBar from '../MessageInboxBar/MessageInboxBar';
import { MessageContiner } from './style';
import MessageBody from '../MessagesDrive/MessageBody/MessageBody';
import MessageBodyMessage from '../MessageSent/MessageBody/MessageBody';
import { messagesAllServer, markAllRead } from './messageUnreadServer';
import MessageBodyReplies from '../PostReplies/MessageBody/MessageBody';

function MessagesUnread() {
  const [data] = messagesAllServer();
  const [All, setAll] = useState([]);
  useEffect(() => { setAll(data); markAllRead(); }, [data]);
  return (
    <>
      <MessageInboxBar />
      <MessageContiner>
        { All?.map((ele, index) => ((ele?.type === 'postReply') ? <MessageBodyReplies Message={ele} index={index} setReplies={setAll} replies={All} />
          : (ele?.subreddit) ? <MessageBody Message={ele} index={index} setReplies={setAll} replies={All} />
            : <MessageBodyMessage Message={ele} index={index} setReplies={setAll} replies={All} />)) }
      </MessageContiner>
    </>
  );
}

export default MessagesUnread;
