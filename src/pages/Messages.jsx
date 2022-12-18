import { Outlet } from 'react-router-dom';
import MessageFooter from '../components/Messages/MessageFooter/MessageFooter';
import MessagesHeader from '../components/Messages/MessagesHeader/MessagesHeader';
import { Continer } from '../components/Messages/MessageForm/styles';

function Messages() {
  return (
    <Continer>
      <MessagesHeader />
      <Outlet />
      <MessageFooter />
    </Continer>
  );
}

export default Messages;
