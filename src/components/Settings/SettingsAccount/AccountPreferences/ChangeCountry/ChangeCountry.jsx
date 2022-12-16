import {
  Box, Divider,
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useAlert } from 'react-alert';
import countryList from 'react-select-country-list';
import { useState, useMemo, useContext } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Button, ContentHeader, Content, ContentSubHeader, AntSwitch,
} from '../../../styles';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './styles';
import { SettingsContext } from '../../../../../contexts/SettingsProvider';
import { settingsPost } from '../../../settingsServer';
/**
 * - ChangeCountry
 * - Change Country of user in settings page
 *  @component
 *  @property {setPrefs} setValue set perfs it will be Coutry of user
 *  @property {prefs} value perfs of user
 *  @property {Boolean} open bool to open list or close
 *  @property {function} handleChangeCoutry handel when
 */

function ChangeCountry() {
  const {
    prefs, setPrefs,
  } = useContext(SettingsContext);
  const alert = useAlert();

  const [open, setOpen] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const handleChangeCoutry = async (country) => {
    setPrefs((oldPrefs) => ({ ...oldPrefs, country }));

    const [text, type] = await settingsPost({ ...prefs, country });
    if (text !== '') {
      // setMessage(text);
      // setStats(type);
      //  setOpenAlert(true);
      alert.show({ text, type });
    }
  };

  return (
    <Button sx={{ flexDirection: 'column' }}>
      <Content>
        <ContentHeader>
          Country
        </ContentHeader>
        <ContentSubHeader>
          This is your primary location
        </ContentSubHeader>
      </Content>
      <AntSwitch sx={{ justifyContent: 'flex-start' }}>
        <Box position="relative" display="flex">
          <ClickAwayListener onClickAway={() => { setOpen(false); }}>
            <Fab
              sx={{ color: '#0079d3', fontWeight: 'bold', fontSize: '12px' }}
              size="small"
              onClick={() => { setOpen(!open); }}
            >
              {prefs?.country}
              <ArrowDropDownIcon sx={{ color: 'black' }} />
            </Fab>
          </ClickAwayListener>
          <ShowMoreList
            sx={{ height: '200px' }}
            display={(open === false ? 'none' : 'block')}
          >
            {
                options.map((e, index) => (
                  <div key={`${index + 0}`}>
                    <ListItemButton onClick={() => { handleChangeCoutry(e.label.toLowerCase()); setOpen(!open); }}>
                      <ShowMoreListItemText Condition={(prefs?.country.toLowerCase() === e.label.toLowerCase()).toString()}>
                        {e.label}
                      </ShowMoreListItemText>
                    </ListItemButton>
                    <Divider sx={{ margin: '5px' }} />
                  </div>
                ))
                      }
          </ShowMoreList>
        </Box>
      </AntSwitch>
    </Button>
  );
}

export default ChangeCountry;
