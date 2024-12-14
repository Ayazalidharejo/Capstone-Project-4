import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import HERO from "../../../images/chif.webp"

const PrepareFood = () => {
  return (
    <>
      <Grid
        container
        style={{
          backgroundColor: "#f8f8f8",
          paddingTop: "50px",
         marginBottom:"200px"
         
        }}
      >
        <Typography style={{ marginBottom: "30px", paddingLeft: "50px" }} variant="h4">
          <b>You prepare the food, we handle the rest</b>
        </Typography>

        <Grid className='relative' item xs={12} md={12}>
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
              }}
            />
          </Box>

          <Grid className='absolute top-48 start-16' item xs={12} md={6} style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Card style={{ marginTop: "20px", padding: "20px", borderRadius: "15px" }}>
                <CardContent>
                  <Typography sx={{ fontSize: "24px" }} variant="h5">
                    List your restaurant or shop on foodpanda
                  </Typography>
                  <Typography sx={{ paddingY: "10px", fontSize: "16px" }} variant="body1" m>
                    Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                  </Typography>
                  <Typography style={{ fontSize: '16px' }} variant="body2">
                    It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                  </Typography>
                  <Typography sx={{ paddingY: "10px", fontSize: '16px' }} variant="body2" m>
                    Interested? Let's start our partnership today!
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

      
    </>
  )
}

export default PrepareFood