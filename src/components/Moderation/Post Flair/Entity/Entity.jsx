import { IconButton, TableCell } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Actions, BodyCell, BodyFirstCell, BodyLastCell, Filter, Text,
} from './style';
import Edit from './EditFlair/Edit';
import DeleteFlair from './DeleteFlairServer';

/**
 * Entity of Flair
 * @component
 * @property  {function} copied copy id
 * @property  {function} Edited show enable form
 * @property  {function} save clase form and enable add
 * @property  {function} cancel clase form and enable add
 * @property  {function} handleClick open form
 * @property  {function} row entity
 *
 * @return {React.Component} - Entity of Flair
 */

function Entity(props) {
  const {
    row, handleClick, can, trueCan,
  } = props;
  const [show, setShow] = useState(false);
  const { subReddit } = useParams();

  function copied() {
    alert('text copied');
  }
  const Edited = () => {
    console.log('clicked');
    handleClick();
    setShow(true);
  };
  const save = () => {
    trueCan();
    setShow(false);
  };
  const cancel = () => {
    trueCan();
    setShow(false);
  };
  return (
    <>
      <TableRow
        key={row?.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <BodyFirstCell>
          <Text color={row?.textColor} backgroundColor={row?.backgroundColor}>
            {row?.text}
          </Text>
        </BodyFirstCell>
        <BodyCell align="center" />
        <BodyCell align="center" />
        <BodyLastCell align="center">
          <Actions>
            <Filter
              onClick={() => { navigator.clipboard.writeText(row?._id); copied(); }}
            >
              Copy ID
            </Filter>
            {(can)
              ? <Filter onClick={() => Edited()}>edit</Filter>
              : <Filter disabled condition={!can}>edit</Filter>}
            <IconButton onClick={() => { DeleteFlair(subReddit, row._id); }}>
              <DeleteIcon />
            </IconButton>
          </Actions>
        </BodyLastCell>
      </TableRow>
      {show
      && (
      <TableRow>
        <TableCell align="left" colSpan={4}>
          <Edit flair={row} save={save} cancel={cancel} />
        </TableCell>
      </TableRow>
      )}
    </>
  );
}
export default Entity;
