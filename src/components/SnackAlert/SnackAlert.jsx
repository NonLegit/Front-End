import CloseIcon from '@mui/icons-material/Close';
import {
  Container, Close, Image, Info,
} from './styles';
/**
 * - Notifications Body
 * - fech notifications data from api
 *  @component
 * @param {Object} info - data of alert like message and sucess or fail
 * @return {React.Component} - Snack Alert
 */
function SnackAlert(info) {
  const message = info;
  console.log(message);
  return (
    <div style={message?.info.style}>
      <Container>
        <Close className="close" onClick={message?.info.close} type={message?.info.message?.type}>
          <CloseIcon className="icon" />
        </Close>
        <Info>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMfN2o-u82351CC0A0yOhqFvuCccfnTUA-Q&usqp=CAUs" />
          { message?.info.message?.text }
        </Info>
      </Container>
    </div>

  );
}

export default SnackAlert;
