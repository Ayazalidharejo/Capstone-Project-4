import React from "react";
import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import HeroImg from "../../../images/hero-img.webp";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        // paddingY: { xs: "20px", sm: "40px", md: "60px" },
      }}
    >
      <Grid container spacing={0} alignItems="center" justifyContent="space-between">
        {/* Left Section */}
        <Grid item xs={12} md={6} lg={7}>
          <Box
            sx={{
              paddingX: { xs: "10px", sm: "20px", md: "40px" },
              textAlign: { xs: "center", sm: "left" },
              marginLeft: { md: "10%" },
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
        <Grid item xs={12} md={6} lg={5}>
          <Box className="border"
            // sx={{
            //   backgroundImage: `url(${HeroImg})`,
            //   backgroundSize: "contain",
            //   backgroundRepeat:"no-repeat",
            //   backgroundPosition: "center",
            //   height: { xs: "250px", sm: "350px", md: "500px" },
            //   width: "100%",
            // }}
            
          />
         <img
  style={{
 display:"flex",
 width:"100%", // Ensures the image takes the full width of the container
    maxWidth: "1000px",    // Prevents the image from being larger than 700px
    height: "500px",       // Maintains aspect ratio
    display: "block",     // Prevents inline block behavior, eliminating extra space below the image
    margin: "0 auto",     // Centers the image horizontally if needed
  }}
  src={HeroImg}
  alt="Hero"
/>

        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
