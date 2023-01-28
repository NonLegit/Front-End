import { useEffect, useState } from 'react';
import MessageInboxBar from '../MessageInboxBar/MessageInboxBar';
import { messagesServer } from './MessagesDriveServer';
import MessageBody from './MessageBody/MessageBody';
import { MessageContiner } from './style';
import MessageBodyMessage from '../MessageSent/MessageBody/MessageBody';
/**
 * - Messages Drive
 * - Meassge you are resived
 *  @component
 *  @return {React.Component} -Meassge you are resived page
 */
function MessagesDrive() {
  const [data] = messagesServer();
  const [subreddit, setSubreddit] = useState([]);
  useEffect(() => { setSubreddit(data); }, [data]);
  return (

    <>
      <MessageInboxBar />
      <MessageContiner>
        { subreddit?.map((ele, index) => ((ele?.subreddit)
          ? <MessageBody Message={ele} index={index} setReplies={setSubreddit} replies={subreddit} />
          : <MessageBodyMessage Message={ele} index={index} setReplies={setSubreddit} replies={subreddit} />)) }

      </MessageContiner>
    </>
  );
}
export default MessagesDrive;
