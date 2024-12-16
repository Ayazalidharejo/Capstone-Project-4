import { Box, Button, Card, Grid, Tooltip, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./index.css"
const Restorentspage = () => {
    const [product, setproduct]=useState([])
console.log(product);

    useEffect(()=>{
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((response)=>setproduct(response.data.meals))
        .catch((error)=>console.log(error))
    },[])
    return (
        <Grid className='ms-5 container  pt-5'   container spacing={4}  >
       
       {product?.map((item) => {
  return (

    
    <Grid className='' item sx={3} md={3} lg={4} >
   

<Card  

className='rounded-2 '  >
    <div className='image-container'>
<img className='image '


  src={item?.strMealThumb} alt="" /> </div>
<Box className="d-flex align-items-center  "> <Tooltip title={item?.strMeal} placement="top-start">
<Typography  variant='h5' className='   ' >{ item?.strMeal.length > 9 ? `${item.strMeal.slice(0,9)}...` : item?.strMeal } </Typography>
</Tooltip>

<Box > 
    
<Tooltip title="Add to Cart"  placement="top">  <Button > <ShoppingCartIcon/> </Button>

</Tooltip>
<Tooltip title="Favirate"  placement="top">
<Button > <FavoriteIcon/> </Button>


</Tooltip>

<Tooltip title="View"  placement="top">

<Button > <VisibilityIcon/> </Button> 
</Tooltip>
</Box>
 </Box>

</Card>

    
    </Grid>
  );
})}
         
        </Grid>
      );
    };
     export default Restorentspage ;