import { useEffect, useState } from 'react';

import { messageSentFetch } from './messageSentServer';
import MessageBody from './MessageBody/MessageBody';
import {
  SentContiner,
} from './style';

function MessageSent() {
  const [valuse, setValues] = useState();
  const [message] = messageSentFetch();

  useEffect(() => { setValues(message); }, [message]);

  return (
    <SentContiner>
      { valuse?.map((ele, index) => (
        <MessageBody key={`${index + 0}`} index={index} Message={ele} />
      ))}
    </SentContiner>
  );
}

export default MessageSent;
