// import React, { useState, useEffect } from "react";
// import { Box, Typography, Grid, Button, TextField, Tabs, Tab, CircularProgress } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { useDispatch, useSelector } from "react-redux";
// import axios from 'axios';
// import { Addtocart } from "../../Slices/Addtocart/Addtocart";
// import { ToastContainer, toast } from 'react-toastify';  // Import Toastify
// import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toastify

// const DetailPage = () => {
//   const [value, setValue] = useState(0);
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state to show the loader
//   const dispatch = useDispatch();
//   const  location  = useSelector((state) => state.location);

//   // Fetching product data
//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => {
//         setProduct(response.data.meals);
//         setLoading(false);  // Data is fetched, stop loader
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);  // Stop loader even if error occurs
//       });
//   }, []);

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleAddToCart = (item) => {
//     // Dispatch the item to the Redux store
//     dispatch(Addtocart(item));
//     toast.success(`${item.strMeal} added to cart!`, { autoClose: 2000 }); // Show success toast
//   };

//   return (
//     <Box
//       sx={{
//         pl: { xs: "10px", sm: "20px", md: "50px" },
//         pr: { xs: "10px", sm: "20px", md: "50px" },
//         mt: "20px",
//         bgcolor: "#fff",
//         maxWidth: "100%",
//         pb: "20px",
//       }}
//     >
//       {/* Search and Tabs Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", sm: "row" },
//           gap: 2,
//           mt: 4,
//           width: "100%",
//         }}
//       >
//         <Box sx={{ flex: 1 }}>
//           <Box
//             sx={{
//               bgcolor: "#F7F7F7",
//               borderRadius: "30px",
//               display: "flex",
//               alignItems: "center",
//               px: 2,
//               py: 1,
//             }}
//           >
//             <SearchIcon />
//             <TextField
//               variant="standard"
//               placeholder="Search in menu"
//               sx={{ pl: 2, flex: 1 }}
//             />
//           </Box>
//         </Box>
//         <Box sx={{ flex: 2 }}>
//           <Tabs
//             value={value}
//             onChange={handleTabChange}
//             textColor="inherit"
//             variant="scrollable"
//             scrollButtons="auto"
//             sx={{
//               width: "100%",
//               "& .MuiTab-root": { fontSize: { xs: "12px", sm: "14px" } },
//             }}
//           >
//             <Tab label="Popular (6)" />
//             <Tab label="Summer Deals (1)" />
//             <Tab label="Anda (4)" />
//             <Tab label="Paratha (27)" />
//             <Tab label="Hot Beverages (24)" />
//           </Tabs>
//         </Box>
//       </Box>

//       {/* Products Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: 4,
//           p: 2,
//         }}
//       >
//         <Box sx={{ flex: 3 }}>
//           {loading ? (
//             <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
//               <CircularProgress />  {/* Show loader while loading */}
//             </Box>
//           ) : (
//             <Grid container spacing={2}>
//               {product?.map((item) => (
//                 <Grid item xs={12} sm={6} md={4} key={item.idMeal}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       border: "1px solid #ddd",
//                       borderRadius: 2,
//                       boxShadow: 2,
//                       p: 2,
//                       position: "relative", // For absolute positioning of button
//                     }}
//                   >
//                     <Typography
//                       variant="subtitle1"
//                       fontWeight="bold"
//                       sx={{ textTransform: "uppercase", mb: 1 }}
//                     >
//                       {item?.strMeal.length > 10 ? (
//                         <span>{item?.strMeal.slice(0, 10)}...</span>
//                       ) : (
//                         item?.strMeal
//                       )}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" mb={2}>
//                       Rs. {item?.price}
//                     </Typography>

//                     {/* Image with Add to Cart button over it */}
//                     <Box
//                       sx={{
//                         position: "relative", // Ensure the button stays over the image
//                         width: "100%",
//                         height: "200px", // Fix the height for images
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={item?.strMealThumb}
//                         alt={item?.strMeal}
//                         sx={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                           borderRadius: 2,
//                         }}
//                       />
//                       {/* Add to Cart Button */}
//                       <Button
//                         onClick={() => handleAddToCart(item)} // Pass the specific item to the function
//                         sx={{
//                           position: "absolute",
//                           top: "50%",
//                           left: "50%",
//                           transform: "translate(-50%, -50%)",
//                           fontSize: "30px",
//                           bgcolor: "white",
//                           borderRadius: "50%",
//                           p: 2,
//                           "&:hover": {
//                             bgcolor: "#f1f1f1",
//                           },
//                         }}
//                         variant="text"
//                         color="black"
//                       >
//                         <AddCircleIcon />
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>
//           )}
//         </Box>
//       </Box>

//       {/* Toast Container for showing toast messages */}
//       <ToastContainer />
//     </Box>
//   );
// };

// export default DetailPage;






























// import React, { useState, useEffect } from "react";
// import { Box, Typography, Breadcrumbs, Link, Grid, Stack, Button, Dialog, CardContent, Card, CardMedia, TextField, Tooltip, Tab, Tabs } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import QuettaFood from "../../images/hungry.svg";
// import InfoIcon from "@mui/icons-material/Info";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import QuettaMap from "../../images/hungry.svg";
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { useDispatch } from "react-redux";  // Import useDispatch
// import axios from 'axios';  // Import axios for API requests
// // import { Addtocart } from './redux/actions';  // Import your Addtocart action
// import HungryPanda from "../../images/hungry.svg"
// import { Addtocart } from "../../Slices/Addtocart/Addtocart";

// const CityFood = () => {
//   const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
//   const [value, setValue] = useState(0);
//   const [product, setProduct] = useState([]);  // State to store product data

//   const dispatch = useDispatch();  // Dispatch hook for actions

//   // Modal handling functions
//   const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
//   const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Fetch product data from API
//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);


//   const handleAddToCartClick = (product) => {
//         setSelectedProduct(product);  
//          setOpenConfirmModal(true);  
//       };
    
//        Handle confirmation of adding product to cart
//        const handleConfirmAddToCart = () => {
//          dispatch(Addtocart(selectedProduct));  
//          setOpenConfirmModal(false);  
//          toast.success('Product added to cart!'); 
//        };
    
//         Handle cancellation of adding product to cart
//        const handleCancelAddToCart = () => {
//         setOpenConfirmModal(false);  
//        };

//   return (
//     <Box sx={{ paddingLeft: { xs: "20px", sm: "50px", md: "120px" }, marginTop: "20px", marginLeft: { xs: "0", sm: "20px", md: "40px" }, backgroundColor: "#fff", maxWidth: "90%", marginRight: "auto", paddingBottom: "20px", width: "100%" }}>
    
   

//       {/* Main Card */}
//       <Grid container alignItems="center" sx={{ borderRadius: "8px", backgroundColor: "#fff", padding: "0.5rem", flexDirection: { xs: "row", sm: "row" } }}>
      
//         <Grid item xs>
         
//           <Stack spacing={0.5} sx={{ paddingLeft: { xs: "0", sm: "1rem" } }}>
          
//             <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" }, gap: { xs: "5px", sm: "15px" }, alignItems: "center" }}>
             
//             </Box>
//             <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" }, gap: { xs: "5px", sm: "15px" }, alignItems: "center" }}>
             
//             </Box>
//           </Stack>
//         </Grid>
//       </Grid>

//       {/* Delivery Modal */}
//       <Dialog open={openDeliveryModal} onClose={handleCloseDeliveryModal}>
//         <Box display="flex" justifyContent="center" p={2}>
//           <Card sx={{ maxWidth: 500, position: "relative" }}>
//             <CloseIcon aria-label="close" onClick={handleCloseDeliveryModal} sx={{ position: "absolute", top: 8, right: 8, backgroundColor: "#f1f1f1", color: "#000", borderRadius: "100%", width: "30px", height: "30px", "&:hover": { backgroundColor: "#e0e0e0" } }} />
//             <CardContent>
//               <Box display="flex"><Typography variant="h4">Quetta Paratha – <span style={{ fontWeight: "bold" }}>111</span></Typography></Box>
//               <Box mt={2}><Box display="flex" alignItems="center" color="black"><AccessTimeIcon /><Typography variant="body1" fontWeight="bold" paddingLeft={"10px"}>Now Open</Typography></Box>
//                 <Typography variant="body2" color="textSecondary">Monday – Sunday</Typography>
//                 <Typography variant="body2" color="textSecondary">00:00 – 23:59</Typography>
//               </Box>
//               <Box mt={2} display="flex" alignItems="center"><i className="fas fa-map-marker-alt" style={{ color: "red", marginRight: 8 }}></i><Typography variant="body2" color="textPrimary"><LocationOnIcon /> Market, Cavalry Ground.</Typography></Box>
//               <Box mt={2}><CardMedia component="img" height="140" src={QuettaMap} alt="Map showing the location of Mini Market, Cavalry Ground with nearby landmarks and streets." /></Box>
//               <Box mt={2}><Typography variant="body1" fontWeight="bold">Delivery fee</Typography><Typography variant="body2" color="textSecondary">Delivery fee is charged based on time of day, distance, and surge conditions</Typography></Box>
//               <Box mt={2}><Typography variant="body1" fontWeight="bold">Minimum order</Typography><Typography variant="body2" color="textSecondary">For orders below Rs. 249.00, we charge a small order fee.</Typography></Box>
//             </CardContent>
//           </Card>
//         </Box>
//       </Dialog>

//       {/* Search and Tabs Section */}
//       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: "row", sm: 'row' }, gap: 6, mt: 4, width: '100%' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
//           <Box sx={{ backgroundColor: "#F7F7F7", borderRadius: '30px', display: "flex", alignItems: "center", width: '100%' }}>
//             <SearchIcon className="ms-2" />
//             <TextField variant="standard" placeholder="Search in menu" sx={{ paddingLeft: '10px', width: '100%', maxWidth: '350px' }} />
//           </Box>
//         </Box>

//         <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//           <Tabs value={value} onChange={handleTabChange} textColor="inherit" variant="scrollable" scrollButtons="auto" sx={{ width: '100%' }}>
//             {/* Tabs for filtering */}
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Popular <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(6)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Summer Deals & Discounts <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(1)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Anda <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(4)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Paratha <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(27)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Hot Beverages <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(24)</span></span>} />
//           </Tabs>
//         </Box>
//       </Box>

