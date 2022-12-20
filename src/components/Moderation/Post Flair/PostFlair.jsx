import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AboutString, Add, AddFlair, Body, IconBtn, LeftAlighne, POSTFLAIRPREVIEW,
  StyledTooltip, TableHeader, TableHeaderCell, TableHeaderCellContainer, TableHeaderCellRes, TotalContainer,
} from './style';
import Entity from './Entity/Entity';
import NewFlair from './NewFlair/NewFlair';
import useFetch from '../../SubReddit/SideBar/Flirt/flirtServer';

/**
 * Post Flair
 * @component
 * @property  {function} handleClick disable all buttoms
 * @property  {function} trueCan enable all buttoms
 * @property  {function} save clase form and enable add
 * @property  {function} cancel clase form and enable add
 *
 * @return {React.Component} - Post Flair
 */
export default function PostFlair() {
  const [can, setCan] = useState(true);
  const [add, setAdd] = useState(false);
  const [flair, setFalir] = useState([]);
  const { subReddit } = useParams();
  const [data, dataError] = useFetch(subReddit);
  console.log(data);

  const value = useMemo(() => ({ data, dataError }), [data, dataError]);
  console.log(value);

  useEffect(() => {
    setFalir(data);
    console.log(dataError);
  }, [flair, data]);

  const handleClick = () => {
    setCan(false);
  };
  const trueCan = () => {
    setCan(true);
  };
  const save = () => {
    setCan(true);
    setAdd(false);
  };
  const cancel = () => {
    setCan(true);
    setAdd(false);
  };
  return (
    <TotalContainer>
      <AddFlair>
        {can
          ? <Add onClick={() => { setCan(false); setAdd(true); }}>Add Flair</Add>
          : <Add disabled condition={!can}>Add Flair</Add>}
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
                <TableHeaderCellRes align="center">
                  CSS CLASS
                  <StyledTooltip
                    title="CSS classes determine the styling for flair in old Reddit"
                  >
                    <IconBtn>
                      <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', color: 'gray', paddingTop: '5px' }} />
                    </IconBtn>
                  </StyledTooltip>
                </TableHeaderCellRes>
                <TableHeaderCellRes align="center">
                  SETTINGS
                  <StyledTooltip
                    title="Shows if flair is mod-only, user editable, allows text, or allows emojis"
                  >
                    <IconBtn>
                      <ErrorOutlineIcon sx={{ transform: 'rotate(180deg)', color: 'gray', paddingTop: '5px' }} />
                    </IconBtn>
                  </StyledTooltip>
                </TableHeaderCellRes>
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
              {flair?.map((row) => (
                <Entity row={row} handleClick={handleClick} can={can} trueCan={trueCan} />
              ))}
            </Body>
          </TableHeader>
        </TableContainer>
        {add
        && <NewFlair save={save} cancel={cancel} />}
      </LeftAlighne>
    </TotalContainer>
  );
}
