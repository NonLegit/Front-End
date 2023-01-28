import moment from 'moment/moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMessage, replayMessage } from '../../PostRepliesServer';
import
{
  Body, MessageBoddy, TeaxArea, ButtonsContanier, Error, Footer,
  MessageHeader, LinkProfile, MessageContent, ReplayButton, SubmitButton,
} from './style';
/**
 * - Message Body in sent page
 *  @component
 * @param {Object} Message - Message Info
 * @param {Number}index - index of message
 * @param {Function} setReplies - function to update replies
 * @param {Array} replies - Array of messages
 *  @return {React.Component} - Message Body in sent page
 */
function MessageBody({
  Message, index, setReplies, replies,
}) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
  const [unread, setUnread] = useState(false);
  const navigate = useNavigate();
  const LinkToProfile = (user) => {
    navigate(`/user/${user}`);
  };
  const handleClose = () => {
    setOpen(false);
    setText('');
    setError(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    deleteMessage(Message._id);
    const arr = replies;
    setReplies(arr.filter((e) => e?._id !== Message?._id));
  };
  const handleUnread = () => {
    setUnread(true);
  };
  const handleSave = () => {
    if (text.length !== 0) {
      setError(false);
      console.log(text);
      setOpen(false);
      replayMessage(Message?._id, text);
      setText('');
    } else {
      setError(true);
    }
  };
  return (
    <Body index={index}>
      <MessageHeader>
        {Message?.subject?.text}
        :
      </MessageHeader>
      <MessageBoddy>
        from
        { ' ' }
        <LinkProfile onClick={() => { LinkToProfile(Message?.from.userName); }} type="profile">
          { Message?.from.userName }
          { ' ' }
        </LinkProfile>
        to
        { ' ' }
        <LinkProfile onClick={() => { LinkToProfile(Message?.to.userName); }} type="profile">
          { Message?.to.userName }
          { ' ' }
        </LinkProfile>
        sent an
        {' '}
        { moment.utc(Message?.createdAt).local().startOf('seconds').fromNow() }
        <MessageContent>{ Message?.text }</MessageContent>
        <Footer>
          <ReplayButton onClick={() => { handleDelete(); }}>Remove</ReplayButton>
          {!unread && <ReplayButton onClick={() => { handleUnread(); }}>Mark Unread</ReplayButton>}
          <ReplayButton onClick={() => { handleOpen(); }}>Replay</ReplayButton>
        </Footer>

      </MessageBoddy>
      { open
              && (
              <>
                <TeaxArea value={text} onChange={(e) => { setText(e.target.value); }} />
                { error && (<Error>We need something here</Error>)}
                <ButtonsContanier>
                  <SubmitButton onClick={() => { handleSave(); }}>
                    Save
                  </SubmitButton>
                  <SubmitButton onClick={() => { handleClose(); }}>
                    Cancel
                  </SubmitButton>
                </ButtonsContanier>
              </>
              ) }

    </Body>
  );
}

export default MessageBody;
