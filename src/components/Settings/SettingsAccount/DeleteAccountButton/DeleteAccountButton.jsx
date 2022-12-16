import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import {
  IconClose, Contanier, Header, Pargraph,
  PargraphSmall, TeaxArea, CancelButton,
  Input, CheckBox, CheckText, Footer, SaveBtn,
} from './styles';

function DeleteAccountButton({ setOpenPass }) {
  const [checked, setChecked] = useState(false);
  const [condition, setCondition] = useState(false);
  const checkSubmission = () => {
    if (condition) {
      setCondition(true);
    }
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
      <Input placeholder="UserName" />
      <Input placeholder="Password" />
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
        <SaveBtn variant="contained" condition={condition} onClick={() => { checkSubmission(); }}>Save email</SaveBtn>
      </Footer>
    </Contanier>
  );
}

export default DeleteAccountButton;
