import {
  Box,
} from '@mui/material';

import { FilterBox, FilterText } from './styles';

/**
 * left side bar on top communities
 *
 * @component Filter
 * @property {number} numItems - number of posts in the page
 * @property {number} selected - number of selected elements
 * @returns {React.Component} Filter
 */
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
