import { Box } from '@mui/material';
import { useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Select, SelectBox, Selected, SelectItem,
} from './style';
/**
 * More icon
 * @return {React.Component} - More icon
 */
export default function SuggestionSort() {
  const [showList1, setShowList1] = useState(false);
  const [type, setType] = useState('');

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
                {type}
              </Selected>
            </Box>
            <ExpandMoreIcon />
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox data-testid="items">
        <SelectItem onClick={() => { setType('None (Recommended)'); }} condition={(type === 'None (Recommended)')}>None (Recommended)</SelectItem>
        <SelectItem onClick={() => { setType('Best'); }} condition={(type === 'Best')}>Best</SelectItem>
        <SelectItem onClick={() => { setType('Old'); }} condition={(type === 'Old')}>Old</SelectItem>
        <SelectItem onClick={() => { setType('Top'); }} condition={(type === 'Top')}>Top</SelectItem>
        <SelectItem onClick={() => { setType('Q&A'); }} condition={(type === 'Q&A')}>Q&A</SelectItem>
        <SelectItem onClick={() => { setType('Live (Beta)'); }} condition={(type === 'Live (Beta)')}>Live (Beta)</SelectItem>
        <SelectItem onClick={() => { setType('Controvesial'); }} condition={(type === 'Controvesial')}>Controvesial</SelectItem>
        <SelectItem onClick={() => { setType('New'); }} condition={(type === 'New')}>New</SelectItem>
      </SelectBox>
      )}
    </>

  );
}
