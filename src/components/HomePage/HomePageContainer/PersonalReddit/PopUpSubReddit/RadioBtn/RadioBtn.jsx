import {
  FormControl, FormControlLabel, Radio, RadioGroup,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HttpsIcon from '@mui/icons-material/Https';
import {
  Cont, ContUp, Disc, Name, SelectHeader,
} from './style';

function RadioBtn(props) {
  const { myType } = props;
  return (
    <>
      <SelectHeader> Community type</SelectHeader>
      <FormControl sx={{ marginBottom: '30px' }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          id="type"
          defaultValue="Public"
          onChange={(e) => myType(e.target.value)}
        >
          <ContUp condition2="true">
            <Cont>
              <FormControlLabel value="Public" control={<Radio />} sx={{ margin: 0 }} />
              <PersonIcon sx={{ color: 'gray' }} />
              <Name sx={{ margin: 1 }}>Public</Name>
            </Cont>
            <Disc sx={{ pt: 0.5 }}>Anyone can view, post, and comment to this community</Disc>
          </ContUp>
          <ContUp>
            <Cont>
              <FormControlLabel value="Restricted" control={<Radio />} sx={{ margin: 0 }} />
              <VisibilityIcon sx={{ color: 'gray' }} />
              <Name sx={{ margin: 1 }}>Restricted</Name>
            </Cont>
            <Disc sx={{ pt: 0.5 }}>
              Anyone can view this community, but only approved users can post
            </Disc>
          </ContUp>
          <ContUp condition="true">
            <Cont>
              <FormControlLabel value="Private" control={<Radio />} sx={{ margin: 0 }} />
              <HttpsIcon sx={{ color: 'gray' }} />
              <Name sx={{ margin: 1 }}>Private</Name>
            </Cont>
            <Disc sx={{ pt: 0.5 }}>
              Only approved users can view and submit to this community
            </Disc>
          </ContUp>
        </RadioGroup>
      </FormControl>
    </>
  );
}
export default RadioBtn;