//       {/* Display Products and Delivery Section */}
//       <Box sx={{ display: "flex", gap: 4, padding: 2 }}>
//         {/* Products Section */}
//         <Box sx={{ flex: 3 }}>
//           <Grid container spacing={2}>
//             {product?.map((item) => (
//               <Grid item xs={12} sm={6} key={item.idMeal}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     border: "1px solid #ddd",
//                     borderRadius: 2,
//                     boxShadow: 2,
//                     padding: 2,
//                     height: "150px", // Adjust the height for consistency
//                   }}
//                 >
//                   {/* Product Details */}
//                   <Box sx={{ flex: 1, marginRight: 2 }}>
//                     <Typography
//                       variant="subtitle1"
//                       fontWeight="bold"
//                       sx={{ textTransform: "uppercase" }}
//                       >
//                       {item?.strMeal}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {`Rs. ${item?.price} ${item?.packaging ? `(${item.packaging})` : ""
//                         }`}
//                     </Typography>
//                   </Box>

//                   {/* Image Container */}
//                   <Box
//                     component="img"
//                     src={item?.strMealThumb}
//                     alt={item?.strMeal}
//                     sx={{
//                       width: "170px",
//                       height: "170px",
//                       objectFit: "cover",
//                       borderRadius: 2,
//                       marginRight: 2,
//                     }}
//                   />

