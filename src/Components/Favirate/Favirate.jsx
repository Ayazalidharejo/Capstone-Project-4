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
import { Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from '../../Slices/Addtocart/Addtocart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function TemporaryDrawer(props) {
const Favirate =useSelector((state) => state.Favirate.Favitaes)
  console.log(Favirate);
  const dispach =useDispatch()
  
const{pen,toggleDrawe}=props
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawe(false)}>
   
      <Divider />
     
    </Box>
  );
  

  return (
    <div>
   
      <Drawer open={pen} onClose={toggleDrawe(false)}>
        <Typography className='text-center'> Favirate.... </Typography>
{Favirate.map((item)=>{
  return(
    <Box className="d-flex align-items-center justify-content-between">
    <img className='my-2' style={{minWidth:"60px",maxWidth:"60px"}} src={item?.strMealThumb} alt="" />
    <Typography>
  {item?.strMeal.length > 20 ? `${item?.strMeal.slice(0, 20)}...` : item?.strMeal}
</Typography>
     <Tooltip title="Add to Cart" placement="top">
            <Button  onClick={()=>(dispach(Addtocart(item)))} >
            <AddShoppingCartIcon
              sx={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "gray",
                "&:hover": { color: "green" },
              }}
              
            />
            </Button>
          </Tooltip>
    </Box>
  )
})}
        {DrawerList}
      </Drawer>
    </div>
  );
}
