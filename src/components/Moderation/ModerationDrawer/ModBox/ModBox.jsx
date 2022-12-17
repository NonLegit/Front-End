import {
  List,
  ListItemText,
  ListItem,

} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ModListButton, NavbarBox, QueueTypography,
} from './styles';

function ModBox(props) {
  const { icon, headerText, arr } = props;
  const { subTitle } = useParams();
  const navigate = useNavigate();

  // navigate
  const handleClick = (subPage) => {
    navigate(`${subPage}`);
  };
  return (
    <>
      <NavbarBox>
        {icon}
        <QueueTypography>{headerText}</QueueTypography>
      </NavbarBox>
      <List sx={{ paddingBottom: 1, paddingTop: 0, marginBottom: 1 }}>
        {/* print all drawer elements */}
        {arr.map((text) => (
          <ListItem key={text} disablePadding>
            <ModListButton
              condition={(subTitle === text).toString()}
              onClick={() => { handleClick(text); }}
            >
              <ListItemText primary={text} />
            </ModListButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ModBox;
