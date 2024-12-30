
import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Dialog, CardContent, Card, CardMedia, TextField, Tabs, Tab, Modal } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux"; 
import axios from 'axios';
import { Addtocart, Delete, Minus, Plus } from "../../Slices/Addtocart/Addtocart"; 
import HungryPanda from "../../images/hungry.svg";
import QuettaMap from "../../images/hungry.svg";

import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Favi } from "../../Slices/Favirate";
import Footer from "../HomePage/Footer/Footer";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
const CityFood = () => {
  const { cartitems } = useSelector((state) => state.Cart);
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState(null);  
  const dispatch = useDispatch(); 

  const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
  const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => setProduct(response.data.meals))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCartClick = (product) => {
    setSelectedProduct(product);  
    setOpenConfirmModal(true);  
  };

  const handleConfirmAddToCart = () => {
    dispatch(Addtocart(selectedProduct));  
    setOpenConfirmModal(false);  
    Swal.fire({
      title: 'Success!',
      text: 'Product successfully added to Add to cart!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e21b70',
    });

    
  };

  const handleCancelAddToCart = () => {
    setOpenConfirmModal(false);  
  };
  


// 
const [formData, setFormData] = useState({
  fullName: "",
  phoneNumber: "",
  cityName: "",
  postAddress: "",
});

const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setErrors({ ...errors, [name]: "" }); // Clear error on input
};

const handleSubmit = () => {
  const newErrors = {};

  // Validate fields
  if (!formData.fullName) newErrors.fullName = "Full Name is required";
  if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
  if (!formData.cityName) newErrors.cityName = "City Name is required";
  if (!formData.postAddress) newErrors.postAddress = "Post Address is required";

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    // Call confirm handler and pass formData
    handleConfirmAddToCart(formData);
  }
};

