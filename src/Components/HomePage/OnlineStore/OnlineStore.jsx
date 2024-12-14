import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import Mobile from '../../../images/phone.webp';
import AppGallery from '../../../images/image.png';
import AppStore from '../../../images/download.png';
import PlayStore from '../../../images/download.pn.png';
import Scanner from '../../../images/QR.png';

const OnlineOrder = () => {
  return (
    <Box className="container">
      <Typography
        variant="h3"
        className="text-start font-weight-bold"
        style={{  }}
      >
        Put us in your pocket
      </Typography>
      <Container
        style={{ backgroundColor: '#c21760',  padding:" 100px" }}
        maxWidth="lg"
        className="py-5 rounded-lg position-relative"
      >
        <Grid container alignItems="center" spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              className="text-white mt-3 mb-2"
              style={{ fontSize: '1.25rem' }}
            >
              Download the food and groceries you love
            </Typography>
            <Box className="d-flex  align-items-center justify-content-center mb-4 mt-5">
              <img className="img-fluid" src={Scanner} alt="Scanner" style={{ maxWidth: '150px' }} />
              <Typography
                className="text-white mt-3"
                style={{ fontSize: '1rem', textAlign: 'center' }}
              >
                It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.
              </Typography>
            </Box>

     {/* App Store Buttons */}
            <Box className="d-flex ">
              <Button variant="contained" color="primary" href="#" className="d-flex align-items-center  rounded-3" style={{ backgroundColor: 'black',  }} >

                <Box component="img" src={AppStore} alt="App Store" width="30px" />
                <Box>
                  <Typography className="text-white" variant="body2">
                    Download on the
                  </Typography>
                  <Typography className="text-white font-weight-bold">
                    App Store
                  </Typography>
                </Box>
              </Button>

              <Button variant="contained" color="primary" href="#" className="d-flex align-items-center ms-1   rounded-3" style={{ backgroundColor: 'black' }}>
                <Box component="img" src={PlayStore} alt="Google Play" width="30px" />
                <Box>
                  <Typography className="text-white" variant="body2">
                    Get it on
                  </Typography>
                  <Typography className="text-white font-weight-bold">
                    Google Play
                  </Typography>
                </Box>
              </Button>

              <Button variant="contained" color="primary" href="#" className="d-flex align-items-center ms-1  rounded-3" style={{ backgroundColor: 'black' }}>


                <Box component="img" src={AppGallery} alt="AppGallery" width="30px" />
                <Box>
                  <Typography className="text-white" variant="body2">
                    Explore it on
                  </Typography>
                  <Typography className="text-white font-weight-bold">
                    AppGallery
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Grid>

          {/* Mobile Image Section */}
          <Grid item xs={12} md={6} className="position-relative">
            <Box
              component="img"
              src={Mobile}
              alt="Mobile App"
              className="position-absolute bottom-0 start-0 w-100"
              style={{
                objectFit: 'contain',
                height: 'auto',
                marginBottom: '-40%',
              }}
            />
          </Grid>
        </Grid>
      </Container>





    </Box>
  );
};

export default OnlineOrder;