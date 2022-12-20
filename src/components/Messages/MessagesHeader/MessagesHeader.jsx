import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, HeaderTabs, HeaderContainer } from './styles';

function MessagesHeader() {
  const [active, setActive] = useState([false, true, false]);

  return (
    <Header>
      <HeaderContainer>
        <Link
          onClick={() => {
            setActive([true, false, false]);
          }}
          className="link"
          to="compose"
        >
          <HeaderTabs active={active[0]}>
            Send A Private Message
          </HeaderTabs>
        </Link>
        <Link
          onClick={() => {
            setActive([false, true, false]);
          }}
          className="link"
          to="/messages/inbox"
        >
          <HeaderTabs active={active[1]}>
            {' '}
            Inbox
          </HeaderTabs>
        </Link>
        <Link
          onClick={() => {
            setActive([false, false, true]);
          }}
          className="link"
          to="sent"
        >
          <HeaderTabs active={active[2]}>Sent</HeaderTabs>
        </Link>
      </HeaderContainer>
    </Header>
  );
}

export default MessagesHeader;
