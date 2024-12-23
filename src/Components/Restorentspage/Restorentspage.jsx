// import { Box, Button, Card, Grid, Tooltip, Typography } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import "./index.css";
// import { Link, NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { Addtocart } from '../../Slices/Addtocart/Addtocart';

// const Restorentspage = () => {
//     const [product, setproduct] = useState([]);
//     const dispach = useDispatch ()
//     console.log(product);

//     useEffect(() => {
//         axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
//             .then((response) => setproduct(response.data.categories))

            
//             .catch((error) => console.log(error));
//     }, []);

//     return (
//         <Grid className='ms-5 container pt-5' container spacing={4}>
//             {product?.map((item) => {
//                 return (
//                     <Grid className='mb-3' item xs={12} md={3} lg={4} key={item.idCategory}>
//                         <Card className='rounded-2 p-2' sx={{ height: "100%" }}>
//                             <div className='image-container'>
//                                <NavLink to="/FilterProduct">
//                                <img className='image' src={item?.strCategoryThumb} alt={item.strCategory} />
//                                </NavLink>
//                             </div>
//                             <Box className="d-flex align-items-center flex-column">
                               
//                                     <Typography variant='h6' className='text-truncate'>
//                                         {item?.strCategory}
//                                     </Typography>
//                                     <Tooltip title={item?.strCategoryDescription} placement="top-start">
//                                 <Typography variant='body2' className='text-truncate'>
//                                     {item?.strCategoryDescription.length > 50 ? `${item.strCategoryDescription.slice(0, 50)}...` : item?.strCategoryDescription}
//                                 </Typography>
//                                 </Tooltip>
//                                 <Box className="text-center mt-auto">
//                                     <Tooltip title="Add to Cart" placement="top">
//                                         <Button onClick={()=>(dispach(Addtocart(item)))}  sx={{
//             '&:hover': {
//                 borderColor: 'pink',
//                 color: '#e21b70'
//             }
//         }} variant="outlined" color="primary">
//                                             <ShoppingCartIcon />
//                                         </Button>
//                                     </Tooltip>
//                                     <Tooltip className='mx-5'  title="Favorite" placement="top">
//     <Button 
//         variant="outlined" 
//         color="primary" 
//         sx={{
//             '&:hover': {
//                 borderColor: 'pink',
//                 color: '#e21b70'
//             }
//         }}
//     >
//         <FavoriteIcon />
//     </Button>
// </Tooltip>
//                                     <Tooltip title="View" placement="top">
//                                         <Link to="/FilterProduct">
//                                             <Button   sx={{
//             '&:hover': {
//                 borderColor: 'pink',
//                 color: '#e21b70'
//             }
//         }} variant="outlined" color="primary">
//                                                 <VisibilityIcon />
//                                             </Button>
//                                         </Link>
//                                     </Tooltip>
//                                 </Box>
//                             </Box>
//                         </Card>
//                     </Grid>
//                 );
//             })}
//         </Grid>
//     );
// };

// export default Restorentspage;

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import heroImage from "../../images/refresher.jpg";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Divider, Tooltip, Button, } from "@mui/material";
import { useEffect, useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

 import { Addtocart } from '../../Slices/Addtocart/Addtocart';
import { useDispatch } from "react-redux";
import { Favi } from "../../Slices/Favirate";
import { Link } from "react-router-dom";
import RestorentModal from "./RestorentModal/RestorentModal";
// import { useNavigate } from 'react-router-dom';


const Restaurant = () => {
    const [products, setProducts] = useState([]);
    const usedspch =useDispatch()


    // const navigate = useNavigate();
    //modal//
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const user = JSON.parse(localStorage.getItem("User"));
    //modal  end//

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
                setProducts(response.data.meals);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
      <>
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8f9fa",
                    padding: "50px 20px",
                    minHeight: "300px",
                    position: "relative",
                    flexDirection: "column",

                }}
            >
                {/* Background Image */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: { xs: "100%", sm: "40%" },
                        height: "100%",
                        backgroundImage:`url(${heroImage})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                        zIndex: 0,
                    }}
                />

                {/* Text Section */}
                <Container
                    sx={{
                        zIndex: 1,
                        position: "relative",
                        color: "black",
                        textAlign: { xs: "center", md: "left" },
                        maxWidth: "600px",
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "24px", sm: "32px", md: "50px" },
                            lineHeight: 1.2,
                        }}
                    >
                        Food and groceries delivery from <br />
                        Lahore's best restaurants and shops
                    </Typography>
                </Container>
            </Box>

            {/* Products Section */}
            <Container sx={{ marginTop: "40px" }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ marginBottom: "20px", fontWeight: "bold" }}
                >
                    Restaurants
                </Typography>
                <Grid  container spacing={4}>
  {products.map((product) => (
    <Grid item xs={12} sm={6} md={4} key={product.idMeal}>
      <Card
        sx={{
          height: "100%", // Ensures all cards are equal in height
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {/* Card Image */}
        <CardMedia 
          // component="img"
          // height="180"
          // image={product.strMealThumb}
          // alt={product.strMeal}
          // sx={{
          //   borderRadius: "10px 10px 0 0",
          // }}
        />
      <Link  to="/FilterProduct">
      <img sx={{
          
            
          }}  
          style={{  borderRadius: "10px 10px 0 0",height:"360px"}}
           src={product.strMealThumb} alt={product.strMeal} />
      </Link>

        {/* Card Content */}
        <CardContent
          sx={{
            flexGrow: 1, // Ensures content expands to fill available space
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: "bold",
              marginBottom: "8px",
              fontSize: "1.2rem",
            }}
          >
            {product.strMeal}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: "8px" }}
          >
            A delicious seafood dish to try.
          </Typography>
        </CardContent>

        {/* Divider */}
        <Divider sx={{ margin: "0 16px" }} />

        {/* Action Icons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "16px",
          }}
        >
          <Tooltip title="Details" placement="top">


<Button 
  sx={{
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "gray",
    "&:hover": { color: "black" },
  }} 
  onClick={() => {
    if (user) {
      <Link to="/FilterProduct" />;
    } else {
      handleOpen();
    }
  }}
>
<RemoveRedEyeIcon onClick={ ()=>(usedspch(View(product)))} />

 
</Button>
          
          </Tooltip>
          <Tooltip title="Favorite" placement="top">
            <Button onClick={()=> {
              
              if (usedspch(Favi(product)) && user) {
    
              } else{
                handleOpen();
              }
            }}
>
              
           
            <FavoriteBorderIcon 
              sx={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "gray",
                "&:hover": { color: "red" },
              }}
            />
            </Button>
          </Tooltip>
          <Tooltip title="Add to Cart" placement="top">
          <Button 
  onClick={() => {
    if (usedspch(Addtocart(product)) && user) {
    
    } else{
      handleOpen();
    }
     
    
  }}
>
              
            <AddShoppingCartIcon
              sx={{
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "gray",
                "&:hover": { color: "green" },
              }}
            />
            </Button>
          </Tooltip>
        </Box>
      </Card>
    </Grid>
  ))}
</Grid>


            </Container>
        </Box>
        <RestorentModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </>
    );
};

export default Restaurant;