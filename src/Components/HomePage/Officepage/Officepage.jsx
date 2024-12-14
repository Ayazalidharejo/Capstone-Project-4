import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import HERO from "../../../images/officeimg.webp"

const  Officepage = () => {
  return (
    <div>
      <Grid 
        container
        style={{

          paddingTop: "50px",
         marginBottom:"200px"
         
        }}
      >
        <Typography style={{ marginBottom: "30px", paddingLeft: "110px" }} variant="h4">
          <b>Take your office out to lunch</b>
        </Typography>

        <Grid  item xs={12} md={12}>
          <Box sx={{ height: '60vh', width: '99vw' }}>
            <Box
              sx={{
                backgroundImage: `url(${HERO})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100%',
                maxHeight: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                 position:"relative"
              }}
            />
          </Box>

          <Grid  item xs={12} md={6} style={{ display: "flex", alignItems: "center"   }}>
            <div>
              <Card sx={{position: 'absolute',top:"4700px",  left: '8%' }} style={{ marginTop: "20px", padding: "20px", borderRadius: "15px",width:"600px",height:"280px" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "24px" }} variant="h5">
                  foodpanda for business
                  </Typography>
                  <Typography sx={{ paddingY: "10px", fontSize: "16px" }} variant="body1" m>
                  Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.
                  </Typography>
                 
                  <Button sx={{ paddingY: "10px" }} variant="contained" style={{ marginTop: "10px", backgroundColor: '#e21b70' }}>
                    Get started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Grid>

        </Grid>


      </Grid>

      
    </div>
  )
}

export default Officepage