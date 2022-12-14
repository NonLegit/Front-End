import { IconButton } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import { useState } from 'react';
import {
  Actions,
  Details, ElementBox, MoreData, MoreDetails, MoreDetailsHeader, Num, Row, Text,
} from './style';

function Entity(props) {
  const {
    row, index,
  } = props;
  const [expand, setExpand] = useState();

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <>
      <Row>
        <Actions>
          <Num>{index + 1}</Num>
          <Text>{row.title}</Text>
        </Actions>
        <Actions>
          <IconButton><CreateIcon /></IconButton>
          <ElementBox>
            {expand ? <UnfoldLessOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />
              : <UnfoldMoreOutlinedIcon sx={{ rotate: '-45deg' }} onClick={() => { handleExpand(); }} />}
          </ElementBox>
        </Actions>
      </Row>
      {expand
      && (
      <MoreData>
        <Details>
          <MoreDetailsHeader>Report reason</MoreDetailsHeader>
          <MoreDetails>{row.title}</MoreDetails>
        </Details>
        <Details>
          <MoreDetailsHeader>APPLIES TO</MoreDetailsHeader>
          <MoreDetails>{row.appliesTo}</MoreDetails>
        </Details>
        <Details>
          <MoreDetailsHeader>CREATED</MoreDetailsHeader>
          <MoreDetails>{row.createdAt}</MoreDetails>
        </Details>
        <Details>
          <MoreDetailsHeader>FULL DESCRIPTION</MoreDetailsHeader>
          <MoreDetails>{row.description}</MoreDetails>
        </Details>
      </MoreData>
      )}
    </>
  );
}
export default Entity;
