import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Icon } from '@iconify/react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Headerimg from '../../../images/headericon.png';
import Logo from '../../../images/Logo.jpeg';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Import Modals
import SignUpModal from '../../SignUpPage/SignUpModal';
import LoginModal from '../../Resturant/LoginModal/LoginModal';
import CartDrawer from '../../Resturant/CartList/CartList';
import FavoriteCart from '../../FavoriteCart/FavoriteCart';
import TransitionsModal from '../../UserNamemodal/Usermodal';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';



function Navbar() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cityName = queryParams.get("city") || "";

//username modal
const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
//user name modal end 

  const favoriteItems = useSelector((state) => state.favorite.items);

  const [shoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [favoriteCartOpen, setFavoriteCartOpen] = useState(false);

  // State for SignUp and Login modals
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    const handleStorageChange = () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.name);
      
      
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    };

    handleStorageChange();

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [user]);

  // for toast
  useEffect(()=>{
    if (userName!=="") {
      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have registered successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#ec008c' // Change the color to any hex or color code
      });
      
    }
  
  },[userName])
// for toast end
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage')); 
  };

  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    window.dispatchEvent(new Event('storage')); // Trigger storage event
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const count = useSelector((state) => state.products);


  const handleShoppingCartOpen = () => setShoppingCartOpen(true);
  const handleShoppingCartClose = () => setShoppingCartOpen(false);

  const handleFavoriteCartOpen = () => setFavoriteCartOpen(true);
  const handleFavoriteCartClose = () => setFavoriteCartOpen(false);

  
  const Value = useSelector((state) => state.Location.Value);

  


// State for input value and user name
const [inputValue, setInputValue] = useState("");


// Effect to check localStorage when component mounts or changes
useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

  // If user data is found in localStorage, update state
  if (user) {
    setIsLoggedIn(true);
    setUserName(user.name); // Set the user name from localStorage
  } else {
    setIsLoggedIn(false);
    setUserName('');
  }

  // Add storage event listener to listen for any changes in localStorage
  const handleStorageChange = () => {
    const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name);
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }
  };

  window.addEventListener('storage', handleStorageChange); // Add event listener
  return () => window.removeEventListener('storage', handleStorageChange); // Clean up event listener
}, []); // Empty dependency array to run once when component mounts

// Handle input change
const handleInputChange = (e) => {
  setInputValue(e.target.value); // Update input value
};

// Handle button click
const handleClick = () => {
 
  setUserName(inputValue);
  const user = { name: inputValue }; 
  localStorage.setItem('user', JSON.stringify(user)); 
};
  return (
    <Box>













  
      {/* Top Bar */}
      <AppBar className="d-none d-lg-block" position="sticky" sx={{ backgroundColor: '#c21760' }}>
        <Box className="container">
          <Grid container alignItems="center" justifyContent="center" sx={{ height: 64, px: 2 }}>
            <Grid item>
              <img style={{ width: '40px' }} src={Headerimg} alt="Header Icon" />
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                component="div"
                align="center"
                sx={{ color: '#fff', fontWeight: 'bold', mx: 1 }}
              >
                Do you need a business account?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: '#e21b70',
                  color: '#fff',
                  ml: 1,
                  '&:hover': { backgroundColor: '#c2185b' },
                }}
                variant="contained"
                onClick={() => setOpenSignUp(true)}
              >
                SIGN UP NOW
              </Button>
            </Grid>
          </Grid>
        </Box>
      </AppBar>

      {/* Main Navbar */}
      <AppBar className=' py-2'
        position="sticky"
        sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}
      >
        <Box className="container">
          <Grid container alignItems="center" justifyContent="space-between" sx={{ height: 64 }}>
            <Grid item>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Grid container alignItems="center">
                  <Grid item>
                    <img style={{ width: isMobile ? '30px' : '35px' }} src={Logo} alt="Logo" />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#e21b70',
                        ml: 1,
                        fontWeight: 'bold',
                        fontSize: isMobile ? '16px' : '20px',
                      }}
                    >
                      foodpanda
                    </Typography>
                  </Grid>
                </Grid>
              </Link>
            </Grid>


            <Box sx={{ display: "flex", alignItems: "center" }}>
            {Value && (
  <>
    <LocationOnIcon sx={{ color: "#ec008c", mr: 1 }} />
    <Typography
      variant="body1"
      sx={{
        color: "#000",
        fontWeight: "bold",
      }}
    >
      Location: {Value}
    </Typography>
  </>
)}

            </Box>


            <Grid item>
              {location?.name && (
                <Typography variant="body2" color="textSecondary">
                  <Icon icon="akar-icons:location" /> Location: {location.name}
                </Typography>
              )}
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                {isLoggedIn ? (
                  <>
                    <Grid item>
                      <Typography className='text-dark' variant="body1">
                        <AccountCircleIcon style={{cursor:"pointer"}} onClick={handleOpen}  />  {userName}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button className='bg-dark' color="inherit" onClick={handleLogout}>Logout</Button>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item>
                      <Button className='border border-dark' sx={{ backgroundColor: '#fff', color: '#000' }} onClick={() => setOpenLogin(true)}>Log In</Button>
                    </Grid>
                    <Grid item>
                      <Button sx={{ backgroundColor: '#e21b70', color: '#fff', ml: 1, '&:hover': { backgroundColor: '#c2185b' } }} onClick={() => setOpenSignUp(true)}>Sign Up</Button>
                    </Grid>
                  </>
                )}


                <Grid item>
                  <IconButton onClick={handleFavoriteCartOpen}>
                    <Badge badgeContent={favoriteItems.length} color="error">
                      <FavoriteBorderIcon />
                    </Badge>
                  </IconButton>
                </Grid>


                <Grid item>
                  <IconButton onClick={handleShoppingCartOpen}>
                    <Badge badgeContent={count.items.length} color="error">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </AppBar>

      <SignUpModal open={openSignUp} handleClose={() => setOpenSignUp(false)} handleLogin={handleLogin} />
      <LoginModal open={openLogin} handleClose={() => setOpenLogin(false)} handleLogin={handleLogin} />
      <CartDrawer open={shoppingCartOpen} handleClose={handleShoppingCartClose} />
      <FavoriteCart open={favoriteCartOpen} handleClose={handleFavoriteCartClose} />
      <TransitionsModal open={open}  handleClose={handleClose} handleInputChange={handleInputChange}
       handleClick={handleClick} inputValue={inputValue} />
      <Outlet />
    </Box>
  );
}

export default Navbar;