import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { StyledTabs } from './styles';
import CommunitiesTab from '../CommunitiesTab/CommunitiesTab';

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
        <TabPanel value="1">Posts</TabPanel>
        <TabPanel value="2" sx={{ width: '100%', padding: '20px 0px 0px 0px', display: 'flex' }}>
          <CommunitiesTab title={title} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
