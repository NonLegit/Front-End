import { useCookies } from 'react-cookie';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import {
  IconClose, Contanier, Header, Pargraph,
  PargraphSmall, TeaxArea, CancelButton,
  Input, CheckBox, CheckText, Footer, SaveBtn,
} from './styles';
import { deleteAccount } from './deleteAccountServer';
/**
 * - Delete Account
 * - Delete Account popup
 *  @component
 *  @property {function} username - username of user
 *  @property {Boolean} password - password of user
 *  @return {React.Component} - popup of delete account
 */
function DeleteAccountButton({ setOpenPass }) {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies, removeCookie] = useCookies(['redditUser']);

  const [checked, setChecked] = useState(false);
  // const [condition, setCondition] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const checkSubmission = () => {
    deleteAccount(username, password, removeCookie);
    // console.log(condition);
    // if (condition && username?.length > 0 && password?.length > 0) {
    //   setCondition(true);
    // }
    console.log('checkSubmission');
    console.log(username);
    console.log(password);
    console.log(checked);
    // Call End Point
  };

  return (
    <Contanier>
      {' '}
      <IconClose
        aria-label="close"
        onClick={() => { setOpenPass(false); }}
      >

        <CloseIcon />
      </IconClose>
      <Header>Delete account</Header>
      <Pargraph>We are sorry to see you go</Pargraph>
      <Pargraph>
        Once you delete your account, your profile and username are permanently removed from Reddit and your posts, comments, and messages are disassociated (not deleted) from your account unless you delete them beforehand
      </Pargraph>
      <PargraphSmall>HELP IMPROVE REDDIT (OPTIONAL)</PargraphSmall>
      <div>
        <TeaxArea placeholder="let us know why you are leaving" />
      </div>
      <PargraphSmall>
        VERIFY YOUR IDENTITY
      </PargraphSmall>
      <Input
        placeholder="UserName"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <CheckBox>
        <Checkbox
          disableRipple
          checked={checked}
          onChange={() => { setChecked(!checked); }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <CheckText>
          I understand that deleted accounts arenot recoverable
        </CheckText>
      </CheckBox>
      <Footer>
        <CancelButton>Cancel</CancelButton>
        <SaveBtn
          variant="contained"
          condition={checked && username?.length > 0 && password?.length > 0}
          onClick={() => {
            console.log(username);
            console.log(password);
            checkSubmission();
          }}
        >
          Delete Account
        </SaveBtn>
      </Footer>
    </Contanier>
  );
}

export default DeleteAccountButton;
