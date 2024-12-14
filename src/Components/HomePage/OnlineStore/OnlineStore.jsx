import React from 'react';
import '../../../index.css';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import Mobile from '../../../images/mobile.webp';
import AppGallery from '../../../images/image.png';

import PlayStore from '../../../images/download.pn.png';
import Scanner from '../../../images/QR.png';
import AppleIcon from '@mui/icons-material/Apple';

const OnlineOrder = () => {
  return (
    <>
 
    <Box className="container">
     
      <Container 
        style={{ backgroundColor: '#e21b70',height:"350px"   }}
        maxWidth="lg"
        className=" rounded-4 position-relative"
      >
        <Grid container alignItems="center" spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              className="text-white mt-3 mb-2"
              style={{ fontSize: '1.36rem' }}
            >
              Download the food and groceries you love
            </Typography>
            <Box className="d-flex  align-items-center justify-content-center mb-2 mt-5">
              <img className="img-fluid border border-white p-2 me-3" src={Scanner} alt="Scanner" style={{ maxWidth: '100px' }} />
              <Typography
                className="text-white mt-3"
                style={{ fontSize: '1rem', textAlign: 'start ps-5' }}
              >
                It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.
              </Typography>
            </Box>

     {/* App Store Buttons */}
            <Box  className="d-flex ">
              <Button style={{height:"50px"}}  variant="contained" color="primary"  className="d-flex align-items-center  rounded-3 bg-black border " >
<AppleIcon className='fs-1'/>
                <Box />
                <Box >
                  <Typography style={{fontSize:"8px"}}   className="text-white   text-center " >
                    Download on the
                  </Typography>
                  <Typography variant='body2'   className="text-white   ">
                    App Store
                  </Typography>
                </Box>
              </Button>

              <Button   variant="contained" color="primary" href="#" className="d-flex align-items-center ms-1   rounded-3 bg-black border" style={{height:"50px" }}>
                <Box component="img" src={PlayStore} alt="Google Play" width="50px" />
                <Box >
                  <Typography style={{fontSize:"8px"}} className="text-white" variant="body2">
                    Get it on
                  </Typography>
                  <Typography style={{fontSize:"14px"}} className="text-white font-weight-bold fontsize">
                    Google Play
                  </Typography>
                </Box>
              </Button>

              <Button  variant="contained" color="primary" href="#" className="d-flex align-items-center ms-1  rounded-3 bg-black border" style={{height:"50px" }}>


                <Box style={{height:"50px"}} component="img" src={AppGallery} alt="AppGallery"  />
                <Box>
                  <Typography style={{fontSize:"8px"}} className="text-white" variant="body2">
                    Explore it on
                  </Typography>
                  <Typography style={{fontSize:"14px"}} className="text-white font-weight-bold">
                    AppGallery
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Grid>

          {/* Mobile Image Section */}
          <Grid item xs={12} md={6} className="position-relative">
            <Box s
              component="img"
              src={Mobile}
              alt="Mobile App"
              className="position-absolute bottom-0 start-0 w-100 ms-3"
              style={{
              
              
                marginBottom: '-43%',
               
                height:"500px"
                
              }}
            />
          </Grid>
        </Grid>
      </Container>





    </Box>
    </>
  );
};

export default OnlineOrder;