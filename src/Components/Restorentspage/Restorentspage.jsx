import React, { useState } from "react";

import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Divider,
    Tooltip,
    Modal,
    Button
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import food1 from "../../images/food1.jpg";
import food2 from "../../images/food30.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";
import food5 from "../../images/food5.jpg";
import food6 from "../../images/food6.jpg";
import food7 from "../../images/food7.jpg";
import food8 from "../../images/food8.jpg";
import food9 from "../../images/food9.jpg";
import food10 from "../../images/food10.jpg";
import food11 from "../../images/food11.jpg";
import food12 from "../../images/food12.jpg";
import food13 from "../../images/food13.jpg";
import food14 from "../../images/food14.jpg";
import food15 from "../../images/food.jpg";
import food16 from "../../images/food16.jpg";
import food17 from "../../images/food17.jpg";
import food18 from "../../images/food18.jpg";
import food19 from "../../images/food19.jpg";
import food20 from "../../images/food20.jpg";
import food21 from "../../images/food21.jpg";
import food22 from "../../images/food22.jpg";
import food23 from "../../images/food23.jpg";
import food24 from "../../images/food24.jpg";
import food25 from "../../images/food25.jpg";
import food26 from "../../images/food26.jpg";
import food27 from "../../images/food27.jpg";
import food28 from "../../images/food3.jpg";
import food29 from "../../images/food29.jpg";
import food30 from "../../images/food30.jpg";
import Hero from "../../images/refresh.webp";
import { useDispatch, useSelector } from "react-redux";
import { View } from "../../Slices/View";



