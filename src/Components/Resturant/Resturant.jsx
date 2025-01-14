import React, { useState } from "react";
import heroImage from "../../images/hero-img.webp";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Modal,
    Button
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Resturant1 from '../../images/Resturant1.webp';
import Resturant2 from '../../images/Resturant2.webp';
import Resturant3 from '../../images/resturant3.webp';
import Resturant4 from '../../images/Resturant04.webp';
import Resturant5 from '../../images/Resturant05.webp';
import Resturant6 from '../../images/Resturant06.webp';
import Resturant7 from '../../images/Restuant7.webp';
import Resturant8 from '../../images/Resturant08.webp';
import Resturant9 from '../../images/Resturant09.webp';
import Resturant10 from '../../images/Resturant10.webp';
import Navbar from "../Home_Page/Navbar/navbar";
import Footer from "../Home_Page/Footer/Footer";

const Restaurant = () => {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleClose = () => setOpenModal(false);

    const products = [
        {
            id: 'SpiceDelight',
            name: 'Karachi Al Nazz Biryani (supply)',
            image: Resturant1,
            rating: "4.5",
            type: "Indian Cuisine",
            heading:"Welcome gift: free de...",
            heading2:"20% off: mc20"
        },
        {
            id: 'BurgerPoint',
            name: 'SAIF BAKERS & SWEET (branch 2)',
            image: Resturant2,
            rating: "4.2",
            type: "Burgers",
             heading:"Welcome gift: free de...",
            heading2:"20% off: mc20"
        },
        {
            id: 'PastaParadise',
            name: 'Bangladeshi Samosa Center and Fast Food',
            image: Resturant3,
            rating: "4.3",
            type: "Italian",
            isClosed: true,
            order:  "Closed until Sat 11:30"  
            
        },
        {
            id: 'SushiHouse',
            name: 'Jannu Butt-Khoye wale Mutton Channay',
            image: Resturant4,
            rating: "4.8",
            type: "Japanese",
            isClosed: true,
            order:  "Closed until Sat 1:42"  
            
        },
        {
            id: 'GrillMaster',
            name: 'Grill Master',
            image: Resturant5,
            rating: "4.7",
            type: "BBQ",
             heading:"Welcome gift: free de...",
            heading2:"20% off: mc20"
        },
        {
            id: 'VeganBites',
            name: 'Vegan Bites',
            image: Resturant6,
            rating: "4.6",
            type: "Vegan",
             heading:"Welcome gift: free de...",
            heading2:"20% off: mc20"
        },
        {
            id: 'SweetTreats',
            name: 'Sweet Treats',
            image: Resturant7,
            rating: "4.3",
            type: "Desserts",
            isClosed: true,
            order:  "Closed until Sat 10:42"  
           
        },
        {
            id: 'TacoFiesta',
            name: 'Taco Fiesta',
            image: Resturant8,
            rating: "4.4",
            type: "Mexican",
            isClosed: true,
          order:  "Closed until Sat 12:42"           
        },
        {
            id: 'PizzaWorld',
            name: 'Pizza World',
            image: Resturant9,
            rating: "4.5",
            type: "Pizza",
             heading:"Welcome gift: free de...",
            heading2:"20% off: mc20"
        },
        {
            id: 'SeafoodBay',
            name: 'Seafood Bay',
            image: Resturant10,
            rating: "4.6",
            type: "Seafood",
             heading:"Welcome gift: free de...",
            heading2:"20% off: mc20"
        }
    ];

    const handleCardClick = (product) => {
        if (product.isClosed) {
            setSelectedRestaurant(product.name);
            setOpenModal(true);
        } else {
            navigate(`/ProductDetails/${product.id}`, {
                state: { image: product.image, name: product.name }
            });
        }
    };

    return (
        <Box>


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
                        backgroundImage: `url(${heroImage})`,
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

            <Container sx={{ marginTop: "40px" }}>
                <Typography variant="h4">All Restaurants</Typography>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <Card className=" position-relative"
                                sx={{
                                    transition: "0.3s",
                                    boxShadow: 3,
                                    borderRadius: "12px",
                                    '&:hover': { boxShadow: 6, transform: "scale(1.05)" },
                                    opacity: product.isClosed ? 0.5 : 1
                                }}
                                onClick={() => handleCardClick(product)}
                            >
                                <CardMedia style={product.isClosed ? { filter: "brightness(70%)" } : {}}  component="img" height="200" image={product.image} alt={product.name} />
                                <CardContent >
                                   <Box className="d-flex justify-content-between align-items-center">  <Typography className="fw-bold" variant="body1">{product.name.length>10 ?`${product.name.slice(0,15)}...`:product.name}</Typography>
                                   <Typography variant="body1">Rating: {product.rating}/5 ✨</Typography>  </Box>

                                    <Typography  style={{backgroundColor:"#e21b70"}} className="px-1 position-absolute top-0 start-0 mt-2 ms-2 text-white rounded-2 fs-6" variant="body1">{product.heading}</Typography>
                                    <Typography  style={{backgroundColor:"#e21b70"}} className="px-1 position-absolute top-0 start-0 ms-2 mt-5 text-white rounded-2 fs-6" variant="body1">{product.heading2}</Typography>
                                 
                                    <Typography>{product.type}</Typography>
                                  { product.isClosed && <Button style={{color:"#e21b70"}} className="px-1   bg-white position-absolute top-50 start-50 translate-middle mb-5 ms-2   ">
  Order for later
</Button>}

                                    {product.isClosed && <Typography className="px-1 pt-5 fw-bold position-absolute top-0 start-50 translate-middle-x mt-5 ms-2 text-white  fs-6">{product.order} </Typography>}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default Restaurant;
