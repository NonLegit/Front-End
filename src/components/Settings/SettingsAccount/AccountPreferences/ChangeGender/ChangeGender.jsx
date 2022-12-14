import ClickAwayListener from '@mui/material/ClickAwayListener';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import
{
  Divider, Box,
} from '@mui/material';
import { useState, useContext } from 'react';
import {
  Button, ContentHeader, Content, ContentSubHeader, AntSwitch,
} from '../../../styles';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './styles';
import { SettingsContext } from '../../../../../contexts/SettingsProvider';
import { settingsPost } from '../../../settingsServer';

function ChangeGender() {
  const {
    prefs, setPrefs,
  } = useContext(SettingsContext);
  const [open, setOpen] = useState(false);

  const handleChange = async (gender) => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, gender }));
    setOpen(!open);
    const message = await settingsPost({ ...prefs, gender });
    if (message !== '') { alert(message); }
  };

  return (
    <Button data-testid="settings-cahnge-gender">
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
              {prefs?.gender}
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
            <ListItemButton onClick={() => {
              handleChange('male');
            }}
            >
              <ShowMoreListItemText Condition={(prefs?.gender === 'male').toString()}>
                Mele
              </ShowMoreListItemText>
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => { handleChange('female'); }}>
              <ShowMoreListItemText Condition={(prefs?.gender === 'female').toString()}>
                Female
              </ShowMoreListItemText>
            </ListItemButton>
          </ShowMoreList>
        </Box>
      </AntSwitch>
    </Button>
  );
}

export default ChangeGender;
