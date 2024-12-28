// import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import hero from "../../../images/refresh.webp"






// const HeroSection = () => { 
//   return (
//     <Box style={{backgroundColor:"#f7f7f7"}}    sx={{ display: 'flex',paddingTop:"60px" }}>
//       <Grid container spacing={2} >
//         <Grid sx={{marginTop:"140px" }}  item xs={12} md={7}   >
//           <Box
//             sx={{
//               padding: '20px',
              
//               borderRadius: '10px',
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: '26px',
//                 fontWeight: 'bold',
//                 color: '#333',
//                 marginBottom: '20px',
//                 marginLeft:"30px" 
//               }}
//             >
//               It's the food and groceries you love, <br />
//               delivered
//             </Typography>
//             <Box sx={{ display: 'flex',  alignItems: 'center', marginLeft:"10px" }}>
//               <TextField  
//                 sx={{
//                   width: '79%',
                
              
//               backgroundColor: '#fff',
//               boxShadow: '#fff',
//                   padding: '10px',
//                   fontSize: '16px',
//                 //   border: '1px solid #ccc',
//                   borderRadius: '5px',
                 
//                 }}
//                 type="text"
//                 placeholder="Search for food"
                
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment  className='outline-0  '   position="end">
//                       <Button
//                         sx={{
//                           backgroundColor: '',
//                           color: 'black',
//                           borderRadius: '50px',
//                           cursor: 'pointer',
                         
//                         }}
//                       >
//                         <GpsFixedIcon style={{  color: '#e21b70'}} className='mx-1 ' />
//                         Locate Me
//                       </Button>
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//               <Button   
//                 sx={{
                
               
//                   fontSize: '16px',
//                   backgroundColor: '#e21b70',
//                   color: '#fff',
//                   borderRadius: '10px',
//                   cursor: 'pointer',
//                   padding:"12px",
//                   marginLeft:"10px",
                 
//                 }}
//               >
//                 Find food
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//         <Grid style={{}} item xs={12} md={5}>
//   <Box
//     sx={{
//       backgroundImage: `url(${hero})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
  
//       minHeight: '100%',
//       maxHeight: '100%',
//       minWidth: '100%',
//       maxWidth: '100%',
 
     
    
    
    
//     }}
//   />
// </Grid>
//       </Grid>
     
//     </Box>
//   )
// }

// export default HeroSection
import React from "react";
import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import hero from "../../../images/refresh.webp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: { xs: "20px", sm: "40px", md: "60px" },
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              paddingX: { xs: "10px", sm: "20px", md: "40px" },
              textAlign: { xs: "center", sm: "left" },
              marginTop: { xs: "20px", md: "140px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "26px", md: "27px" },
                fontWeight: "bold",
                color: "#333",
                marginBottom: { xs: "15px", sm: "20px", md: "30px" },
              }}
            >
              It's the food and groceries you love, <br /> delivered
            </Typography>

            {/* Search Input and Button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                gap: { xs: "10px", sm: "15px" },
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "70%", md: "75%" } }}>
                <TextField
                  sx={{
                    width: "100%",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                  }}
                  placeholder="Search for food"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          sx={{
                            color: "black",
                            padding: "5px 10px",
                          }}
                        >
                          <GpsFixedIcon style={{ color: "#e21b70", marginRight: "5px" }} />
                          Locate Me
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Button
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  backgroundColor: "#e21b70",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: { xs: "10px", sm: "12px 20px" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                Find food
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "350px", md: "500px" },
              width: { xs: "100%", sm: "350px", md: "100%" },  // Image will be responsive
              maxWidth: "100%",
              borderRadius: "10px", // Optional, for rounded corners
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