const Restaurant = () => {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleClose = () => setOpenModal(false);

    // Dummy data for restaurants
   
// Dummy data for restaurants with correct image paths and added 'isClosed' property where applicable
const products = [
  { id: 1, name: 'Spice Delight', image: food1, rating: "4.5", type: "Indian Cuisine", isClosed: false },
  { id: 2, name: 'Burger Point', image: food2, rating: "4.2", type: "Burgers", isClosed: false },
  { id: 3, name: 'Pasta Paradise', image: food3, rating: "4.3", type: "Italian", isClosed: false },
  { id: 4, name: 'Sushi House', image: food4, rating: "4.8", type: "Japanese", isClosed: false },
  { id: 5, name: 'Grill Master', image: food5, rating: "4.7", type: "BBQ", isClosed: false },
  { id: 6, name: 'Vegan Bites', image: food6, rating: "4.6", type: "Vegan", isClosed: false },
  { id: 7, name: 'Sweet Treats', image: food7, rating: "4.3", type: "Desserts", isClosed: false },
  { id: 8, name: 'Taco Fiesta', image: food8, rating: "4.4", type: "Mexican", isClosed: false },
  { id: 9, name: 'Pizza Place', image: food9, rating: "4.1", type: "Pizza", isClosed: false },
  { id: 10, name: 'Steak House', image: food10, rating: "4.9", type: "Steak", isClosed: false },
  { id: 11, name: 'Fish Fry', image: food11, rating: "4.3", type: "Seafood", isClosed: false },
  { id: 12, name: 'Kebab Corner', image: food12, rating: "4.6", type: "Kebabs", isClosed: false },
  { id: 13, name: 'Sushi Spot', image: food13, rating: "4.7", type: "Sushi", isClosed: false },
  { id: 14, name: 'Noodle House', image: food14, rating: "4.4", type: "Chinese", isClosed: false },
  { id: 15, name: 'Bakery Bliss', image: food15, rating: "4.2", type: "Bakery", isClosed: true },
  { id: 16, name: 'Cafe Mocha', image: food16, rating: "4.8", type: "Café", isClosed: false },
  { id: 17, name: 'Pasta Perfection', image: food17, rating: "4.5", type: "Italian", isClosed: false },
  { id: 18, name: 'Fries Factory', image: food18, rating: "4.3", type: "Fries & Snacks", isClosed: false },
  { id: 19, name: 'Smoothie Spot', image: food19, rating: "4.4", type: "Smoothies", isClosed: false },
  { id: 20, name: 'Hot Dog Haven', image: food20, rating: "4.0", type: "Hot Dogs", isClosed: false },
  { id: 21, name: 'Taco Fiesta', image: food21, rating: "4.4", type: "Mexican", isClosed: true },
  { id: 22, name: 'Pasta House', image: food22, rating: "4.5", type: "Italian", isClosed: false },
  { id: 23, name: 'Steak Retreat', image: food23, rating: "4.8", type: "Steakhouse", isClosed: false },
  { id: 24, name: 'Sushi World', image: food24, rating: "4.9", type: "Japanese", isClosed: false },
  { id: 25, name: 'BBQ Shack', image: food25, rating: "4.7", type: "BBQ", isClosed: false },
  { id: 26, name: 'Dessert Haven', image: food26, rating: "4.6", type: "Desserts", isClosed: false },
  { id: 27, name: 'Smoothie Blend', image: food27, rating: "4.4", type: "Smoothies", isClosed: true },
  { id: 28, name: 'Baker’s Corner', image: food28, rating: "4.2", type: "Bakery", isClosed: true },
  { id: 29, name: 'Fries and More', image: food29, rating: "4.3", type: "Fries & Snacks", isClosed: true },
  { id: 30, name: 'Sushi Bar', image: food30, rating: "4.5", type: "Sushi", isClosed: true },

]
// Retrieve the 'user' value from localStorage



const storedUser = localStorage.getItem("user");
const  location  = useSelector((state) => state.location);

    const handleCardClick = (product) => {
        if (product.isClosed ) {
            setSelectedRestaurant(product.name);
            setOpenModal(true);
            
        }else if (storedUser) {
          try {
            const user = JSON.parse(storedUser);
            navigate("/ViewDetail");
          } catch (error) {
            alert("Invalid user data");
          }
        }else{
          alert("no have assees")
        }


        
        // else if(storedUser){
        //   const user = JSON.parse(storedUser);
        //   navigate("/ViewDetail");

        // } else {
         
        // }
    };


    const dispach =useDispatch()
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f8f9fa",
                    padding: "60px 20px",
                    minHeight: "300px",
                    position: "relative",
                    flexDirection: "column",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: { xs: "100%", sm: "50%" },
                        height: "100%",
                        backgroundImage: `url(${Hero})`,

                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "right center",
                        zIndex: 0,
                    }}
                />
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
                            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                        }}
                    >
                        Food and groceries delivery from <br />
                        Lahore's best restaurants and shops
                    </Typography>
                </Container>
            </Box>

            {/* Restaurant Cards */}
            <Container sx={{ marginTop: "40px" }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        marginBottom: "20px",
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: { xs: "28px", sm: "34px", md: "40px" },
                    }}
                >
                   All Restaurants
                    {location?.name && (
                     <Typography
                       sx={{ 
                         paddingRight:"250px",
                         textAlign: "center",  // This centers the text
                          // Ensure it takes up the full width
                         marginTop: "12px",  // Equivalent to mt-3
                         fontSize: "14px",  // Equivalent to fs-6
                         color: "rgba(0, 0, 0, 0.5)",  // Equivalent to text-opacity-50
                       
                       }} 
                       className="location"
                     >
                       <b>Location: {location.name}</b>
                     </Typography>
                   )}
                   
                </Typography>

                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card
  sx={{
    transition: "0.3s",
    boxShadow: 3,
    borderRadius: "12px",
    overflow: "hidden",
    '&:hover': {
      boxShadow: 6,
      transform: "scale(1.05)",
      cursor: "pointer",
    },
    opacity: product.isClosed ? 0.5 : 1,
    position: 'relative'
  }}
  onClick={() => {
    handleCardClick(product);  // Trigger handleCardClick
    dispach(View(product));   // Dispatch the Redux action
  }}
>
                                <CardMedia 
                                    component="img" 
                                    height="200"
                                    image={product.image}
                                    alt={product.name}
                                />
                                {product.isClosed && (
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            background: 'rgba(0,0,0,0.5)',
                                            padding: '5px 10px',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        Closed
                                    </Typography>
                                )}
                                <CardContent sx={{ padding: "16px", textAlign: "center" }}>
                                    <Typography variant="h6">{product.name}</Typography>
                                    <Typography>Rating: {product.rating}/5 ✨</Typography>
                                    <Typography>{product.type}</Typography>
                                </CardContent>
                                <Divider />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Modal */}
            <Modal open={openModal} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Typography variant="h6" component="h2">
                        {selectedRestaurant} is Closed
                    </Typography>
                    <Button onClick={handleClose} sx={{ marginTop: 2 }}>Close</Button>
                </Box>
            </Modal>
        </Box>
    );
};

export default Restaurant;