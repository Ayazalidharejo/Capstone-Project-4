import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import QR from "../../../images/QR.png"
import  download from "../../../images/download.png"
import  img from "../../../images/images.png"
import  phone from "../../../images/phone.webp"


const OnlineStore = () => {
  return (
    <Box position="relative"  sx={{ paddingX:"100px" }}>
      <Typography variant="h3" sx={{ marginLeft: 5, marginBottom: 3 }}>
        Put us in your pocket
      </Typography>
      <Box
        className="home"
        sx={{
          borderRadius: 5,
          padding: 5,
          backgroundColor: "#e21b70",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginLeft: 5, marginBottom: 3, fontSize: "1.5rem" }}
        >
          Download the food and groceries you love
        </Typography>
        <Box display="flex" alignItems="center" sx={{ marginBottom: 3 }}>
          <img
            width="70px"
            height="80px"
            src={QR}
            alt="QR Code"
            style={{ border: "1px solid white", padding: "5px" }}
          />
          <Typography variant="body1" sx={{ marginLeft: 3 }}>
            It's all at your fingertips – the restaurants and shops you love.
            Find the right food and groceries to suit your mood, and make the
            first bite last. Go ahead, download us.
          </Typography>
        </Box>

        <Grid container spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                backgroundColor: "black",
                borderRadius: 3,
                padding: "10px 20px",
                color: "white",
                "&:hover": { backgroundColor: "#444" },
              }}
            >
              <Icon icon="mdi:apple" style={{ fontSize: "24px", marginRight: 10 }} />
              <Box textAlign="left">
                <Typography>Download on the</Typography>
                <Typography variant="h6" fontWeight="bold">
                  App Store
                </Typography>
              </Box>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                backgroundColor: "black",
                borderRadius: 3,
                padding: "10px 20px",
                color: "white",
                "&:hover": { backgroundColor: "#444" },
              }}
            >
              <img
                src={download}
                alt="Google Play"
                width="40px"
                style={{ marginRight: 10 }}
              />
              <Box textAlign="left">
                <Typography>Get it on</Typography>
                <Typography variant="h6" fontWeight="bold">
                  Google Play
                </Typography>
              </Box>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                backgroundColor: "black",
                borderRadius: 3,
                padding: "10px 20px",
                color: "white",
                "&:hover": { backgroundColor: "#444" },
              }}
            >
              <img
                src={img}
                alt="AppGallery"
                width="40px"
                style={{ marginRight: 10 }}
              />
              <Box textAlign="left">
                <Typography>Explore it on</Typography>
                <Typography variant="h6" fontWeight="bold">
                  AppGallery
                </Typography>
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <img
        width="650px"
        src={phone}
        alt="App Preview"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
};

export default OnlineStore;
