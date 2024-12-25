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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useForm } from "react-hook-form";
import LogoImg from "../../images/refresher.jpg";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Shops", "Offers", "Contact", "Pages"];

function DrawerAppBar(props) {
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
    setProfileUsername(username); // Pre-fill with the current username
    setProfileEmail(""); // Optionally, pre-fill with the current email if needed
  };

  const handleProfileModalClose = () => setProfileModalOpen(false);

  const handleProfileSave = () => {
    setUsername(profileUsername); // Update the main username
    setProfileModalOpen(false); // Close the modal
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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
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
                Join
              </Button>
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#fafafa", color: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img  src={LogoImg} alt="Logo" style={{ marginRight: "10px" ,width:"100px" }} />

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 2,
              marginLeft: "auto",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "black",
                  textTransform: "capitalize",
                  "&:hover": {
                    color: "green",
                  },
                }}
              >
                {item}
              </Button>
            ))}
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
                  <MenuItem>
                    <Link to="/profile">Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
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
                Join
              </Button>
              <Button
                variant="outlined"
                onClick={handleRegisterModalOpen}
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
                Join
              </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
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
      <Modal
        open={isLoginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 5, textAlign: "center" }}>
            Login
          </Typography>
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 4, backgroundColor: "green", color: "white" }}
            >
              Log in
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{ marginTop: 5, textAlign: "center", color: "gray" }}
          >
            Don't have an account?{" "}
            <a
              href="#"
              onClick={handleRegisterModalOpen}
              style={{ textDecoration: "underline" }}
            >
              Registerdeta
            </a>
          </Typography>
        </Box>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={isRegisterModalOpen}
        onClose={handleRegisterModalClose}
        aria-labelledby="register-modal-title"
        aria-describedby="register-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 5, textAlign: "center" }}>
            Registerforthepage
          </Typography>
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: 4, backgroundColor: "blue", color: "white" }}
            >
              Registerforayazali
            </Button>
          </form>
          <Typography
            variant="body2"
            sx={{ marginTop: 5, textAlign: "center", color: "gray" }}
          >
            Already have an account?{" "}
            <a
              href="#"
              onClick={handleLoginModalOpen}
              style={{ textDecoration: "underline" }}
            >
              Log in
            </a>
          </Typography>
        </Box>
      </Modal>

      {/* Profile Modal */}
      <Modal
        open={isProfileModalOpen}
        onClose={handleProfileModalClose}
        aria-labelledby="profile-modal-title"
        aria-describedby="profile-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 5,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 3 }}>
            Edit Profile
          </Typography>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={profileUsername}
            onChange={(e) => setProfileUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={profileEmail}
            onChange={(e) => setProfileEmail(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleProfileSave}
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
