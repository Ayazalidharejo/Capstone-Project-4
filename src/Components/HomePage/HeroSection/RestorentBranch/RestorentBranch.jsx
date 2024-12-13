import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import img from "../../../../images/Faisalabad.webp"
import img1 from "../../../../images/Hyderabad.webp"
import img2 from "../../../../images/Islamabad.webp"
import img3 from "../../../../images/Karachi.webp"
import img4 from "../../../../images/Lahore.webp"
import img5 from "../../../../images/Multan.webp"
import img6 from "../../../../images/Peshawar.webp"
import img7 from "../../../../images/Rawalpindi.webp"
import img8 from "../../../../images/Sialkot.webp"
import img9 from "../../../../images/Sukkur.webp"
import img10 from "../../../../images/city-tile-Abottabad.webp"
import img11 from "../../../../images/city-tile-Bahawalpur.webp"
import img12 from "../../../../images/city-tile-DeraGhaziKhan.webp"
import img13 from "../../../../images/city-tile-Gujranwala.webp"
import img14 from "../../../../images/city-tile-Gujrat.jpg.webp"
import img15 from "../../../../images/city-tile-Jhelum.webp"
import img16 from "../../../../images/city-tile-Kamoke.webp"
import img17 from "../../../../images/city-tile-Larkana.webp"
import img18 from "../../../../images/city-tile-Mangla.webp"
import img19 from "../../../../images/city-tile-Mardan.webp"
import img20 from "../../../../images/city-tile-Murree.webp"
import img21 from "../../../../images/city-tile-Okara.webp"
import img22 from "../../../../images/city-tile-PanoAqil.webp"
import img23 from "../../../../images/city-tile-Quetta.webp"
import img24 from "../../../../images/city-tile-RahimYarKhan.webp"
import img25 from "../../../../images/city-tile-Sadiqabad.webp"
import img26 from "../../../../images/city-tile-Sahiwal.webp"
import img27 from "../../../../images/city-tile-Sargodha.webp"
import img28 from "../../../../images/city-tile-Sheikhupura.jpg.webp"
import img29 from "../../../../images/city-tile-WahhCannt.webp"

const RestorentBranch = () => {

    const DummyData = [
        {
            id: 1,
            title: "Faisalabad",
            image: img,
        },
        {
            id: 2,
            title: "Hyderabad",
            image: img1,
        },
        {
            id: 3,
            title: "Karachi",
            image: img2,
        },
        {
            id: 4,
            title: "Lahore",
            image: img3,
        },
        {
            id: 5,
            title: "Multan",
            image: img4,
        },
        {
            id: 6,
            title: "Peshawar",
            image: img5,
        },
        {
            id: 7,
            title: "Rawalpindi",
            image: img6,
        },
        {
            id: 8,
            title: "Sialkot",
            image: img7,
        },
        {
            id: 9,
            title: "Sukkur",
            image: img8,
        },
        {
            id: 10,
            title: "Abottabad",
            image: img9,
        },
        {
            id: 11,
            title: "Bahawalpur",
            image: img10,
        },
        {
            id: 12,
            title: "DeraGhaziKhan",
            image: img11,
        },
        {
            id: 13,
            title: "Gujranwala",
            image: img12,
        },
        {
            id: 14,
            title: "Gujrat",
            image: img13,
        },
        {
            id: 15,
            title: "Jhelum",
            image: img14,
        },
        {
            id: 16,
            title: "Kamoke",
            image: img15,
        },
        {
            id: 17,
            title: "Larkana",
            image: img16,
        },
        {
            id: 18,
            title: "Mangla",
            image: img17,
        },
        {
            id: 19,
            title: "Mardan",
            image: img18,
        },
        {
            id: 20,
            title: "Murree",
            image: img19,
        },
        {
            id: 21,
            title: "Okara",
            image: img20,
        },
        {
            id: 22,
            title: "PanoAqil",
            image: img21,
        },
        {
            id: 23,
            title: "Quetta",
            image: img22,
        },
        {
            id: 24,
            title: "RahimYarKhan",
            image: img23,
        },
        {
            id: 25,
            title: "Sadiqabad",
            image: img24,
        },
        {
            id: 26,
            title: "Sahiwal",
            image: img25,
        },
        {
            id: 27,
            title: "Sargodha",
            image: img26,
        },


        {
            id: 28,
            title: "Sheikhupura",
            image: img27,
        },
        {
            id: 29,
            title: "WahhCannt",
            image: img28,
        },
    ]
    return (
       
<Grid sx={{paddingX:"60px"}} container  spacing={1}>
{DummyData.map((product, index) => {
return (
<Grid  item key={index} xs={12} md={3} lg={3}>
<Box sx={{paddingY:"20px"}}  className='relative  '>

<Box className="overflow-hidden rounded-2xl  cursor-pointer">

<img  className='image hover:scale-110 transition duration-500 '
 
 style={{
   minHeight:"280px",
   maxHeight:"280px",
   minWidth:"280px",
   maxWidth:"280px",
   borderRadius:"20px",
  overflow:"hidden"
 }} 
 src={product.image} 
 alt="" 
/>
</Box>
<Typography className='absolute top-3/4  ' style={{backgroundColor:"#fff",marginTop:"10px",marginLeft:"20px",borderRadius:"10px",padding:"5px" }} variant="h5">{product.title}</Typography>
</Box>
</Grid>
);
})}
</Grid>  
        
        
      
    )
}

export default RestorentBranch