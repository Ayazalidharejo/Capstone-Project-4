import React, { useState, useEffect } from "react";
import { Box, Typography, Breadcrumbs, Link, Grid, Stack, Button, Dialog, CardContent, Card, CardMedia, TextField, Tooltip, Tab, Tabs } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import QuettaFood from "../../images/hungry.svg";
import InfoIcon from "@mui/icons-material/Info";
import { Icon } from "@iconify/react/dist/iconify.js";
import QuettaMap from "../../images/hungry.svg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from "react-redux";
import axios from 'axios';
import HungryPanda from "../../images/hungry.svg";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Addtocart } from "../../Slices/Addtocart/Addtocart";

const DetailPage = () => {
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState([]);
  

  const usedspch = useDispatch();

  const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
  const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);
  const user = JSON.parse(localStorage.getItem("User"));

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => setProduct(response.data.meals))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      sx={{
        pl: { xs: "10px", sm: "20px", md: "50px" },
        pr: { xs: "10px", sm: "20px", md: "50px" },
        mt: "20px",
        bgcolor: "#fff",
        maxWidth: "100%",
        pb: "20px",
      }}
    >
      {/* Breadcrumb Navigation */}
      <Grid
        container
        alignItems="center"
        sx={{
          borderRadius: "8px",
          bgcolor: "#fff",
          p: { xs: 1, sm: 2 },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Your breadcrumb content goes here */}
      </Grid>

      {/* Delivery Modal */}
      <Dialog open={openDeliveryModal} onClose={handleCloseDeliveryModal}>
        <Box display="flex" justifyContent="center" p={2}>
          {/* Modal content */}
        </Box>
      </Dialog>

      {/* Search and Tabs Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mt: 4,
          width: "100%",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              bgcolor: "#F7F7F7",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 1,
            }}
          >
            <SearchIcon />
            <TextField
              variant="standard"
              placeholder="Search in menu"
              sx={{ pl: 2, flex: 1 }}
            />
          </Box>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              width: "100%",
              "& .MuiTab-root": { fontSize: { xs: "12px", sm: "14px" } },
            }}
          >
            <Tab label="Popular (6)" />
            <Tab label="Summer Deals (1)" />
            <Tab label="Anda (4)" />
            <Tab label="Paratha (27)" />
            <Tab label="Hot Beverages (24)" />
          </Tabs>
        </Box>
      </Box>

      {/* Products and Delivery Payment Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          p: 2,
        }}
      >
        {/* Products Section */}
        <Box sx={{ flex: 3 }}>
          <Grid container spacing={2}>
            {product?.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.idMeal}>
                <Box className="position-relative"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #ddd",
                    borderRadius: 2,
                    boxShadow: 2,
                    p: 2,
                  }}
                >
                  <Box sx={{ flex: 1, mr: 2 }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ textTransform: "uppercase" }}
                    >
                    {item?.strMeal.length > 10 ? (
  <span>
    {item?.strMeal.slice(0, 10)}...
  </span>
) : (
  item?.strMeal
)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Rs. {item?.price}
                    </Typography>
                  </Box>
                  <Box className="position-relative"
                    component="img"
                    src={item?.strMealThumb}
                    alt={item?.strMeal}
                    sx={{
                      width: "250px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                    
                  />
                  <Button onClick={() => {
    if (usedspch(Addtocart(product)) && user) {
    
    } 
     
    
  }} className="position-absolute top-50 end-0 translate-middle-y  p-0"  style={{ fontSize:"29px"}} variant="text" color="black">
           <AddCircleIcon className="bg-white text-black rounded-5"/>
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Delivery Section */}
        <Box
          sx={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 2,
            p: 2,
            minHeight: { xs: "300px", md: "500px" },
          }}
        >
           <Box style={{height:"50%"}} className="d-flex flex-column  align-items-center justify-content-center  ">  <img style={{width:"150px"}} src={HungryPanda} alt="" />
            <Typography>Hungry?</Typography>
            <Typography className="ps-5">You haven't added anything to your cart!</Typography> </Box>
    
        </Box>
      </Box>
    </Box>
  );
};

export default DetailPage;
