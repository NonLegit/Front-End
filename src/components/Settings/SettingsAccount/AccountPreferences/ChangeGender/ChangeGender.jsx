import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Divider, Box,
} from '@mui/material';
import { useState } from 'react';
import {
  Button, ContentHeader, Content, ContentSubHeader, AntSwitch,
} from '../../../styles';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './styles';

function ChangeGender() {
  const [gender, setgender] = useState('man');
  const [open, setOpen] = useState(false);
  return (
    <Button>
      <Content>
        <ContentHeader>
          Gender
        </ContentHeader>
        <ContentSubHeader>
          Reddit will never share this information and only uses it to improve what content you see.
        </ContentSubHeader>
      </Content>
      <AntSwitch>
        <Box position="relative" display="flex">
          <ClickAwayListener onClickAway={() => { setOpen(false); }}>
            <Fab
              sx={{ color: '#0079d3', fontWeight: 'bold', fontSize: '12px' }}
              size="small"
              onClick={() => { setOpen(!open); }}
            >
              {gender}
              <ArrowDropDownIcon sx={{ color: 'black' }} />
            </Fab>
          </ClickAwayListener>
          <ShowMoreList
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            display={(open === false ? 'none' : 'block')}
          >
            <ListItemButton onClick={() => { setgender('man'); setOpen(!open); }}>
              <ShowMoreListItemText Condition={(gender === 'man').toString()}>
                Man
              </ShowMoreListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => { setgender('woman'); setOpen(!open); }}>
              <ShowMoreListItemText Condition={(gender === 'woman').toString()}>
                Woman
              </ShowMoreListItemText>
            </ListItemButton>
          </ShowMoreList>
        </Box>
      </AntSwitch>
    </Button>
  );
}

export default ChangeGender;