// 




  //For favirate 
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open the modal and set the item to be added
  const initiateAddToFavorites = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Handle the confirmation for adding the item
  const confirmAddToFavorites = () => {
    // Dispatch the action to add the item
    dispatch(Favi(selectedItem));
    Swal.fire({
      title: 'Success!',
      text: 'Product successfully added to favorites!',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#e21b70',
    });

    // Close the modal
    closeModal();
  };


  //Favirate end 

  return (
    <Box sx={{ padding: { xs: "20px", sm: "50px", md: "20px" }, marginTop: "20px", backgroundColor: "#fff", maxWidth: "90%", margin: "0 auto", paddingBottom: "20px", width: "100%" }}>
      
      {/* Delivery Modal */}
      <Dialog open={openDeliveryModal} onClose={handleCloseDeliveryModal}>
        <Box display="flex" justifyContent="center" p={2}>
          <Card sx={{ maxWidth: 500, position: "relative" }}>
            <CloseIcon 
              aria-label="close" 
              onClick={handleCloseDeliveryModal} 
              sx={{ position: "absolute", top: 8, right: 8, backgroundColor: "#f1f1f1", color: "#000", borderRadius: "100%", width: "30px", height: "30px", "&:hover": { backgroundColor: "#e0e0e0" } }} 
            />
            <CardContent>
              <Typography variant="h4">Quetta Paratha – <span style={{ fontWeight: "bold" }}>111</span></Typography>
              <Box mt={2}>
                <Box display="flex" alignItems="center" color="black">
                  <AccessTimeIcon />
                  <Typography variant="body1" fontWeight="bold" paddingLeft={"10px"}>Now Open</Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">Monday – Sunday</Typography>
                <Typography variant="body2" color="textSecondary">00:00 – 23:59</Typography>
              </Box>
              <Box mt={2} display="flex" alignItems="center">
                <LocationOnIcon />
                <Typography variant="body2" color="textPrimary">Market, Cavalry Ground.</Typography>
              </Box>
              <CardMedia component="img" height="140" src={QuettaMap} alt="Map" sx={{ mt: 2 }} />
              <Box mt={2}>
                <Typography variant="body1" fontWeight="bold">Delivery fee</Typography>
                <Typography variant="body2" color="textSecondary">Delivery fee is based on time of day, distance, and surge conditions</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body1" fontWeight="bold">Minimum order</Typography>
                <Typography variant="body2" color="textSecondary">Orders below Rs. 249.00 incur a small order fee.</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Dialog>

      {/* Search and Tabs Section */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, mt: 4, width: '100%' }}>
        <TextField 
          variant="standard" 
          placeholder="Search in menu" 
          sx={{ paddingLeft: '10px', width: '100%', maxWidth: '350px', backgroundColor: "#F7F7F7", borderRadius: '30px', display: "flex", alignItems: "center" }}
          InputProps={{ startAdornment: <SearchIcon /> }} 
        />

        <Tabs value={value} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" sx={{ width: '100%' }}>
          <Tab label="Popular (6)" />
          <Tab label="Summer Deals & Discounts (1)" />
          <Tab label="Anda (4)" />
          <Tab label="Paratha (27)" />
          <Tab label="Hot Beverages (24)" />
        </Tabs>
      </Box>

      {/* Products Display and Delivery Section */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 4, padding: 2 }}>
        {/* Products Section */}
        <Box sx={{ flex: 3 }}>
          <Grid container spacing={1}>
            {product?.map((item) => (
              <Grid item xs={12} sm={6} md={3} lg={6} key={item.idMeal}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #ddd", borderRadius: 2, boxShadow: 2, padding: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
                    {item?.strMeal}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   Rs:550
                  </Typography>
                  <Box 
                    component="img" 
                    src={item?.strMealThumb} 
                    alt={item?.strMeal} 
                    sx={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: 2, mt: 2 }} 
                  />
                  <Button
      onClick={() => handleAddToCartClick(item)}
      variant="text"
      
      startIcon={<ShoppingCartIcon />}
      sx={{
        color:"#e21b70",
        marginTop: 1,
        padding: '10px 20px',
        transition: 'all 0.3s ease', // Smooth transition for hover effect
        '&:hover': {
          backgroundColor: '#e21b70',
           color:"#ffff",
          // Change background on hover
          width: '100%', // Increase width on hover
        },
      }}
    >
      AddCart
    </Button>
                  <Button onClick={() => initiateAddToFavorites(item)}    sx={{
        color:"#e21b70",
      
        padding: '10px 20px',
        transition: 'all 0.3s ease', // Smooth transition for hover effect
        '&:hover': {
          backgroundColor: '#e21b70',
           color:"#ffff",
          // Change background on hover
          width: '100%', // Increase width on hover
        },
      }}
    
><FavoriteIcon />  Favirate</Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Delivery Payment Section */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #ddd", borderRadius: 2, boxShadow: 2, padding: 2, minHeight: "750px" }}>
          <Box sx={{ display: "flex", gap: 2, backgroundColor: "#f9f9f9", padding: 1, borderRadius: 2, justifyContent: "center" }}>
            <Button sx={{ textTransform: "none", padding: "15px 60px" }}>Delivery</Button>
            <Button sx={{ textTransform: "none", padding: "15px 60px" }}>Pick-up</Button>
          </Box>

         {cartitems?.map((item) => (
                      <Grid container className="d-flex align-items-center" key={item.id}>
                        <Grid item sx={4} md={3} className="my-2">
                          <img style={{ width: "60px", height: "50px", maxWidth:"60px",maxWidth:"50px" }} src={item?.strMealThumb} alt="" /> 
                          
                         
                        </Grid>
                        <Grid item sx={4} md={3}>    <Typography> Price:{item?.Price} </Typography>    <span>QTY:{item?.quantity}  </span></Grid>
                        <Grid item sx={4} md={3}>
                          <Typography>{item?.strMeal?.length > 8 ? `${item?.strMeal.slice(0, 8)}...` : item?.strMeal}</Typography>
                        </Grid>
                     
                        <Grid item sx={4} md={3}>
                        <Box className="d-flex">
                        <RemoveIcon style={{cursor:"pointer"}} onClick={() => dispatch(Minus(item))}/>
<AddIcon  style={{cursor:"pointer"}}  onClick={() => dispatch(Plus(item))} /> 
<DeleteIcon style={{cursor:"pointer"}}  onClick={() => dispatch(Delete(item))}/>


                          </Box>
                        </Grid>
                      </Grid>
                    ))}




          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", flexGrow: 1 }}>
            <Box component="img" src={HungryPanda} alt="Empty Cart" sx={{ width: "50px", height: "100px", margin: "0 auto" }} />
            <Typography variant="h6" fontWeight="bold">Hungry?</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginY: 2, textAlign: "center" }}>
              You haven't added anything to your cart!
            </Typography>
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
        </Box>
      </Box>

      {/* Confirmation Modal */}





<Dialog open={openConfirmModal} onClose={handleCancelAddToCart}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h6">Please provide your details to proceed:</Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}
          >
            <TextField
              label="Full Name"
              name="fullName"
              variant="outlined"
              fullWidth
              required
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              variant="outlined"
              fullWidth
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />
            <TextField
              label="City Name"
              name="cityName"
              variant="outlined"
              fullWidth
              required
              value={formData.cityName}
              onChange={handleChange}
              error={!!errors.cityName}
              helperText={errors.cityName}
            />
            <TextField
              label="Post Address"
              name="postAddress"
              variant="outlined"
              fullWidth
              required
              value={formData.postAddress}
              onChange={handleChange}
              error={!!errors.postAddress}
              helperText={errors.postAddress}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={handleCancelAddToCart}
                style={{ backgroundColor: "#e21b70" }}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "#e21b70" }}
                variant="contained"
                color="primary"
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
      {/* Toast Notification */}
      
      <ToastContainer />
      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h6" mb={2}>
            Are you sure you want to add this product to your favorites?
          </Typography>
          <Button style={{backgroundColor:"#e21b70"}}
            variant="contained"
            color="primary"
            onClick={confirmAddToFavorites}
            sx={{ mr: 2 }}
          >
            Yes, Add
          </Button>
          <Button className="text-white" style={{backgroundColor:"#e21b70",}} variant="outlined" onClick={closeModal}>
            Cancel
          </Button>
        </Box>
      </Modal>

      {/* Toast container for showing success message */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
   <Footer/>

    </Box>
  );
};

export default CityFood;
