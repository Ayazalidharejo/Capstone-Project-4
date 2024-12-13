import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import hero from "../../../images/refresh.webp"





const HeroSection = () => {
  return (
    <Box style={{backgroundColor:"#f7f7f7"}}    sx={{ display: 'flex',paddingTop:"60px" }}>
      <Grid container spacing={2}>
        <Grid sx={{marginTop:"200px" }}  item xs={12} md={6}   >
          <Box
            sx={{
              padding: '20px',
              
              borderRadius: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: '38px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px',
                marginLeft:"110px" 
              }}
            >
              It's the food and groceries you love, <br />
              delivered
            </Typography>
            <Box sx={{ display: 'flex',  alignItems: 'center', marginLeft:"100px" }}>
              <TextField  
                sx={{
                  width: '85%',
                
              
              backgroundColor: '#fff',
              boxShadow: '#fff',
                  padding: '10px',
                  fontSize: '16px',
                //   border: '1px solid #ccc',
                  borderRadius: '5px',
                 
                }}
                type="text"
                placeholder="Search for food"
                
                InputProps={{
                  endAdornment: (
                    <InputAdornment  className='outline-0  '   position="end">
                      <Button
                        sx={{
                          backgroundColor: '',
                          color: 'black',
                          borderRadius: '50px',
                          cursor: 'pointer',
                         
                        }}
                      >
                        <GpsFixedIcon style={{  color: '#e21b70'}} className='mx-1 ' />
                        Locate Me
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
              <Button   
                sx={{
                
               
                  fontSize: '16px',
                  backgroundColor: '#e21b70',
                  color: '#fff',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  padding:"12px",
                  marginLeft:"10px",
                 
                }}
              >
                Find food
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${hero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '60vh',
              maxHeight: '70vh',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default HeroSection