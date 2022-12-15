import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { Divider, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from 'react-router-dom';
import {
  Add,
  Cancel,
  Container,
  Count,
  Dial,
  DialCont,
  Disc,
  FullDiscTextArea,
  Lable, TextArea, Title, TitleString,
} from './style';
import RadioBtn from './Radio/Radio';
import PostRule from './PostRuleServer';
import EditRule from './EditRuleServer';
import DeleteRule from './DeleteServer';

export default function AddRule(props) {
  const { rule } = props;
  const [open, setOpen] = React.useState(false);
  const [can, setCan] = React.useState(false);

  const [count, setCount] = React.useState(100);
  const [count2, setCount2] = React.useState(100);
  const [count3, setCount3] = React.useState(500);
  const [edit, setEdit] = React.useState(false);

  const { subReddit } = useParams();

  const [type, setType] = React.useState('Posts&comments');

  React.useEffect(() => {
    if (rule) {
      setCount(rule?.title?.length);
      setCount2(rule?.defaultName?.length);
      setCount3(rule?.description?.length);
      setEdit(true);
    }
    if (count < 100) { setCan(true); } else { setCan(false); }
    console.log(can);
  }, [count, rule]);

  React.useEffect(() => {
    if (rule?.appliesTo) {
      setType(rule?.appliesTo);
    } else {
      setType('Posts&comments');
    }
  }, [rule]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const myType = (t) => {
    setType(t);
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

  const SendData = () => {
    const defaultName = document.getElementById('defaultName').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    console.log(title, defaultName, description);
    if (edit) {
      EditRule(subReddit, title, {
        defaultName,
        description,
        type,
      });
    } else {
      PostRule(`subreddits/${subReddit}/rules/${title}`, defaultName, description, type);
    }
    handleClose();
  };
  const DeleteData = () => {
    const title = document.getElementById('title').value;
    console.log(title);
    DeleteRule(subReddit, title);
    handleClose();
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ display: 'none' }} id="add">
        Open form dialog
      </Button>
      <Container>
        <Dial open={open} onClose={handleClose}>
          <Title>
            <TitleString>Add rule</TitleString>
            <IconButton onClick={handleClose}><CloseIcon /></IconButton>
          </Title>
          <Divider />
          <DialCont>
            <DialogContentText>
              <Lable>Rule</Lable>
            </DialogContentText>
            <TextArea
              defaultValue={rule?.title}
              id="title"
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
            <RadioBtn myType={myType} type={(rule?.appliesTo) ? rule?.appliesTo : 'Posts&comments'} />
            <DialogContentText>
              <Lable marginTop="-19px">Report reason</Lable>
              <Disc>Defaults to rule name if left blank</Disc>
            </DialogContentText>
            <TextArea
              id="defaultName"
              defaultValue={rule?.defaultName}
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
              id="description"
              defaultValue={rule?.description}
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
          </DialCont>
          <DialogActions>
            {(can)
              ? (
                (edit)
                  ? (
                    <>
                      <Cancel onClick={DeleteData}>Delete</Cancel>
                      <Add onClick={SendData}>Save</Add>
                    </>
                  )
                  : (
                    <>
                      <Cancel onClick={handleClose}>Cancel</Cancel>
                      <Add onClick={SendData}>Add Rule</Add>
                    </>
                  )
              )
              : (
                (edit)
                  ? (
                    <>
                      <Cancel disabled>Delete</Cancel>
                      <Add disabled>Save</Add>
                    </>
                  )
                  : (
                    <>
                      <Cancel disabled>Cancel</Cancel>
                      <Add disabled>Add Rule</Add>
                    </>
                  )
              )}
          </DialogActions>
        </Dial>
      </Container>
    </div>
  );
}
