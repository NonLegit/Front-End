import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { StyledTabs } from './styles';
import CommunitiesHeader from '../CommunitiesHeader/CommunitiesHeader';
import Community from '../Community/Community';

export default function NavButtons(props) {
  const { title } = props;
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <StyledTabs
          onChange={handleChange}
        >
          <Tab
            disableRipple
            label="Posts"
            value="1"
          />
          <Tab
            disableRipple
            label="Communities"
            value="2"
          />
        </StyledTabs>
        <TabPanel value="1">Item one</TabPanel>
        <TabPanel value="2" sx={{ padding: '20px 0px 0px 0px' }}>
          <CommunitiesHeader explore={title} />
          <Community />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
