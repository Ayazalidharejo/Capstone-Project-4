import { Box, Button, Card, Grid, Tooltip, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./index.css";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Addtocart } from '../../Slices/Addtocart/Addtocart';

const Restorentspage = () => {
    const [product, setproduct] = useState([]);
    const dispach = useDispatch ()
    console.log(product);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => setproduct(response.data.categories))

            
            .catch((error) => console.log(error));
    }, []);

    return (
        <Grid className='ms-5 container pt-5' container spacing={4}>
            {product?.map((item) => {
                return (
                    <Grid className='mb-3' item xs={12} md={3} lg={4} key={item.idCategory}>
                        <Card className='rounded-2 p-2' sx={{ height: "100%" }}>
                            <div className='image-container'>
                               <NavLink to="/FilterProduct">
                               <img className='image' src={item?.strCategoryThumb} alt={item.strCategory} />
                               </NavLink>
                            </div>
                            <Box className="d-flex align-items-center flex-column">
                               
                                    <Typography variant='h6' className='text-truncate'>
                                        {item?.strCategory}
                                    </Typography>
                                    <Tooltip title={item?.strCategoryDescription} placement="top-start">
                                <Typography variant='body2' className='text-truncate'>
                                    {item?.strCategoryDescription.length > 50 ? `${item.strCategoryDescription.slice(0, 50)}...` : item?.strCategoryDescription}
                                </Typography>
                                </Tooltip>
                                <Box className="text-center mt-auto">
                                    <Tooltip title="Add to Cart" placement="top">
                                        <Button onClick={()=>(dispach(Addtocart(item)))}  sx={{
            '&:hover': {
                borderColor: 'pink',
                color: '#e21b70'
            }
        }} variant="outlined" color="primary">
                                            <ShoppingCartIcon />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip className='mx-5'  title="Favorite" placement="top">
    <Button 
        variant="outlined" 
        color="primary" 
        sx={{
            '&:hover': {
                borderColor: 'pink',
                color: '#e21b70'
            }
        }}
    >
        <FavoriteIcon />
    </Button>
</Tooltip>
                                    <Tooltip title="View" placement="top">
                                        <Link to="/FilterProduct">
                                            <Button   sx={{
            '&:hover': {
                borderColor: 'pink',
                color: '#e21b70'
            }
        }} variant="outlined" color="primary">
                                                <VisibilityIcon />
                                            </Button>
                                        </Link>
                                    </Tooltip>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Restorentspage;