//                   {/* Add to Cart Button */}
//                   <Button  onClick={() => handleAddToCartClick(item)} variant="contained" color="primary" startIcon={<ShoppingCartIcon />} sx={{ borderRadius: "50px", fontSize: "0.8rem" }} onClick={()=>(dispatch(Addtocart(item)))}
//                     variant="contained"
//                     color="primary"
//                     startIcon={<ShoppingCartIcon />}
//                     sx={{
//                       borderRadius: "50px",
//                       fontSize: "0.8rem",
//                     }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </Box>
//               </Grid>
//             ))};
//           </Grid>
//         </Box>

//         {/* Delivery Payment Section */}
//         <Box
//           sx={{
//             flex: 1,
//             border: "1px solid #ddd",
//             borderRadius: 2,
//             boxShadow: 2,
//             padding: 2,
//             textAlign: "center",
//             height: "100%", // Makes the height adjust dynamically
//             minHeight: "750px", // Ensures it's visually balanced with the products section
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between", // Distributes space between items
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               gap: 2,
//               backgroundColor: "#f9f9f9",
//               padding: 1,
//               borderRadius: 2,
//               justifyContent: "center",
//             }}
//           >
//             {/* Delivery Button */}
//             <Button
//               sx={{
//                 textTransform: "none",
//                 fontWeight: "normal",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 padding: "15px 60px",
//                 "&.Mui-selected": {
//                   fontWeight: "bold",
//                 },
//                 color: "black",
//               }}
//             >
//               Delivery
//             </Button>

