import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Message, SentContiner, MessageBody, MessageHeader, LinkProfile, MessageContent, ReplayButton,
} from './style';

function MessageSent() {
  const api = 'http://myjson.dit.upm.es/api/bins/di24';
  const [value, setValue] = useState({});
  useEffect(() => {
    axios.get(api) // fetch api
      .then((actualData) => {
        setValue({ props: actualData.data });
        // console.log(actualData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  return (
    <SentContiner>
      { value.props?.sent.map((ele, indx) => (
        <Message key={`${ele.replay}${indx + 0}`} indx={indx}>
          <MessageHeader>
            {ele.replay !== '0' && 're: ' }
            {ele.subject}
            :
          </MessageHeader>
          <MessageBody>
            to
            { ' ' }
            <LinkProfile type="profile">
              {ele.to}
            </LinkProfile>

            {' '}
            { ele.via !== '' && (
              <>
                <span>via</span>
                <LinkProfile type="subreddit">
                  {ele.via}
                </LinkProfile>
                {' '}
                [
                <LinkProfile type="profile">M</LinkProfile>
                ]
              </>
            ) }
            {' '}
            sent an
            {' '}
            { moment.utc(ele.time).local().startOf('seconds').fromNow() }
            <MessageContent>{ ele.body }</MessageContent>
            <ReplayButton>Replay</ReplayButton>
          </MessageBody>
        </Message>
      ))}
    </SentContiner>
  );
}

export default MessageSent;
