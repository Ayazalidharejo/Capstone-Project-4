import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,Box,
  CssBaseline,Divider,Drawer,IconButton,List,ListItem,ListItemButton,ListItemText,Toolbar,Button,Modal,Typography,TextField,Menu,MenuItem,Grid,Badge,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "react-hook-form";
import LogoImg from "../../images/logo.png";
import LogoImg2 from "../../images/hlogo.svg";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favirate from "../Favirate/Favirate";
import Khan from "../Favirate/Favirate";
import {
  Addtocart,
  Minus,
  Delete,
  Plus,
} from "../../Slices/Addtocart/Addtocart";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import TemporaryDrawer from "../Favirate/Favirate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Showoff from "../HomePage/DrowerPage/Drawerpage";

const drawerWidth = 240;

function Navbar(props) {
  // favirate
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const handleDrawerTogglee = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };
  // favirate

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
  const locatiion = useLocation();

  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

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

    localStorage.setItem("user", JSON.stringify({ name, email, password }));

    setLoginData({ email, password });
    alert(`Successfully Registered with Email: ${email}`);
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const onLoginSubmit = (data) => {
    const { email, password } = data;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUserLoggedIn(true);
      setUsername(storedUser.name);

      setLoginModalOpen(false);

      navigate("/");
    } else {
      alert(" Something wrong ");
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
                style={{ backgroundColor: "#e21b70" }}
                onClick={handleLoginModalOpen}
                sx={{
                  textTransform: "capitalize",
                  color: "green",
                  borderColor: "#e21b70",
                  "&:hover": {
                    backgroundColor: "#e21b70",
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

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>



    
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ backgroundColor: "#fafafa", color: "black" }}
        >

{/*           
<Box className="d-flex justify-content-center align-items-center p-3 " style={{ backgroundColor: "#e81d72", color: "#fff" }}>
      <div className="d-flex align-items-center">
        <img
          src={LogoImg}
          alt="Business Icon"
          width="30"
          height="30"
          className="me-2"
        />
        <span>Do you need a business account?</span>
      </div>
      <a 
        href="#"
        className="btn btn-outline-light fw-bold mx-2"
        style={{ borderRadius: "5px" }}
      >
        SIGN UP NOW
      </a>
    </Box> */}


<Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // Align text
        backgroundColor: "#e81d72",
        color: "#fff",
        padding:"10px"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <img
          src={LogoImg2}
          alt="Business Icon"
          width="30"
          height="30"
        />
        <Typography variant="body1">
          Do you need a business account?
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: "#fff",
          borderColor: "#fff",
          fontWeight: "bold",
          borderRadius: "5px",
          marginLeft:"10px",
          "&:hover": {
            backgroundColor: "#ffc0d3", // Light pink hover effect
            borderColor: "#ffc0d3",
            color: "#e81d72",
          },
        }}
      >
        SIGN UP NOW
      </Button>
    </Box>
          <Toolbar>
            <Grid container spacing={2}>
              {/* Left Section */}
              <Grid item xs={4}>
                {/* <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton> */}
                <Box className="d-flex align-items-center">
                  <img
                    src={LogoImg}
                    alt="Logo"
                    style={{ marginRight: "10px", width: "50px" }}
                  />
                  <Typography
                    variant="h5"
                    style={{ color: "#e21b70" }}
                    sx={{ display: { xs: "none", sm: "block" } }} // This will hide it on mobile screens
                  >
                    foodpanda
                  </Typography>
                </Box>
              </Grid>

              {/* Center Section */}
              <Grid
                sx={{
                  paddingLeft: { xs: "60px", sm: "0" }, // 100px padding-left for mobile, 0 for larger screens
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.5)",
                  marginTop: "12px",
                  display: "flex",
                  justifyContent: "center",
                }}
                item
                xs={4}
              >
                {location?.name && (
                  <Typography
                    sx={{
                      marginTop: "0px",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <b className="d-flex align-items-center">
                      <LocationOnIcon style={{ color: "#e21b70" }} /> Location:{" "}
                      {location.name}
                    </b>
                  </Typography>
                )}
              </Grid>

              {/* Right Section */}
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {isUserLoggedIn ? (
                  <>
                    <Button
                      onClick={handleMenuOpen}
                      startIcon={<PersonIcon color="primary" />}
                      sx={{ textTransform: "capitalize", color: "black" }}
                    >
                      {username}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>

                    <Button onClick={handleDrawerTogglee(true)}>
                      <Badge badgeContent={Favitaes?.length} color="secondary">
                        <FavoriteIcon style={{ color: "#e21b70" }} />
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
                        borderRadius: "10px",
                      }}
                    >
                      log in
                    </Button>
                    <Button
                      className="text-white mx-2"
                      onClick={handleRegisterModalOpen}
                      sx={{
                        borderColor: "#fff",
                        borderRadius: "10px",
                        backgroundColor: "#e21b70",
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
                <Button
                  onClick={handleOpen}
                  sx={{ color: "#000", fontSize: "14px" }}
                >
                  <LanguageIcon />
                  <Typography variant="body2" sx={{ mx: 1 }}>
                    EN
                  </Typography>
                  {open ? (
                    <KeyboardArrowUpIcon sx={{ color: "#e21b70" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ color: "#e21b70" }} />
                  )}
                </Button>
                <Modal open={open} onClose={handleClose}>
                  <Box
                    sx={{
                      display: "flex",
                      position: "absolute",
                      top: "15%",
                      left: "90%",
                      transform: "translate(-50%, -50%)",
                      width: 150,
                      height: 80,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      borderRadius: 2,
                      p: 3,
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      className="mt-1"
                      variant="body2"
                      sx={{ marginX: "10px", textAlign: "center" }}
                    >
                      English
                    </Typography>
                    <CheckCircleOutlineIcon
                      sx={{ color: "#e21b70", "&:hover": { color: "black" } }}
                    />
                  </Box>
                </Modal>

                {/* Cart Button */}
                <Button onClick={toggleDrawer(true)} sx={{ color: "#000" }}>
                  <Badge badgeContent={cartitems?.length} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                </Button>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      width: 380,
                      height: "100%",
                      bgcolor: "#f4f4f4",
                      padding: 2,
                    }}
                  >
                    <Typography variant="h6">Drawer Content</Typography>
                    {cartitems?.map((item) => (
                      <Grid
                        container
                        className="d-flex align-items-center"
                        key={item.id}
                      >
                        <Grid item sx={4} md={3} className="my-2">
                          <img
                            style={{ width: "60px", height: "50px" }}
                            src={item?.strMealThumb}
                            alt=""
                          />
                        </Grid>
                        <Grid item sx={4} md={3}>
                          <Typography>
                            {item?.strMeal?.length > 8
                              ? `${item?.strMeal.slice(0, 8)}...`
                              : item?.strMeal}
                          </Typography>
                        </Grid>
                        <Grid item sx={4} md={3}>
                          <Typography> Price:{item?.Price} </Typography>
                          <span>QTY:{item?.quantity} </span>
                        </Grid>
                        <Grid item sx={4} md={3}>
                          <Box className="d-flex">
                            <RemoveIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => dispatch(Minus(item))}
                            />
                            <AddIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => dispatch(Plus(item))}
                            />
                            <DeleteIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => dispatch(Delete(item))}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    ))}
                    {/* <Button
                      className="btn-light"
                      sx={{ backgroundColor: "#e21b70", color: "white", borderRadius: "5px", marginTop: "20px" }}
                      onClick={() => navigate("/cart")}
                    >
                      View Cart
                    </Button> */}
                  </Box>
                </Drawer>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Modal for Login */}
      <Modal open={isLoginModalOpen} onClose={handleLoginModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <Typography variant="h6">Login</Typography>
          <form onSubmit={handleSubmit(onLoginSubmit)}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("email", { required: true })}
              error={errors.email ? true : false}
              helperText={errors.email ? "Email is required" : ""}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              {...register("password", { required: true })}
              error={errors.password ? true : false}
              helperText={errors.password ? "Password is required" : ""}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#e21b70", color: "white", marginTop: 2 }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Modal for Register */}
      <Modal open={isRegisterModalOpen} onClose={handleRegisterModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: 2,
            p: 3,
          }}
        >
          <Typography variant="h6">Register</Typography>
          <form onSubmit={handleSubmit(onRegisterSubmit)}>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("name", { required: true })}
              error={errors.name ? true : false}
              helperText={errors.name ? "Name is required" : ""}
            />
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              {...register("email", { required: true })}
              error={errors.email ? true : false}
              helperText={errors.email ? "Email is required" : ""}
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              type="password"
              {...register("password", { required: true })}
              error={errors.password ? true : false}
              helperText={errors.password ? "Password is required" : ""}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#e21b70", color: "white", marginTop: 2 }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Modal>
      <TemporaryDrawer
        handleDrawerTogglee={handleDrawerTogglee}
        isDrawerOpen={isDrawerOpen}
      />

      <Outlet />
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