//             {/* Pick-up Button */}
//             <Button
//               sx={{
//                 textTransform: "none",
//                 fontWeight: "normal",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 padding: "15px 60px",
//                 "&.Mui-selected": {
//                   fontWeight: "bold",
//                 },
//                 color: "black",
//               }}
//             >
//               Pick-up
//             </Button>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//               flexGrow: 1, // Allows this part to take up remaining space
//             }}
//           >
//             <Box
//               component="img"
//               src={HungryPanda}
//               alt="Empty Cart"
//               sx={{
//                 width: "100px",
//                 height: "100px",
//                 margin: "0 auto",
//                 display: "block",
//               }}
//             />
//             <Typography variant="h6" fontWeight="bold">
//               Hungry?
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{
//                 marginY: 2,
//                 textAlign: "center", // Centers the text
//               }}
//             >
//               You haven't added anything to your cart!
//             </Typography>
//           </Box>

//           {/* Bottom section */}
//           <Box>
//             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <Typography variant="h6" fontWeight="bold">
//                   Total
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginY: 2, fontSize: "0.875rem", paddingLeft:"5px" }}>
//                   (incl. fees and tax)
//                 </Typography>
//               </Box>
//               <Typography variant="subtitle1" color="text.secondary" >
//                 Rs. 0
//               </Typography>
//             </Box>
//             <Button
//               variant="contained"
//               sx={{
//                 marginTop: 2,
//                 backgroundColor: "#ccc",
//                 cursor: "allowed",
//                 width: "100%", // Makes the button full-width if needed
//               }}
//             >
//               Review payment and address
//             </Button>
//           </Box>
//         </Box>

//       </Box>
// {/* Confirmation Modal */}
//        <Dialog open={openConfirmModal} onClose={handleCancelAddToCart}>
//         <Card sx={{ maxWidth: 400 }}>
//           <CardContent>
//             <Typography variant="h6">Are you sure you want to add this product to your cart?</Typography>
//              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
//               <Button onClick={handleCancelAddToCart} variant="outlined" color="secondary">
//                  Cancel
//               </Button>
//               <Button onClick={handleConfirmAddToCart} variant="contained" color="primary">
//                  Confirm
//                </Button>
//              </Box>
//          </CardContent>
//         </Card>
//     </Dialog>

//       {/* Toast Notification */}
//        <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

//     </Box>




//   );
// };

// export default CityFood;




//3333


// import React, { useState, useEffect } from "react";
// import { Box, Typography, Grid, Button, Dialog, CardContent, Card, CardMedia, TextField, Tabs, Tab, Stack } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useDispatch } from "react-redux";
// import axios from 'axios';
// import { Addtocart } from "../../Slices/Addtocart/Addtocart"; // Import Addtocart action
// import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// const CityFood = () => {
//   const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
//   const [value, setValue] = useState(0);
//   const [product, setProduct] = useState([]);  // State to store product data
//   const [openConfirmModal, setOpenConfirmModal] = useState(false); // State for the confirmation modal
//   const [selectedProduct, setSelectedProduct] = useState(null); // Store the product being added

//   const dispatch = useDispatch();  // Dispatch hook for actions

//   // Modal handling functions
//   const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
//   const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Fetch product data from API
//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   // Handle Add to Cart click
//   const handleAddToCartClick = (product) => {
//     setSelectedProduct(product);  // Store the selected product
//     setOpenConfirmModal(true);  // Show the confirmation modal
//   };

//   // Handle confirmation of adding product to cart
//   const handleConfirmAddToCart = () => {
//     dispatch(Addtocart(selectedProduct));  // Dispatch action to add the product to cart
//     setOpenConfirmModal(false);  // Close the confirmation modal
//     toast.success('Product added to cart!');  // Show success toast notification
//   };

//   // Handle cancellation of adding product to cart
//   const handleCancelAddToCart = () => {
//     setOpenConfirmModal(false);  // Close the confirmation modal
//   };

