import { Box } from '@mui/material';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Select, SelectBox, Selected, SelectItem,
} from './style';
/**
 * Suggestion Sort
 * @component
 * @property  {function} handleClick1 oggle the list when click
 * @property  {function} handleClickAway1 handle disable the list when click away
 *
 * @return {React.Component} - Suggestion Sort
 */
export default function SuggestionSort(props) {
  const { suggestedSort, setSuggestedSort } = props;
  const [showList1, setShowList1] = useState(false);
  // const [type, setType] = useState({ suggestedSort });

  // toggle the list when click
  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };

  // handle disable the list when click away
  const handleClickAway1 = () => {
    setShowList1(false);
  };
  return (
    <>
      <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box data-testid="sort" sx={{ display: 'flex', alignItems: 'center' }} onClick={() => { handleClick1(); }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column' }}>
              <Selected>
                {suggestedSort}
              </Selected>
            </Box>
            <ExpandMoreIcon />
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox data-testid="items">
        {/* <SelectItem onClick={() => { setType('None (Recommended)'); }} condition={(type === 'None (Recommended)')}>None (Recommended)</SelectItem> */}
        <SelectItem onClick={() => { setSuggestedSort('best'); }} condition={(suggestedSort === 'best')}>Best</SelectItem>
        <SelectItem onClick={() => { setSuggestedSort('old'); }} condition={(suggestedSort === 'old')}>Old</SelectItem>
        <SelectItem onClick={() => { setSuggestedSort('top'); }} condition={(suggestedSort === 'top')}>Top</SelectItem>
        {/* <SelectItem onClick={() => { setType('Q&A'); }} condition={(type === 'Q&A')}>Q&A</SelectItem> */}
        {/* <SelectItem onClick={() => { setType('Live (Beta)'); }} condition={(type === 'Live (Beta)')}>Live (Beta)</SelectItem> */}
        {/* <SelectItem onClick={() => { setType('Controvesial'); }} condition={(type === 'Controvesial')}>Controvesial</SelectItem> */}
        <SelectItem onClick={() => { setSuggestedSort('new'); }} condition={(suggestedSort === 'new')}>New</SelectItem>
      </SelectBox>
      )}
    </>

  );
}
