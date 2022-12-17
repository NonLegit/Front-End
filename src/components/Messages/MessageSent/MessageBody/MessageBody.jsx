import moment from 'moment/moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import
{
  Body, MessageBoddy, TeaxArea, ButtonsContanier, Error,
  MessageHeader, LinkProfile, MessageContent, ReplayButton, SubmitButton,
} from './style';

function MessageBody({ Message, index }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState('');
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
  const handleSave = () => {
    if (text.length !== 0) {
      setError(false);
      console.log(text);
    } else {
      setError(true);
    }
  };
  return (
    <Body index={index}>
      <MessageHeader>
        {Message?.subject.text}
        :
      </MessageHeader>
      <MessageBoddy>
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
        <ReplayButton onClick={() => { handleOpen(); }}>Replay</ReplayButton>
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