//   return (
//     <Box sx={{ paddingLeft: { xs: "20px", sm: "50px", md: "120px" }, marginTop: "20px", marginLeft: { xs: "0", sm: "20px", md: "40px" }, backgroundColor: "#fff", maxWidth: "90%", marginRight: "auto", paddingBottom: "20px", width: "100%" }}>
//       <Grid container alignItems="center" sx={{ borderRadius: "8px", backgroundColor: "#fff", padding: "0.5rem", flexDirection: { xs: "row", sm: "row" } }}>
//         <Grid item xs>
//           <Stack spacing={0.5} sx={{ paddingLeft: { xs: "0", sm: "1rem" } }}>
//             <Box sx={{ display: "flex", flexDirection: { xs: "row", sm: "row" }, gap: { xs: "5px", sm: "15px" }, alignItems: "center" }}>
//               {/* Content here */}
//             </Box>
//           </Stack>
//         </Grid>
//       </Grid>

//       {/* Product List */}
//       <Grid container spacing={2}>
//         {product?.map((item) => (
//           <Grid item xs={12} sm={6} key={item.idMeal}>
//             <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #ddd", borderRadius: 2, boxShadow: 2, padding: 2, height: "150px" }}>
//               <Box sx={{ flex: 1, marginRight: 2 }}>
//                 <Typography variant="subtitle1" fontWeight="bold" sx={{ textTransform: "uppercase" }}>
//                   {item?.strMeal}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {`Rs. ${item?.price}`}
//                 </Typography>
//               </Box>
//               <Box component="img" src={item?.strMealThumb} alt={item?.strMeal} sx={{ width: "170px", height: "170px", objectFit: "cover", borderRadius: 2, marginRight: 2 }} />
//               <Button onClick={() => handleAddToCartClick(item)} variant="contained" color="primary" startIcon={<ShoppingCartIcon />} sx={{ borderRadius: "50px", fontSize: "0.8rem" }}>
//                 Add to Cart
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Confirmation Modal */}
//       <Dialog open={openConfirmModal} onClose={handleCancelAddToCart}>
//         <Card sx={{ maxWidth: 400 }}>
//           <CardContent>
//             <Typography variant="h6">Are you sure you want to add this product to your cart?</Typography>
//             <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
//               <Button onClick={handleCancelAddToCart} variant="outlined" color="secondary">
//                 Cancel
//               </Button>
//               <Button onClick={handleConfirmAddToCart} variant="contained" color="primary">
//                 Confirm
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Dialog>

//       {/* Toast Notification */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </Box>
//   );
// };

// export default CityFood;





// import React, { useState, useEffect } from "react";
// import { Box, Typography, Grid, Stack, Button, Dialog, CardContent, Card, CardMedia, TextField, Tabs, Tab } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import { useDispatch } from "react-redux";  // Import useDispatch
// import axios from 'axios';  // Import axios for API requests
// import { Addtocart } from "../../Slices/Addtocart/Addtocart";  // Import your Addtocart action
// import HungryPanda from "../../images/hungry.svg";
// import QuettaMap from "../../images/hungry.svg";

// import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify
// import FavoriteIcon from '@mui/icons-material/Favorite';

// const CityFood = () => {
//   const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
//   const [openConfirmModal, setOpenConfirmModal] = useState(false);  // Initialize the confirmation modal state
//   const [value, setValue] = useState(0);
//   const [product, setProduct] = useState([]);  // State to store product data
//   const [selectedProduct, setSelectedProduct] = useState(null);  // To store the selected product
//   const dispatch = useDispatch();  // Dispatch hook for actions

//   // Modal handling functions
//   const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
//   const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);

//   const handleTabChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   // Fetch product data from API
//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddToCartClick = (product) => {
//     setSelectedProduct(product);  
//     setOpenConfirmModal(true);  
//   };

//   // Handle confirmation of adding product to cart
//   const handleConfirmAddToCart = () => {
//     dispatch(Addtocart(selectedProduct));  
//     setOpenConfirmModal(false);  
//     toast.success('Product added to cart!');
//   };

//   // Handle cancellation of adding product to cart
//   const handleCancelAddToCart = () => {
//     setOpenConfirmModal(false);  
//   };

//   return (
//     <Box sx={{ paddingLeft: { xs: "20px", sm: "50px", md: "120px" }, marginTop: "20px", marginLeft: { xs: "0", sm: "20px", md: "40px" }, backgroundColor: "#fff", maxWidth: "90%", marginRight: "auto", paddingBottom: "20px", width: "100%" }}>
      
