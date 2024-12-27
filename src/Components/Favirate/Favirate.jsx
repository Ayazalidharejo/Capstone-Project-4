import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';

function TemporaryDrawer(props) {
  const {handleDrawerTogglee,isDrawerOpen}=props
  // const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // const handleDrawerToggle = (newOpen) => () => {
  //   setIsDrawerOpen(newOpen);
  // };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerTogglee(false)}>
     
      <Divider />
    
    </Box>
  );

  return (
    <div>
      {/* <Button variant="contained" onClick={handleDrawerTogglee(true)}>
        Open drawer
      </Button> */}
      <Drawer open={isDrawerOpen} onClose={handleDrawerTogglee(false)}>
        {drawerContent}
        <Typography className='text-center mt-3'> Favirate </Typography>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
