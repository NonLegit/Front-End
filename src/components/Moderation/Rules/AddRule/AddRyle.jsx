import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Dialog, Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  Add,
  Cancel,
  Container,
  Count,
  Disc,
  FullDiscTextArea,
  Lable, TextArea, Title, TitleString,
} from './style';
import RadioBtn from './Radio/Radio';

export default function AddRule() {
  const [open, setOpen] = React.useState(false);
  const [can, setCan] = React.useState(false);

  const [count, setCount] = React.useState(100);
  const [count2, setCount2] = React.useState(100);
  const [count3, setCount3] = React.useState(500);

  const [type, setType] = React.useState('Posts&comments');

  React.useEffect(() => {
    if (count < 100) { setCan(true); } else { setCan(false); }
    console.log(can);
  }, [count]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const myType = (t) => {
    setType(t);
    console.log(type);
  };
  const check = (e) => {
    const ele = e?.target?.value;
    if (100 - ele.length >= 0) { setCount(100 - ele.length); }
  };
  const check2 = (e) => {
    const ele = e?.target?.value;
    if (100 - ele.length >= 0) { setCount2(100 - ele.length); }
  };
  const check3 = (e) => {
    const ele = e?.target?.value;
    if (500 - ele.length >= 0) { setCount3(500 - ele.length); }
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ display: 'none' }} id="add">
        Open form dialog
      </Button>
      <Container>
        <Dialog open={open} onClose={handleClose} sx={{ '& .MuiPaper-root': { width: '500px' } }}>
          <Title>
            <TitleString>Add rule</TitleString>
            <IconButton onClick={handleClose}><CloseIcon /></IconButton>
          </Title>
          <Divider />
          <DialogContent>
            <DialogContentText>
              <Lable>Rule</Lable>
            </DialogContentText>
            <TextArea
              placeholder='Rule displayed (e.g. "No photos")'
              onChange={check}
              onInput={(e) => {
                // eslint-disable-next-line radix
                e.target.value = e.target.value.slice(0, 100);
              }}
            />
            <Count
              condition={(count === 0).toString()}
            >
              {count}
              {' '}
              Characters remaining
            </Count>
            <RadioBtn myType={myType} />
            <DialogContentText>
              <Lable marginTop="-19px">Report reason</Lable>
              <Disc>Defaults to rule name if left blank</Disc>
            </DialogContentText>
            <TextArea
              placeholder='Reason rule is broken (e.g. "This is a photos")'
              onChange={check2}
              onInput={(e) => {
                // eslint-disable-next-line radix
                e.target.value = e.target.value.slice(0, 100);
              }}
            />
            <Count
              condition={(count2 === 0).toString()}
            >
              {count2}
              {' '}
              Characters remaining
            </Count>
            <DialogContentText>
              <Lable marginTop="11px">Full description</Lable>
            </DialogContentText>
            <FullDiscTextArea
              placeholder="Enter the Full description of the rule"
              onChange={check3}
              onInput={(e) => {
                // eslint-disable-next-line radix
                e.target.value = e.target.value.slice(0, 500);
              }}
            />
            <Count
              condition={(count3 === 0).toString()}
            >
              {count3}
              {' '}
              Characters remaining
            </Count>
          </DialogContent>
          <DialogActions>
            { (can)
              ? (
                <>
                  <Cancel onClick={handleClose}>Cancel</Cancel>
                  <Add onClick={handleClose}>Add Rule</Add>
                </>
              )
              : (
                <>
                  <Cancel disabled condition={!can}>Cancel</Cancel>
                  <Add disabled condition={!can}>Add Rule</Add>
                </>
              )}
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}
