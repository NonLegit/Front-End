import { Link } from 'react-router-dom';
import { Header, HeaderTabs, HeaderContainer } from './style';
/**
 * - Message Inbox Bar
 * - header of Inbox message page
 *  @component
 *  @return {React.Component} - Message Inbox Bar
 */
function MessageInboxBar() {
  const pathArray = window.location.pathname.split('/');

  return (
    <Header>
      <HeaderContainer>
        <Link
          className="link"
          to="/messages/inbox"
        >
          <HeaderTabs active={pathArray[2] === 'inbox'}>
            All
          </HeaderTabs>
        </Link>
        <Link
          className="link"
          to="/messages/unread"
        >
          <HeaderTabs active={pathArray[2] === 'unread'}>
            {' '}
            Unread
          </HeaderTabs>
        </Link>
        <Link
          className="link"
          to="/messages/messages"
        >
          <HeaderTabs active={pathArray[2] === 'messages'}>
            Messages
          </HeaderTabs>
        </Link>
        <Link
          className="link"
          to="/messages/selfreply"
        >
          <HeaderTabs active={pathArray[2] === 'selfreply'}>
            Post Replies
          </HeaderTabs>
        </Link>
      </HeaderContainer>
    </Header>
  );
}

export default MessageInboxBar;
