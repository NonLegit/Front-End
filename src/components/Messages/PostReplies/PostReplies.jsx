import { useEffect, useState } from 'react';
import MessageInboxBar from '../MessageInboxBar/MessageInboxBar';
import { repliesServer } from '../PostRepliesServer';
import MessageBody from './MessageBody/MessageBody';
import { MessageContiner } from './style';
/**
 * - Post Replies page
 *  @component
 * @property {Array} data - Array of messages
 *  @return {React.Component} - Post Replies page
 */
function PostReplies() {
  const [replies, setReplies] = useState([]);
  const [data] = repliesServer();
  useEffect(() => {
    setReplies(data?.data);
    console.log(data.data);
  }, [data]);
  return (
    <>
      <MessageInboxBar />
      <MessageContiner>
        { replies?.map((ele, index) => (<MessageBody Message={ele} index={index} setReplies={setReplies} replies={replies} />))}
      </MessageContiner>
    </>

  );
}

export default PostReplies;
