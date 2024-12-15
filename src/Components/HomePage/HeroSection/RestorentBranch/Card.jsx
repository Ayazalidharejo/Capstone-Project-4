import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import Islamabad from "../../../../images/Islamabad.webp";
import Karachi from "../../../../images/Karachi.webp";
import Lahore from "../../../../images/Lahore.webp";
import Faisalabad from "../../../../images/Faisalabad.webp";
import Rawalpindi from "../../../../images/Rawalpindi.webp";
import Abbottabad from "../../../../images/city-tile-Abottabad.webp";
import Bahawalpur from "../../../../images/city-tile-Bahawalpur.webp";
import DeraGhaziKhan from "../../../../images/city-tile-DeraGhaziKhan.webp";
import Gujranwala from "../../../../images/city-tile-Gujranwala.webp";
import Gujrat from "../../../../images/city-tile-Gujrat.jpg.webp";
import Hyderabad from "../../../../images/Hyderabad.webp";
import Jhelum from "../../../../images/city-tile-Jhelum.webp";
import Kamoke from "../../../../images/city-tile-Kamoke.webp";
import Larkana from "../../../../images/city-tile-Larkana.webp";
import Mangla from "../../../../images/city-tile-Mangla.webp";
import Mardan from "../../../../images/city-tile-Mardan.webp";
import Multan from "../../../../images/Multan.webp";
import Murree from "../../../../images/city-tile-Murree.webp";
import Okara from "../../../../images/city-tile-Okara.webp";
import PanoAqil from "../../../../images/city-tile-PanoAqil.webp";
import Peshawar from "../../../../images/Peshawar.webp";
import Quetta from "../../../../images/city-tile-Quetta.webp";
import RahimYarKhan from "../../../../images/city-tile-RahimYarKhan.webp";
import Sadiqabad from "../../../../images/city-tile-Sadiqabad.webp";
import Sahiwal from "../../../../images/city-tile-Sahiwal.webp";
import Sargodha from "../../../../images/city-tile-Sargodha.webp";
import Sheikhupura from "../../../../images/city-tile-Sheikhupura.jpg.webp";
import Sialkot from "../../../../images/Sialkot.webp";
import Sukkur from "../../../../images/Sukkur.webp";
import WahCantt from "../../../../images/city-tile-WahhCannt.webp";
import { Scale } from '@mui/icons-material';

const cities = [
    { id: 1, name: 'Islamabad', image: Islamabad },
    { id: 2, name: 'Karachi', image: Karachi },
    { id: 3, name: 'Lahore', image: Lahore },
    { id: 4, name: 'Faisalabad', image: Faisalabad },
    { id: 5, name: 'Rawalpindi', image: Rawalpindi },
    { id: 6, name: 'Abbottabad', image: Abbottabad },
    { id: 7, name: 'Bahawalpur', image: Bahawalpur },
    { id: 8, name: 'Dera Ghazi Khan', image: DeraGhaziKhan },
    { id: 9, name: 'Gujranwala', image: Gujranwala },
    { id: 10, name: 'Gujrat', image: Gujrat },
    { id: 11, name: 'Hyderabad', image: Hyderabad },
    { id: 12, name: 'Jhelum', image: Jhelum },
    { id: 13, name: 'Kamoke', image: Kamoke },
    { id: 14, name: 'Larkana', image: Larkana },
    { id: 15, name: 'Mangla', image: Mangla },
    { id: 16, name: 'Mardan', image: Mardan },
    { id: 17, name: 'Multan', image: Multan },
    { id: 18, name: 'Murree', image: Murree },
    { id: 19, name: 'Okara', image: Okara },
    { id: 20, name: 'PanoAqil', image: PanoAqil },
    { id: 21, name: 'Peshawar', image: Peshawar },
    { id: 22, name: 'Quetta', image: Quetta },
    { id: 23, name: 'RahimYarKhan', image: RahimYarKhan },
    { id: 24, name: 'Sadiqabad', image: Sadiqabad },
    { id: 25, name: 'Sahiwal', image: Sahiwal },
    { id: 26, name: 'Sargodha', image: Sargodha },
    { id: 27, name: 'Sheikhupura', image: Sheikhupura },
    { id: 28, name: 'Sialkot', image: Sialkot },
    { id: 29, name: 'Sukkur', image: Sukkur },
    { id: 30, name: 'WahCantt', image: WahCantt },
];
const Card = () => {
    const [imageName, setImageName] = useState();
    
    
    const handleClick = (name) => {
        setImageName(name);
        console.log(name);
        
      };
    return (

        <Box sx={{paddingX:"100px"}} className=" py-5">
             <h1>{imageName}</h1>
            <Typography variant="h4" align="start" gutterBottom>
                Find us in these cities and many more!
            </Typography>
            <Grid container spacing={2}>
                {cities.map((city) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={city.id}>
                        <Box
                            sx={{
                                height: { xs: 180, sm: 300, md: 300 }, 
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                            }}
                        >
                          <img
                        
  src={city.image}
  alt={city.name}
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    transition: 'transform 0.5s ease-in-out',
    cursor:"pointer"
  }}
  onMouseOver={(e) => {
    e.target.style.transform = 'scale(1.2)';
  }}
  onMouseOut={(e) => {
    e.target.style.transform = 'scale(1)';
  }}

  onClick={() => handleClick(city.name)}
   
   
  
/>
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
                    </Grid>
                ))}
            </Grid>
            <Typography 
    variant="h3"
    className="text-start font-weight-bold pt-5 ms-3"
   
  >
    Put us in your pocket
  </Typography>
        </Box>
    );
};

export default Card;