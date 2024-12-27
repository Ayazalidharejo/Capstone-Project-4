// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import {
//   AppBar,
//   Box,
//   CssBaseline,
//   Divider,
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Button,
//   Modal,
//   Typography,
//   TextField,
//   Menu,
//   MenuItem,
//   Grid,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import PersonIcon from "@mui/icons-material/Person";
// import { useForm } from "react-hook-form";
// import LogoImg from "../../images/logo.png";
// import { Link, Outlet, useNavigate } from "react-router-dom";

// // import { Box, Button, Grid, Modal, Typography } from "@mui/material";
// import LanguageIcon from "@mui/icons-material/Language";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useSelector } from "react-redux";


// const drawerWidth = 240;
// // const navItems = ["Shops", "Offers", "Contact", "Pages/"];

// function Navbar(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
//   const [isUserLoggedIn, setUserLoggedIn] = useState(false);
//   const [username, setUsername] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isProfileModalOpen, setProfileModalOpen] = useState(false);
//   const [profileUsername, setProfileUsername] = useState(username);
//   const [profileEmail, setProfileEmail] = useState("");
//   const [loginData, setLoginData] = useState({ email: "", password: "" });
//   const  location  = useSelector((state) => state.location);

//   const { cartitems } = useSelector((state) => state.Cart);
//  console.log(cartitems);
 

//   /////English
//   const [open, setOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);  // Replace with actual logic for mobile detection.

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };



