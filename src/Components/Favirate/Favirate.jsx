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
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'react-loader-spinner';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Addtocart } from '../../Slices/Addtocart/Addtocart';

function TemporaryDrawer(props) {
  const {handleDrawerTogglee,isDrawerOpen}=props
  // const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // const handleDrawerToggle = (newOpen) => () => {
  //   setIsDrawerOpen(newOpen);
  // };
  const { Favitaes } = useSelector((state) => state.Favirate);
  console.log(Favitaes);
  const usedispach =useDispatch()
  

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerTogglee(false)}>
     
      <Divider />
    
    </Box>
  );

  return (
    <div>
    
   
      <Drawer open={isDrawerOpen} onClose={handleDrawerTogglee(false)}>
        {drawerContent}
        <Typography className='text-center mt-3'> Favirate </Typography>



      {Favitaes?.map((item)=>{
        return(
          <Box className="d-flex align-items-center">
            
          <img className='my-2 mx-2' style={{width:"80px"}} src={item?.strMealThumb
} alt="" />
          
          <Typography>
          {item?.strMeal?.length > 10 ? `${item?.strMeal.slice(0, 10)}...` : item?.strMeal}

          </Typography>
          <ShoppingCartIcon onClick={()=>(usedispach(Addtocart(item)))} />
          </Box>
        )
      })}
      </Drawer>
     
      
    </div>
  );
}

export default TemporaryDrawer;
