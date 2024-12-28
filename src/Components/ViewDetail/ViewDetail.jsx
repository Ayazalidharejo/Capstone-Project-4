import React from 'react'

import { Box, Breadcrumbs, Button, Grid, Icon, Link, Stack, Typography } from '@mui/material'
import QuettaFood from  "../../images/hungry.svg"
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import DetailPage from '../DetailPage/DetailPage';
import { useSelector } from 'react-redux';

const ViewDetail = () => {
    const {View}= useSelector((state)=>state.Watch)
    console.log(View);
    
  return (
    <>  
    {View?.map((item)=>{
        return(
            <>
            


  
            <Box  className="container  ">
   

   <Breadcrumbs className='ms-5'
     aria-label="breadcrumb"
     sx={{ marginBottom: "1rem", paddingLeft: "10px",paddingTop:"150px" }}
   >
     <Link underline="hover" color="inherit" href="#">
       Homepage
     </Link>
     <Link underline="hover" color="inherit" href="#">
       Lahore
     </Link>
     <Typography color="text.primary">
       {item?.name} Paratha - 111
     </Typography>
   </Breadcrumbs>
   
   {/* Main Card */}
   <Grid className='ms-5' container spacing={2} alignItems="center">
     <Grid item>
       <Box
         component="img"
         src={item?.image}
         alt="Quetta Paratha"
         sx={{
           width: { xs: "290px", sm: "280px" },
           height: { xs: "150px", sm: "180px" },
           borderRadius: "8px",
           objectFit: "cover",
         }}
       />
     </Grid>
     <Grid item xs>
       <span
         className="ps-3"
         style={{ fontSize: "0.9rem" }}
       >
         Beverages{" "}
         <Icon icon="lucide:dot" width="18px" height="18px" /> Pakistani
       </span>
       <Typography
         variant="h2"
         fontWeight="bold"
         sx={{
           color: "#000",
           fontSize: { xs: "1.5rem", sm: "2rem" },
           lineHeight: 1.2,
         }}
       >
          <span style={{ fontWeight: 700 }}> {item?.name}</span> —{" "}
         <span style={{ fontWeight: 900 }}>111</span>
       </Typography>
       <Box
         sx={{
           display: "flex",
           flexDirection: { xs: "row", sm: "row" },
           gap: { xs: "5px", sm: "15px" },
           alignItems: "center",
         }}
       >
         <Typography
           variant="body2"
           sx={{
             color: "#FF2B85",
             fontWeight: "bold",
             display: "flex",
             alignItems: "center",
             gap: "5px",
             cursor: "pointer",
           }}
           
         >
           <Icon
             className="text-black"
             icon="humbleicons:bike"
             width="18px"
             height="18px"
           />{" "}
           Free delivery{" "}
           <span
             style={{
               textDecoration: "line-through",
               color: "#888",
               marginRight: "10px",
             }}
           >
             Rs.199
           </span>
         </Typography>
         <Typography
           variant="body2"
           sx={{
             display: "flex",
             alignItems: "center",
             color: "#888",
             gap: "5px",
           }}
         >
           <Icon icon="ph:dot" width="20px" height="20px" />
           <Icon
             className="pb-1"
             icon="ci:shopping-bag-02"
             width="20"
             height="20"
           />
           Min. order Rs. 350
         </Typography>
       </Box>
       <Stack direction="row" alignItems="center" spacing={0.5}>
         <StarIcon sx={{ color: "orange", fontSize: "1rem" }} />
         <Typography
           variant="body2"
           sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
         >
          {item?.rating}
           <span style={{ color: "#888", fontWeight: "normal" }}>
             (500+)
           </span>
         </Typography>
         <Button
           variant="text"
           size="small"
           sx={{
             textTransform: "none",
             fontSize: "0.9rem",
             color: "black",
             cursor: "pointer",
           }}
         >
           See reviews
         </Button>
       </Stack>
       <Typography
         variant="body2"
         sx={{
           color: "#888",
           cursor: "pointer",
           "&:hover": { color: "#000" },
           fontSize: "0.9rem",
           display: "flex",
           alignItems: "center",
         }}
       >
         <InfoIcon sx={{ marginRight: "5px" }} />
         More info
       </Typography>
     </Grid>
   </Grid>
   
      </Box>



            
            </>
        )
    })}
    
  
   <DetailPage/>
   </>

  )
}

export default ViewDetail