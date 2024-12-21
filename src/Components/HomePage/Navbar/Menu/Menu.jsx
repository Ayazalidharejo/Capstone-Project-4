import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

 function BasicMenu(props) {

const {handleCloseer,oppen,handleClick,anchorEl}=props
  return (
    <div>
   
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={oppen}
        onClose={handleCloseer}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseer}>Profile</MenuItem>
        <MenuItem onClick={handleCloseer}>My account</MenuItem>
        <MenuItem onClick={handleCloseer}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default BasicMenu;