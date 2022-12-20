// import React from 'react';
import { Typography, Box } from '@mui/material';
import { StyledSearchResultBar } from './styles';
import { UserMngButton } from '../styles';

function SearchResultBar(props) {
  const {
    resultNumber, filteredData, childToParent,
  } = props;
  return (
    <StyledSearchResultBar>
      <Box display="flex">
        <Typography
          fontSize="14px"
          fontWeight={600}
          color="#1C1C1C"
          paddingLeft="15px"
        >
          {resultNumber}
          {' '}
          search result for&nbsp;
        </Typography>
        <Box display="flex">
          {
              filteredData.map((users) => {
                const { user } = users;
                return (
                  <Typography
                    color="#0079D3"
                    fontSize="14px"
                    fontWeight={500}
                  >
                    {`'${user.userName}'`}
                    &nbsp;
                  </Typography>
                );
              })
      }
        </Box>
      </Box>
      <UserMngButton onClick={() => childToParent('')}>
        See all
      </UserMngButton>
    </StyledSearchResultBar>
  );
}

export default SearchResultBar;
