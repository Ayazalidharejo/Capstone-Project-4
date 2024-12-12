import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Headerimg from "../../../images/headericon.svg"
import { Button } from '@mui/material';

 function Navbar() {
  return (
    <Box className="" sx={{ flexGrow: 1 }}>
      <AppBar  className="bg-success " position="static">
     
        
          
       
          <Box className="d-flex align-items-center justify-content-center">
            <img style={{width:"50px"}} src={Headerimg} alt="" />
            
            <Typography className='mx-2' variant="h6"  component="div">
          Do you need a business account?

          </Typography>
          <Button  className="bg-success" variant='contained'> SIGN UP NOW </Button>
          </Box>
        
       
      </AppBar>
    </Box>
  );
}
export default Navbar;