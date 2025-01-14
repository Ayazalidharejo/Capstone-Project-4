import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Stack, Button, Dialog, Card, CardContent, CardMedia, TextField, Tabs, Tab, InputAdornment } from '@mui/material';
import { Breadcrumbs, } from '@mui/material';
import { Icon } from '@iconify/react';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';



const ProductHeader = () => {
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [value, setValue] = useState(0); // for Tabs

  const location = useLocation();
  const [restaurant, setRestaurant] = useState({ image: '', name: '' });

  useEffect(() => {
    // Extract state passed from navigation
    if (location.state) {
      setRestaurant({
        image: location.state.image || 'defaultImage.jpg',
        name: location.state.name || 'Default Name'
      });
    }
  }, [location.state]);

  const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
  const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);
  const handleTabChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{
      paddingLeft: { xs: '20px', sm: '50px', md: '120px' },
      marginTop: '20px',
      marginLeft: { xs: '0', sm: '20px', md: '40px' },
      backgroundColor: '#fff',
      maxWidth: '90%',
      marginRight: 'auto',
      paddingBottom: '20px',
      width: '100%',
    }}>
  <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: '1rem', paddingLeft: '10px' }}>
  <Link className="text-decoration-none text-black" to="/">
      Home
    </Link>
  <Link className="text-decoration-none text-black"
    to="/Restaurant" 
    underline="hover" 
    color="primary" 
    sx={{ fontWeight: 500, fontSize: '1rem', transition: 'color 0.3s' }}
  >
    Restaurant
  </Link>
  <Typography color="text.primary" sx={{ fontWeight: 600, fontSize: '1rem' }}>
    {restaurant.name}
  </Typography>
</Breadcrumbs>





      {/* Main Card */}
      <Grid container alignItems="center" sx={{
        borderRadius: '8px',
        backgroundColor: '#fff',
        padding: '0.5rem',
        flexDirection: { xs: 'row', sm: 'row' }
      }}>
        <Grid className='d-flex' item xs="auto">
          <Box component="img" src={restaurant.image} alt={restaurant.name} sx={{
            width: { xs: '150px', sm: '180px' },
            height: { xs: '150px', sm: '180px' },
            borderRadius: '8px',
            objectFit: 'cover'
          }} />
           <div className="restaurant-info ms-3">
      {/* <div className="breadcrumbs">Nice Foods</div> */}
      <div className="tags">Sandwiches • Pizza • Chinese • Thai • Cakes & Bakery</div>
      <h1 className="restaurant-name"> {restaurant.name}</h1>
      <div className="details">
        <span className="free-delivery"> <DeliveryDiningIcon/> Free delivery</span>
        <span className="old-price">Rs. 79</span>
        <span className="min-order">Min. order Rs. 199</span>
      </div>
      <div className="rating-and-links">
        <span className="rating">
          <span className="star">  <StarIcon sx={{ color: 'orange', fontSize: '1rem' }} /></span> 4.6/5 (100+)
        </span>
        <Link className='text-decoration-none text-black mx-2' to="/">See reviews </Link>
        <a to="/"> <InfoIcon/> More info</a>
      </div>
    </div>
        </Grid>
        <Grid item xs>
          <Stack spacing={0.5} sx={{ paddingLeft: { xs: '0', sm: '1rem' } }}>
          
            <Box sx={{
              display: 'flex', flexDirection: { xs: 'row', sm: 'row' }, gap: { xs: '5px', sm: '15px' }, alignItems: 'center'
            }}>
             
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row', sm: 'row' }, gap: 6, mt: 4, width: '100%' }}>
      <TextField className='mt-2' style={{borderRadius:"10px"}}
      size="small"
      placeholder="Search in menu"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
        <Tabs value={value} onChange={handleTabChange} textColor="inherit" variant="scrollable" scrollButtons="auto" sx={{ width: '100%' }}>
       
          <Tab label="Popular (6)" />
          <Tab label="Deals (2)" />
          <Tab label="Paratha (10)" />
          <Tab label="Beverages (5)" />
        </Tabs>
      </Box>
    </Box>
  );
}

export default ProductHeader;