//   /////

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleLoginModalOpen = () => {
//     setLoginModalOpen(true);
//     setRegisterModalOpen(false);
//   };

//   const handleLoginModalClose = () => setLoginModalOpen(false);

//   const handleRegisterModalOpen = () => {
//     setRegisterModalOpen(true);
//     setLoginModalOpen(false);
//   };

//   const handleRegisterModalClose = () => setRegisterModalOpen(false);

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     setUserLoggedIn(false);
//     setUsername("");
//     setAnchorEl(null);
//   };

//   const handleProfileModalOpen = () => {
//     setProfileModalOpen(true);
//     setProfileUsername(username); // Pre-fill with the current username
//     setProfileEmail(""); // Optionally, pre-fill with the current email if needed
//   };

//   const handleProfileModalClose = () => setProfileModalOpen(false);

//   const handleProfileSave = () => {
//     setUsername(profileUsername); // Update the main username
//     setProfileModalOpen(false); // Close the modal
//   };

//   const onRegisterSubmit = (data) => {
//     const { name, email, password } = data;

//     localStorage.setItem(
//       "user",
//       JSON.stringify({ name, email, password })
//     );

//     setLoginData({ email, password });
//     alert(`Successfully Registered with Email: ${email}`);
//     setRegisterModalOpen(false);
//     setLoginModalOpen(true);
//   };

//   const onLoginSubmit = (data) => {
//     const { email, password } = data;

//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       setUserLoggedIn(true);
//       setUsername(storedUser.name);
//       setLoginModalOpen(false);
//       navigate("/");
//     } else {
//       alert("Invalid credentials! Please try again.");
//     }
//   };

//   const drawer = (

    
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", }}>
//       <Divider />
//       <List>
//         {/* {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))} */}
//         <ListItem disablePadding>
//           <ListItemButton sx={{ textAlign: "center", }}>
//             {isUserLoggedIn ? (
//               <>
//                 <PersonIcon color="primary" />
//                 <Typography>{username}</Typography>
//               </>
//             ) : (
//               <Button
//                 variant="outlined"
//                 onClick={handleLoginModalOpen}
//                 sx={{
//                   textTransform: "capitalize",
//                   color: "green",
//                   borderColor: "green",
//                   "&:hover": {
//                     backgroundColor: "green",
//                     color: "white",
//                   },
//                 }}
//               >
//            Sign up
//               </Button>
//             )}
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
  
//     <Box  sx={{ display: "flex", justifyContent:"space-between" }}>
//       <CssBaseline />
//       <AppBar  component="nav" sx={{ backgroundColor: "#fafafa", color: "black", display: "flex", justifyContent:"space-between" }}>
//         <Toolbar className="boredr">
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//         <Box className="d-flex align-items-center  ">
//         <img  src={LogoImg} alt="Logo" style={{ marginRight: "10px" ,width:"50px" }} />
//         <Typography variant="h5" style={{color:" #e21b70"}}>foodpanda</Typography>
//         </Box>

//           <Box className="border 5px solid red "
//             sx={{
//              width:"80%",
//              display:"flex",
//              justifyContent:"space-between",
//               alignItems: "center",
//               gap: 2,
              
//             }}
//           >
           
            
//             {location?.name && (
//   <Typography
//     sx={{ 
//       // paddingRight:"250px",
//       textAlign: "center",  // This centers the text
//        // Ensure it takes up the full width
//       marginTop: "12px",  // Equivalent to mt-3
//       fontSize: "14px",  // Equivalent to fs-6
//       color: "rgba(0, 0, 0, 0.5)",  // Equivalent to text-opacity-50
    
//     }} 
//     className="location"
//   >
//     <b>Location: {location.name}</b>
//   </Typography>
// )}

//             {isUserLoggedIn ? (
//               <>
//                 <Button 
//                   onClick={handleMenuOpen}
//                   startIcon={<PersonIcon color="primary" />}
//                   sx={{ textTransform: "capitalize", color: "black" }}
//                 >
//                   {username}
//                 </Button>
//                 <Menu 
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                 >
//                   <MenuItem>
//                     <Link to="/profile">Profile</Link>
//                   </MenuItem>
//                   <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                 </Menu>
//               </>
//             ) : (
//               <>
//               <Button className="text-center"
//                 variant="outlined"
//                 onClick={handleLoginModalOpen}
//                 sx={{
                
//                   color: "black",
//                   borderColor: "green",
                
//                 }}
//               >
//                 log in
//               </Button>
//               <Button className="text-white"
//               style={{backgroundColor:"#e21b70"}}
//                 variant="outlined"
//                 onClick={handleRegisterModalOpen}
//                 sx={{
                  
                 
//                   borderColor: "#e21b70",
//                   "&:hover": {
                   
//                     color: "white",
//                   },
//                 }}
//               >
//                 Sign up
//               </Button>
//               </>
//             )}















//             <Grid container spacing={2}>
//       {/* Language Selector Button */}
//       <Grid item>
//         <Button onClick={handleOpen} sx={{ color: '#000', fontSize: isMobile ? '12px' : '14px' }}>
//           <LanguageIcon />
//           <Typography variant="body2" sx={{ mx: 1 }}>
//             EN
//           </Typography>
//           {open ? (
//             <KeyboardArrowUpIcon sx={{ color: '#e21b70' }} />
//           ) : (
//             <KeyboardArrowDownIcon sx={{ color: '#e21b70' }} />
//           )}
//         </Button>
        
//         {/* Language Selection Modal */}
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="language-selector"
//           aria-describedby="language-selector-description"
//         >
//           <Box
//             sx={{
//               display: "flex",
//               position: 'absolute',
//               top: '25%',
//               left: '80%',
//               transform: 'translate(-50%, -50%)',
//               width: 150,
//               height: 80,
//               bgcolor: 'background.paper',
//               boxShadow: 24,
//               borderRadius: 2,
//               p: 3,
//               textAlign: 'center',
//               cursor: "pointer"
//             }}
//           >
//             <Typography className='mt-1' variant="body2" sx={{ marginX:"10px", textAlign:"center" }}>English</Typography>
//             <CheckCircleOutlineIcon sx={{ color: '#e21b70', '&:hover': { color:"black" } }} />
//           </Box>
//         </Modal>
//       </Grid>

//       {/* Drawer Button */}
//       <Grid item>
//         <Button
//           onClick={toggleDrawer(true)} // Toggle drawer open/close
//           sx={{
//             color: '#000',
//             '&:hover': {
//               backgroundColor: '#f0f0f0',
//               borderRadius: '50%',
//             },
//           }}
//         >
//           {/* Replace with an icon or any content you want */}
//           {/* <Typography variant="body2">Open Drawer</Typography> */}
//           <ShoppingCartIcon/>
//         </Button>
        
//         {/* Drawer Component */}
//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//         >
//           <Box
//             sx={{
//               width: 380,
//               height: '100%',
//               bgcolor: '#f4f4f4',
//               padding: 2,
//             }}
//           >
       
//             {/* Drawer content goes here */}
//             <Typography variant="h6">Drawer Content </Typography>
// {cartitems?.map((item)=>{
//   return(

//     <Grid container className="d-flex align-items-center">
//       <Grid item sx={4} md={3} className="my-2">  <img style={{width:"60px",height:"50px"}} src={item?.strMealThumb} alt="" /> </Grid>
   
   
//  <Grid item sx={4} md={3}>    <Typography>
//   {item?.strMeal?.length > 8 ? `${item?.strMeal.slice(0, 8)}...` : item?.strMeal}
// </Typography> </Grid>

//    <Grid item sx={4} md={6}>  <Box className="d-flex">
//     <Button>-</Button>
//     <Button>+</Button>
//     <Button>delete</Button>
    
//     </Box> </Grid>
  
//     </Grid>
//   )
// })}
              
           
//           </Box>
//         </Drawer>
//       </Grid>
//     </Grid>
  





            
           
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>

//       {/* Login Modal */}
//       <Modal
//         open={isLoginModalOpen}
//         onClose={handleLoginModalClose}
//         aria-labelledby="login-modal-title"
//         aria-describedby="login-modal-description"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             bgcolor: "background.paper",
//             borderRadius: 5,
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <Typography className=" align-items-center p-5 d-flex" variant="h5" >
//             Login
//           </Typography>
//           <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               defaultValue={loginData.email}
//               {...register("email", { required: "Email is required" })}
//               error={!!errors.email}
//               helperText={errors.email?.message}
//               sx={{ marginBottom: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               defaultValue={loginData.password}
//               {...register("password", { required: "Password is required" })}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ marginTop: 4 ,backgroundColor:"#e21b70", color: "white" }}
//             >
//               Log in
//             </Button>
//           </form>
//           <Typography
//             variant="body2"
//             sx={{ marginTop: 5, textAlign: "center", color: "gray" }}
//           >
//             Don't have an account?{" "}
//             <a
//               href="#"
//               onClick={handleRegisterModalOpen}
//               style={{ textDecoration: "underline" }}
//             >
//               Registerdeta
//             </a>
//           </Typography>
//         </Box>
//       </Modal>

//       {/* Register Modal */}
//       <Modal
//         open={isRegisterModalOpen}
//         onClose={handleRegisterModalClose}
//         aria-labelledby="register-modal-title"
//         aria-describedby="register-modal-description"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 500,
//             bgcolor: "background.paper",
//             borderRadius: 5,
//             boxShadow: 24,
//             p: 1,
//           }}
//         >
//           <Typography variant="h5" sx={{ marginBottom: 5, textAlign: "center" }}>
//             Registerforthepage
//           </Typography>
//           <form onSubmit={handleSubmit(onRegisterSubmit)} noValidate>
//             <TextField
//               fullWidth
//               label="Name"
//               variant="outlined"
//               {...register("name", { required: "Name is required" })}
//               error={!!errors.name}
//               helperText={errors.name?.message}
//               sx={{ marginBottom: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               {...register("email", { required: "Email is required" })}
//               error={!!errors.email}
//               helperText={errors.email?.message}
//               sx={{ marginBottom: 2 }}
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               variant="outlined"
//               {...register("password", { required: "Password is required" })}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ marginTop: 4, backgroundColor:"#e21b70",  color: "white" }}
//             >
//               Registerforayazali
//             </Button>
//           </form>
//           <Typography
//             variant="body2"
//             sx={{ marginTop: 5, textAlign: "center", color: "gray" }}
//           >
//             Already have an account?{" "}
//             <a
//               href="#"
//               onClick={handleLoginModalOpen}
//               style={{ textDecoration: "underline" }}
//             >
//               Log in
//             </a>
//           </Typography>
//         </Box>
//       </Modal>

//       {/* Profile Modal */}
//       <Modal
//         open={isProfileModalOpen}
//         onClose={handleProfileModalClose}
//         aria-labelledby="profile-modal-title"
//         aria-describedby="profile-modal-description"
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: 400,
//             bgcolor: "background.paper",
//             borderRadius: 5,
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           <Typography variant="h5" sx={{ marginBottom: 3 }}>
//             Edit Profile
//           </Typography>
//           <TextField
//             fullWidth
//             label="Username"
//             variant="outlined"
//             value={profileUsername}
//             onChange={(e) => setProfileUsername(e.target.value)}
//             sx={{ marginBottom: 2 }}
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             value={profileEmail}
//             onChange={(e) => setProfileEmail(e.target.value)}
//             sx={{ marginBottom: 2 }}
//           />
//           <Button
//             fullWidth
//             variant="contained"
//             onClick={handleProfileSave}
//             sx={{ backgroundColor: "green", color: "white" }}
//           >
//             Save
//           </Button>
//         </Box>
//       </Modal>
//     </Box>
//     <Outlet/>
//     </>
//   );
// }

// Navbar.propTypes = {
//   window: PropTypes.func,
// };

// export default Navbar;




import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Modal,
  Typography,
  TextField,
  Menu,
  MenuItem,
  Grid,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "react-hook-form";
import LogoImg from "../../images/logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Favirate from "../Favirate/Favirate";
import Khan from "../Favirate/Favirate";
import { Addtocart, Minus, Delete, Plus } from "../../Slices/Addtocart/Addtocart"
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const drawerWidth = 240;

function Navbar(props) {

//favirate
 const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerTogglee = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };
//favirate
  






  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [profileUsername, setProfileUsername] = useState(username);
  const [profileEmail, setProfileEmail] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const location = useSelector((state) => state.location);
  const { cartitems } = useSelector((state) => state.Cart);
   const { Favitaes } = useSelector((state) => state.Favirate);
  

  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch =useDispatch()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
  };

  const handleLoginModalClose = () => setLoginModalOpen(false);

  const handleRegisterModalOpen = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
  };

  const handleRegisterModalClose = () => setRegisterModalOpen(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUserLoggedIn(false);
    setUsername("");
    setAnchorEl(null);
  };

  const handleProfileModalOpen = () => {
    setProfileModalOpen(true);
    setProfileUsername(username);
    setProfileEmail("");
  };

  const handleProfileModalClose = () => setProfileModalOpen(false);

  const handleProfileSave = () => {
    setUsername(profileUsername);
    setProfileModalOpen(false);
  };

  const onRegisterSubmit = (data) => {
    const { name, email, password } = data;

    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );

    setLoginData({ email, password });
    alert(`Successfully Registered with Email: ${email}`);
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const onLoginSubmit = (data) => {
    const { email, password } = data;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUserLoggedIn(true);
      setUsername(storedUser.name);
      setLoginModalOpen(false);
      navigate("/");
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {isUserLoggedIn ? (
              <>
                <PersonIcon color="primary" />
                <Typography>{username}</Typography>
              </>
            ) : (
              <Button
                variant="outlined"
                onClick={handleLoginModalOpen}
                sx={{
                  textTransform: "capitalize",
                  color: "green",
                  borderColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    color: "white",
                  },
                }}
              >
                Sign up
              </Button>
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#fafafa", color: "black" }}>
          <Toolbar>
            <Grid container spacing={2}>
              {/* Left Section */}
              <Grid item xs={4}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Box className="d-flex align-items-center">
                  <img src={LogoImg} alt="Logo" style={{ marginRight: "10px", width: "50px" }} />
                  <Typography variant="h5" style={{ color: "#e21b70" }}>
                    foodpanda
                  </Typography>
                </Box>
              </Grid>

              {/* Center Section */}
              <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                {location?.name && (
                  <Typography
                    sx={{
                      marginTop: "12px",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <b>Location: {location.name}</b>
                  </Typography>
                )}
              </Grid>

              {/* Right Section */}
              <Grid item xs={4} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                {isUserLoggedIn ? (
                  <>
                    <Button
                      onClick={handleMenuOpen}
                      startIcon={<PersonIcon color="primary" />}
                      sx={{ textTransform: "capitalize", color: "black" }}
                    >
                      {username}
                    </Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                 
                   
                    <Button  onClick={handleDrawerTogglee(true)}>  
                      
                    <Badge badgeContent={Favitaes?.length}  color="secondary">
                      <FavoriteIcon style={{color:"#e21b70"}} /> 
                      </Badge>
                       </Button>
     
      
                  </>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      onClick={handleLoginModalOpen}
                      sx={{
                        color: "black",
                        borderColor: "green",
                      }}
                    >
                      log in
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleRegisterModalOpen}
                      sx={{
                        borderColor: "#e21b70",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      Sign up
                    </Button>
                    
                  </>
                )}

                {/* Language Button */}
                <Button onClick={handleOpen} sx={{ color: '#000', fontSize: '14px' }}>
                  <LanguageIcon />
                  <Typography variant="body2" sx={{ mx: 1 }}>
                    EN
                  </Typography>
                  {open ? (
                    <KeyboardArrowUpIcon sx={{ color: '#e21b70' }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ color: '#e21b70' }} />
                  )}
                </Button>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={{ display: "flex", position: 'absolute', top: '25%', left: '80%', transform: 'translate(-50%, -50%)', width: 150, height: 80, bgcolor: 'background.paper', boxShadow: 24, borderRadius: 2, p: 3, textAlign: 'center', cursor: "pointer" }}>
                    <Typography className='mt-1' variant="body2" sx={{ marginX: "10px", textAlign: "center" }}>
                      English
                    </Typography>
                    <CheckCircleOutlineIcon sx={{ color: '#e21b70', '&:hover': { color: "black" } }} />
                  </Box>
                </Modal>

                {/* Cart Button */}
                <Button onClick={toggleDrawer(true)} sx={{ color: '#000' }}>
                <Badge badgeContent={cartitems?.length}  color="secondary">
                <ShoppingCartIcon />
                      </Badge>
                
                </Button>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                  <Box sx={{ width: 380, height: '100%', bgcolor: '#f4f4f4', padding: 2 }}>
                    <Typography variant="h6">Drawer Content</Typography>
                    {cartitems?.map((item) => (
                      <Grid container className="d-flex align-items-center" key={item.id}>
                        <Grid item sx={4} md={3} className="my-2">
                          <img style={{ width: "60px", height: "50px" }} src={item?.strMealThumb} alt="" /> 
                        </Grid>
                        <Grid item sx={4} md={3}>
                          <Typography>{item?.strMeal?.length > 8 ? `${item?.strMeal.slice(0, 8)}...` : item?.strMeal}</Typography>
                        </Grid>
                          <Grid item sx={4} md={3}>    <Typography> Price:{item?.Price} </Typography>    <span>QTY:{item?.quantity}  </span></Grid>
                        <Grid item sx={4} md={3}>
                          <Box className="d-flex">
                        <RemoveIcon style={{cursor:"pointer"}} onClick={() => dispatch(Minus(item))}/>
<AddIcon  onClick={() => dispatch(Plus(item))} /> 
<DeleteIcon style={{cursor:"pointer"}}  onClick={() => dispatch(Delete(item))}/>


                          </Box>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                       <Box>
                              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography variant="h6" fontWeight="bold">Total</Typography>
                                <Typography variant="subtitle1" color="text.secondary"> Rs. {cartitems?.reduce((total, item) => total + item.Price * item.quantity, 0)}</Typography>
                              </Box>
                              <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#e21b70", cursor: "pointer", width: "100%" }}>
                                Review payment and address
                              </Button>
                            </Box>
                </Drawer>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

        {/* Login Modal */}
        <Modal open={isLoginModalOpen} onClose={handleLoginModalClose}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, bgcolor: "background.paper", borderRadius: 5, boxShadow: 24, p: 4 }}>
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleSubmit(onLoginSubmit)} noValidate>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                defaultValue={loginData.email}
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                defaultValue={loginData.password}
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ marginBottom: 2 }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </form>
          </Box>
        </Modal>

        {/* Register Modal */}
        <Modal open={isRegisterModalOpen} onClose={handleRegisterModalClose}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, bgcolor: "background.paper", borderRadius: 5, boxShadow: 24, p: 4 }}>
            <Typography variant="h5">Register</Typography>
            <form onSubmit={handleSubmit(onRegisterSubmit)} noValidate>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={{ marginBottom: 2 }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Register
              </Button>
            </form>
          </Box>
        </Modal>
      </Box>
      <Khan isDrawerOpen={isDrawerOpen} handleDrawerTogglee={handleDrawerTogglee} />
      {/* <Favirate Favie={Favie} toggleDrawere= {toggleDrawere} /> */}
      <Outlet />
      
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
