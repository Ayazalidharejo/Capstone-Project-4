import { Box, Grid, Typography, Button, } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Cardsimages.css"

// Import city images
import Islamabad from '../../../images/Islamabad.webp';
import Karachi from '../../../images/Karachi.webp';
import Lahore from '../../../images/Lahore.webp';
import Faisalabad from '../../../images/Faisalabad.webp';
import Rawalpindi from '../../../images/Rawalpindi.webp';
import Abbottabad from '../../../images/Abottabad.webp';
import Bahawalpur from '../../../images/Bahawalpur.webp';
import DeraGhaziKhan from '../../../images/GhaziKhan.webp';
import Gujranwala from '../../../images/Gujranwala.webp';
import Gujrat from '../../../images/Gujrat.jpg';
import Hyderabad from '../../../images/Hyderabad.webp';
import Jhelum from '../../../images/Jhelum.webp';
import Kamoke from '../../../images/Kamoke.webp';
import Larkana from '../../../images/Larkana.webp';
import Mangla from '../../../images/Mangla.webp';
import Mardan from '../../../images/Mardan.webp';
import Multan from '../../../images/Multan.webp';
import Murree from '../../../images/Murree.webp';
import Okara from '../../../images/Okara.webp';
import PanoAqil from '../../../images/PanoAqil.webp';
import Peshawar from '../../../images/Peshawar.webp';
import Quetta from '../../../images/Quetta.webp';
import RahimYarKhan from '../../../images/RahimYarKhan.webp';
import Sadiqabad from '../../../images/Sadiqabad.webp';
import Sahiwal from '../../../images/Sahiwal.webp';
import Sargodha from '../../../images/Sargodha.webp';
import Sheikhupura from '../../../images/Sheikhupura.jpg';
import Sialkot from '../../../images/Sialkot.webp';
import Sukkur from '../../../images/Sukkur.webp';
import WahCantt from '../../../images/WahhCannt.webp';
import { useDispatch } from 'react-redux';
import { Addlocation } from '../../Slices/Location';


// // City data array
const cities = [
    { id: 1, name: 'Islamabad', image: Islamabad,latter:"I" },
    { id: 2, name: 'Karachi', image: Karachi ,latter:"k"},
    { id: 3, name: 'Lahore', image: Lahore  ,latter:"L"},
    { id: 4, name: 'Faisalabad', image: Faisalabad  ,latter:"F"},
    { id: 5, name: 'Rawalpindi', image: Rawalpindi ,latter:"R" },
    { id: 6, name: 'Abbottabad', image: Abbottabad  ,latter:"A"},
    { id: 7, name: 'Bahawalpur', image: Bahawalpur ,latter:"B"},
    { id: 8, name: 'Dera Ghazi Khan', image: DeraGhaziKhan ,latter:"D" },
    { id: 9, name: 'Gujranwala', image: Gujranwala ,latter:"G"},
    { id: 10, name: 'Gujrat', image: Gujrat  ,latter:"G"},
    { id: 11, name: 'Hyderabad', image: Hyderabad ,latter:"H"},
    { id: 12, name: 'Jhelum', image: Jhelum ,latter:"J"},
    { id: 13, name: 'Kamoke', image: Kamoke ,latter:"k"},
    { id: 14, name: 'Larkana', image: Larkana ,latter:"L"},
    { id: 15, name: 'Mangla', image: Mangla ,latter:"M"},
    { id: 16, name: 'Mardan', image: Mardan  ,latter:"M"},
    { id: 17, name: 'Multan', image: Multan  ,latter:"M"},
    { id: 18, name: 'Murree', image: Murree  ,latter:"M"},
    { id: 19, name: 'Okara', image: Okara ,latter:"O"},
    { id: 20, name: 'PanoAqil', image: PanoAqil ,latter:"P"},
    { id: 21, name: 'Peshawar', image: Peshawar ,latter:"P"},
    { id: 22, name: 'Quetta', image: Quetta ,latter:"Q"},
    { id: 23, name: 'RahimYarKhan', image: RahimYarKhan ,latter:"R" },
    { id: 24, name: 'Sadiqabad', image: Sadiqabad ,latter:"S"},
    { id: 25, name: 'Sahiwal', image: Sahiwal ,latter:"S"},
    { id: 26, name: 'Sargodha', image: Sargodha ,latter:"S"},
    { id: 27, name: 'Sheikhupura', image: Sheikhupura ,latter:"S"},
    { id: 28, name: 'Sialkot', image: Sialkot ,latter:"S"},
    { id: 29, name: 'Sukkur', image: Sukkur  ,latter:"S"},
    { id: 30, name: 'WahCantt', image: WahCantt ,latter:"W"},
];

const Card = () => {
    const dispatch = useDispatch();
    const userData =localStorage.getItem("user")
 

    return (
        <div className="container py-5">
            <Typography variant="h4" align="start" gutterBottom>
                Find us in these cities and many more!
            </Typography>
            <Grid container spacing={2}>
                {cities.map((city) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={city.id}>
                        <Link to={`/Resturant?city=${city.name}&user=${userData}`} style={{ textDecoration: 'none' }}>
                            <Box 
                                sx={{
                                    height: 180,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    position: 'relative',

                                    
                                    
                                
                                }}
                                onClick={() => dispatch(Addlocation(city))}
                            >
                                   <Typography variant='h1'> {city.name} </Typography>
                                <img 
                                 className='imgs'
                                    src={city.image}
                                    alt={city.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                       
                                    }}
                                />
                                                <Typography
        className="latter"
        variant="h1"
       
      >
        {city?.latter} 
      </Typography>

                                <Button
                                   
                                    variant="contained"
                                    sx={{
                                        position: 'absolute',
                                        bottom: '1%',
                                        left: '1%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        borderRadius: '8px',
                                        padding: '9px 18px',
                                        margin: '5px',
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    {city.name}
                                </Button>
                              
                            </Box>
       
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Card;