//       {/* Delivery Modal */}
//       <Dialog open={openDeliveryModal} onClose={handleCloseDeliveryModal}>
//         <Box display="flex" justifyContent="center" p={2}>
//           <Card sx={{ maxWidth: 500, position: "relative" }}>
//             <CloseIcon aria-label="close" onClick={handleCloseDeliveryModal} sx={{ position: "absolute", top: 8, right: 8, backgroundColor: "#f1f1f1", color: "#000", borderRadius: "100%", width: "30px", height: "30px", "&:hover": { backgroundColor: "#e0e0e0" } }} />
//             <CardContent>
//               <Box display="flex"><Typography variant="h4">Quetta Paratha – <span style={{ fontWeight: "bold" }}>111</span></Typography></Box>
//               <Box mt={2}><Box display="flex" alignItems="center" color="black"><AccessTimeIcon /><Typography variant="body1" fontWeight="bold" paddingLeft={"10px"}>Now Open</Typography></Box>
//                 <Typography variant="body2" color="textSecondary">Monday – Sunday</Typography>
//                 <Typography variant="body2" color="textSecondary">00:00 – 23:59</Typography>
//               </Box>
//               <Box mt={2} display="flex" alignItems="center"><i className="fas fa-map-marker-alt" style={{ color: "red", marginRight: 8 }}></i><Typography variant="body2" color="textPrimary"><LocationOnIcon /> Market, Cavalry Ground.</Typography></Box>
//               <Box mt={2}><CardMedia component="img" height="140" src={QuettaMap} alt="Map showing the location of Mini Market, Cavalry Ground with nearby landmarks and streets." /></Box>
//               <Box mt={2}><Typography variant="body1" fontWeight="bold">Delivery fee</Typography><Typography variant="body2" color="textSecondary">Delivery fee is charged based on time of day, distance, and surge conditions</Typography></Box>
//               <Box mt={2}><Typography variant="body1" fontWeight="bold">Minimum order</Typography><Typography variant="body2" color="textSecondary">For orders below Rs. 249.00, we charge a small order fee.</Typography></Box>
//             </CardContent>
//           </Card>
//         </Box>
//       </Dialog>

//       {/* Search and Tabs Section */}
//       <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: "row", sm: 'row' }, gap: 6, mt: 4, width: '100%' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', width: 'auto' }}>
//           <Box sx={{ backgroundColor: "#F7F7F7", borderRadius: '30px', display: "flex", alignItems: "center", width: '100%' }}>
//             <SearchIcon className="ms-2" />
//             <TextField variant="standard" placeholder="Search in menu" sx={{ paddingLeft: '10px', width: '100%', maxWidth: '350px' }} />
//           </Box>
//         </Box>

//         <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//           <Tabs value={value} onChange={handleTabChange} textColor="inherit" variant="scrollable" scrollButtons="auto" sx={{ width: '100%' }}>
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Popular <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(6)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Summer Deals & Discounts <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(1)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Anda <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(4)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Paratha <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(27)</span></span>} />
//             <Tab label={<span style={{ fontSize: '14px', fontWeight: 'normal' }}>Hot Beverages <span style={{ fontSize: '18px', fontWeight: 'bold' }}>(24)</span></span>} />
//           </Tabs>
//         </Box>
//       </Box>

//       {/* Display Products and Delivery Section */}
//       <Box sx={{ display: "flex", gap: 4, padding: 2 }}>
//         {/* Products Section */}
//         <Box sx={{ flex: 3 }}>
//           <Grid container spacing={2}>
//             {product?.map((item) => (
//               <Grid item xs={12} sm={6} key={item.idMeal}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                     border: "1px solid #ddd",
//                     borderRadius: 2,
//                     boxShadow: 2,
//                     padding: 2,
//                     height: "150px", // Adjust the height for consistency
//                   }}
//                 >
//                   {/* Product Details */}
//                   <Box sx={{ flex: 1, marginRight: 2 }}>
//                     <Typography
//                       variant="subtitle1"
//                       fontWeight="bold"
//                       sx={{ textTransform: "uppercase" }}
//                     >
//                       {item?.strMeal}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {`Rs. ${item?.price} ${item?.packaging ? `(${item.packaging})` : ""}`}
//                     </Typography>
//                   </Box>

