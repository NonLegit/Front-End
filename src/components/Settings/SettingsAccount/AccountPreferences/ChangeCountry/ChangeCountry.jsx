import {
  Box, Divider,
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import countryList from 'react-select-country-list';
import { useState, useMemo } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Button, ContentHeader, Content, ContentSubHeader, AntSwitch,
} from '../../../styles';
import {
  ShowMoreList, ShowMoreListItemText, ListItemButton, Fab,
} from './styles';
/**
 * - ChangeCountry
 * - Change Country of user in settings page
 *  @component
 *  @property {function} setValue set Coutry of user
 *  @property {Object} value Coutry of user
 *  @property {Boolean} open bool to open list or close
 */
function ChangeCountry() {
  const [value, setValue] = useState('Egypt');
  const options = useMemo(() => countryList().getData(), []);
  const [open, setOpen] = useState(false);
  //   useEffect(() => { console.log(value); }, [value]);
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
              {value}
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
                    <ListItemButton onClick={() => { setValue(e.label); setOpen(!open); }}>
                      <ShowMoreListItemText Condition={(value === e.label).toString()}>
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
