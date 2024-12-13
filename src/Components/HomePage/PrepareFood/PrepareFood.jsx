import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import Chif from "../../../images/chif.webp"

const PrepareFood = () => {
  return (
<Grid container style={{ backgroundColor: "#f8f8f8",paddingTop:"50px"}}>
<Typography style={{marginBottom:"30px"}} variant="h3" >
            You prepare the food, we handle the rest
          </Typography>
      {/* Left Side: Text */}
      <Grid item xs={12} md={12}>
        <img
          src={Chif}
          alt="Chef cooking"
          style={{
            width: "100%",
            height: "40%",
            objectFit: "cover",
            borderRadius: "8px",
            backgroundAttachment: 'fixed',
          }}
        />



<Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center" }}>
        <div>
         
          <Card style={{ marginTop: "20px", padding: "20px" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                List your restaurant or shop on foodpanda
              </Typography>
              <Typography variant="body1" gutterBottom>
                Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
              </Typography>
              <Typography variant="body2" gutterBottom>
                It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
              </Typography>
              <Button variant="contained" color="secondary" style={{ marginTop: "10px" }}>
                Get started
              </Button>
            </CardContent>
          </Card>
        </div>
      </Grid>
      </Grid>
     

      {/* Right Side: Image */}
    
    </Grid>
  )
}

export default PrepareFood