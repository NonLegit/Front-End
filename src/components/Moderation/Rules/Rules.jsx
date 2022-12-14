import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AddRule from './AddRule/AddRyle';
import Entity from './Entity/Entity';
import {
  AboutDisc,
  AboutString,
  Add,
  AddFlair,
  Header,
  IconBtn,
  LeftAlighne,
  StyledTooltip, TotalContainer,
} from './style';

const rows = [
  {
    title: 'Rule 1',
    description: 'stringssssssssss',
    defaultName: 'string',
    appliesTo: 'Posts and comments',
    createdAt: 'Tue, Oct 16, 54908, 06:33:20 PM GMT+02:00',
  },
  {
    title: 'Rule 2',
    description: 'stringsaaaaaaa',
    defaultName: 'string',
    appliesTo: 'Posts ',
    createdAt: 'Tue, Oct 16, 54908, 06:33:20 PM GMT+02:00',
  },
];

export default function Rules() {
  return (
    <TotalContainer>
      <AddFlair>
        <Add onClick={() => { const ele = document.getElementById('add'); ele.click(); }}>Add Rule</Add>
        <AddRule />
      </AddFlair>
      <LeftAlighne>
        <Header>
          <AboutString>
            Rules
            <StyledTooltip
              title="Learn more"
            >
              <IconBtn>
                <ErrorOutlineIcon color="primary" sx={{ transform: 'rotate(180deg)', paddingTop: '5px' }} />
              </IconBtn>
            </StyledTooltip>
          </AboutString>
          <AboutDisc>
            These are rules that visitors must follow to participate.
            They can be used as reasons to report or ban posts,
            comments, and users. Communities can have a maximum of 15 rules.
          </AboutDisc>
        </Header>
        <TotalContainer>
          {rows.map((row, index) => (
            <Entity row={row} index={index} />
          ))}
        </TotalContainer>
      </LeftAlighne>
    </TotalContainer>
  );
}
