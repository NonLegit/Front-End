import {
  Box,
} from '@mui/material';

import { FilterBox, FilterText } from './styles';

function Filter(props) {
  const { numItems, selected } = props;

  return (
    <FilterBox>
      <Box sx={{ display: 'flex' }}>
        <FilterText variant="caption">
          Items 1-
          {numItems || '0'}
        </FilterText>
        <FilterText variant="caption">.</FilterText>
        <FilterText variant="caption">
          {selected || '0'}
          {' '}
          selected
        </FilterText>
      </Box>
    </FilterBox>
  );
}

export default Filter;