//                   {/* Image Container */}
//                   <Box
//                     component="img"
//                     src={item?.strMealThumb}
//                     alt={item?.strMeal}
//                     sx={{
//                       width: "290px",
//                       height: "150px",
//                       objectFit: "cover",
//                       borderRadius: 2,
//                       marginRight: 2,
//                     }}
//                   />

//                   {/* Add to Cart Button */}
//                   <Button onClick={() => handleAddToCartClick(item)} variant="contained" color="primary" startIcon={<ShoppingCartIcon />} sx={{ borderRadius: "50px", fontSize: "0.8rem" }}>
                  
//                   </Button>
//                   <Button><FavoriteIcon/> </Button>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Delivery Payment Section */}
//         <Box sx={{ flex: 1, border: "1px solid #ddd", borderRadius: 2, boxShadow: 2, padding: 2, textAlign: "center", height: "100%", minHeight: "750px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//           <Box sx={{ display: "flex", gap: 2, backgroundColor: "#f9f9f9", padding: 1, borderRadius: 2, justifyContent: "center" }}>
//             <Button sx={{ textTransform: "none", fontWeight: "normal", border: "1px solid #ddd", borderRadius: 2, padding: "15px 60px", "&.Mui-selected": { fontWeight: "bold" }, color: "black" }}>
//               Delivery
//             </Button>
//             <Button sx={{ textTransform: "none", fontWeight: "normal", border: "1px solid #ddd", borderRadius: 2, padding: "15px 60px", "&.Mui-selected": { fontWeight: "bold" }, color: "black" }}>
//               Pick-up
//             </Button>
//           </Box>

//           <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", flexGrow: 1 }}>
//             <Box component="img" src={HungryPanda} alt="Empty Cart" sx={{ width: "100px", height: "100px", margin: "0 auto", display: "block" }} />
//             <Typography variant="h6" fontWeight="bold">
//               Hungry?
//             </Typography>
//             <Typography variant="body2" color="text.secondary" sx={{ marginY: 2, textAlign: "center" }}>
//               You haven't added anything to your cart!
//             </Typography>
//           </Box>

//           <Box>
//             <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <Typography variant="h6" fontWeight="bold">
//                   Total
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ marginY: 2, fontSize: "0.875rem", paddingLeft:"5px" }}>
//                   (incl. fees and tax)
//                 </Typography>
//               </Box>
//               <Typography variant="subtitle1" color="text.secondary">
//                 Rs. 0
//               </Typography>
//             </Box>
//             <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#ccc", cursor: "allowed", width: "100%" }}>
//               Review payment and address
//             </Button>
//           </Box>
//         </Box>

//       </Box>

//       {/* Confirmation Modal */}
//       <Dialog open={openConfirmModal} onClose={handleCancelAddToCart}>
//         <Card sx={{ maxWidth: 400 }}>
//           <CardContent>
//             <Typography variant="h6">Are you sure you want to add this product to your cart?</Typography>
//             <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
//               <Button onClick={handleCancelAddToCart} variant="outlined" color="secondary">
//                 Cancel
//               </Button>
//               <Button onClick={handleConfirmAddToCart} variant="contained" color="primary">
//                 Confirm
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Dialog>
//        {/* Toast Notification */}
// //       <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//     </Box>
//   );
// };

// export default CityFood;



import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button, Dialog, CardContent, Card, CardMedia, TextField, Tabs, Tab } from "@mui/material";
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

const CityFood = () => {
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
    toast.success('Product added to cart!');
  };

  const handleCancelAddToCart = () => {
    setOpenConfirmModal(false);  
  };
  const { cartitems } = useSelector((state) => state.Cart);

  return (
    <Box sx={{ padding: { xs: "20px", sm: "50px", md: "120px" }, marginTop: "20px", backgroundColor: "#fff", maxWidth: "90%", margin: "0 auto", paddingBottom: "20px", width: "100%" }}>
      
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
                  <Button   onClick={() => handleAddToCartClick(item)}  sx={{
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
                          <img style={{ width: "60px", height: "50px" }} src={item?.strMealThumb} alt="" /> 
                          
                         
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
            <Typography variant="h6">Are you sure you want to add this product to your cart?</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
              <Button onClick={handleCancelAddToCart} variant="outlined" color="secondary">Cancel</Button>
              <Button onClick={handleConfirmAddToCart} variant="contained" color="primary">Confirm</Button>
            </Box>
          </CardContent>
        </Card>
      </Dialog>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </Box>
  );
};

export default CityFood;
