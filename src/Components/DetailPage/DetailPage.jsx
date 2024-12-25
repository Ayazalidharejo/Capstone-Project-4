import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, TextField, Tabs, Tab, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { Addtocart } from "../../Slices/Addtocart/Addtocart";
import { ToastContainer, toast } from 'react-toastify';  // Import Toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toastify

const DetailPage = () => {
  const [value, setValue] = useState(0);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show the loader
  const dispatch = useDispatch();
  const  location  = useSelector((state) => state.location);

  // Fetching product data
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setProduct(response.data.meals);
        setLoading(false);  // Data is fetched, stop loader
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);  // Stop loader even if error occurs
      });
  }, []);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddToCart = (item) => {
    // Dispatch the item to the Redux store
    dispatch(Addtocart(item));
    toast.success(`${item.strMeal} added to cart!`, { autoClose: 2000 }); // Show success toast
  };

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

      {/* Products Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          p: 2,
        }}
      >
        <Box sx={{ flex: 3 }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <CircularProgress />  {/* Show loader while loading */}
            </Box>
          ) : (
            <Grid container spacing={2}>
              {product?.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.idMeal}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      boxShadow: 2,
                      p: 2,
                      position: "relative", // For absolute positioning of button
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      sx={{ textTransform: "uppercase", mb: 1 }}
                    >
                      {item?.strMeal.length > 10 ? (
                        <span>{item?.strMeal.slice(0, 10)}...</span>
                      ) : (
                        item?.strMeal
                      )}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Rs. {item?.price}
                    </Typography>

                    {/* Image with Add to Cart button over it */}
                    <Box
                      sx={{
                        position: "relative", // Ensure the button stays over the image
                        width: "100%",
                        height: "200px", // Fix the height for images
                      }}
                    >
                      <Box
                        component="img"
                        src={item?.strMealThumb}
                        alt={item?.strMeal}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 2,
                        }}
                      />
                      {/* Add to Cart Button */}
                      <Button
                        onClick={() => handleAddToCart(item)} // Pass the specific item to the function
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "30px",
                          bgcolor: "white",
                          borderRadius: "50%",
                          p: 2,
                          "&:hover": {
                            bgcolor: "#f1f1f1",
                          },
                        }}
                        variant="text"
                        color="black"
                      >
                        <AddCircleIcon />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>

      {/* Toast Container for showing toast messages */}
      <ToastContainer />
    </Box>
  );
};

export default DetailPage;
