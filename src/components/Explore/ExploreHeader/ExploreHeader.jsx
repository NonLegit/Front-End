/* eslint-disable import/no-cycle */
import { Typography, Box } from '@mui/material';
import * as React from 'react';
import { HeaderContainer, StyledLink } from './styles';
import NavButtons from '../NavButtons/NavButtons';
import { headerSubTitleContext } from '../CommunitiesContainer/CommunitiesContainer';

function ExploreHeader(props) {
  const {
    headerSubTitle,
  } = React.useContext(headerSubTitleContext);
  const { title } = props;
  return (
    <HeaderContainer>
      <Box sx={{ padding: '16px 0px' }}>
        <Typography
          fontFamily="sans-serif"
          fontSize="22px"
          color="#1A1A1B"
          fontWeight={600}
        >
          {title}
        </Typography>
        <StyledLink>
          {headerSubTitle}
        </StyledLink>
      </Box>
      <NavButtons title={title} />
    </HeaderContainer>
  );
}

export default ExploreHeader;
