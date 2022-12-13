import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  AboutString,
  Actions,
  Add,
  AddFlair,
  Body,
  BodyCell,
  BodyFirstCell,
  Filter,
  IconBtn,
  LeftAlighne,
  POSTFLAIRPREVIEW,
  StyledTooltip, TableHeader, TableHeaderCell, TableHeaderCellContainer, Text, TotalContainer,
} from './style';

function copied() {
  alert('text copied');
}
const rows = [
  {
    textColor: '#0079d3',
    backgroundColor: '#f6f7f8',
    text: 'flair1',
    cssClass: 'c1',
    id: '1',
  },
  {
    textColor: 'red',
    backgroundColor: 'green',
    text: 'flair1',
    cssClass: 'c2',
    id: '2',
  },
];

export default function PostFlair() {
  return (
    <TotalContainer>
      <AddFlair>
        <Add>Add Flair</Add>
      </AddFlair>
      <LeftAlighne>
        <AboutString>
          Post flair management
          <StyledTooltip
            title="Learn more"
          >
            <IconBtn>
              <ErrorOutlineIcon color="primary" sx={{ transform: 'rotate(180deg)', paddingTop: '5px' }} />
            </IconBtn>
          </StyledTooltip>
        </AboutString>
        <TableContainer component={Paper}>
          <TableHeader aria-label="simple table">
            <TableHead>
              <TableHeaderCellContainer>
                <POSTFLAIRPREVIEW>POST FLAIR PREVIEW</POSTFLAIRPREVIEW>
                <TableHeaderCell align="center">
                  CSS CLASS
                  <StyledTooltip
                    title="CSS classes determine the styling for flair in old Reddit"
                  >
                    <IconBtn>
                      <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', color: 'gray', paddingTop: '5px' }} />
                    </IconBtn>
                  </StyledTooltip>
                </TableHeaderCell>
                <TableHeaderCell align="center">
                  SETTINGS
                  <StyledTooltip
                    title="Shows if flair is mod-only, user editable, allows text, or allows emojis"
                  >
                    <IconBtn>
                      <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', color: 'gray', paddingTop: '5px' }} />
                    </IconBtn>
                  </StyledTooltip>
                </TableHeaderCell>
                <TableHeaderCell align="center">
                  FLAIR ID
                  <StyledTooltip
                    title="Use this ID when configuring automod to assign flair"
                  >
                    <IconBtn>
                      <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', color: 'gray', paddingTop: '5px' }} />
                    </IconBtn>
                  </StyledTooltip>

                </TableHeaderCell>
              </TableHeaderCellContainer>
            </TableHead>
            <Body>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <BodyFirstCell>
                    <Text color={row.textColor} backgroundColor={row.backgroundColor}>
                      {row.text}
                    </Text>
                  </BodyFirstCell>
                  <BodyCell align="center">{row.cssClass}</BodyCell>
                  <BodyCell align="center" />
                  <BodyCell align="center">
                    <Actions>
                      <Filter onClick={() => { navigator.clipboard.writeText(row.id); copied(); }}>
                        Copy ID
                      </Filter>
                      <Filter>edit</Filter>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Actions>
                  </BodyCell>
                </TableRow>
              ))}
            </Body>
          </TableHeader>
        </TableContainer>
      </LeftAlighne>
    </TotalContainer>
  );
}
