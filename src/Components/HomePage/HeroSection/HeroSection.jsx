import { Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import hero from "../../../images/refresh.webp"






const HeroSection = () => { 
  return (
    <Box style={{backgroundColor:"#f7f7f7"}}    sx={{ display: 'flex',paddingTop:"60px" }}>
      <Grid container spacing={2} >
        <Grid sx={{marginTop:"140px" }}  item xs={12} md={7}   >
          <Box
            sx={{
              padding: '20px',
              
              borderRadius: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '20px',
                marginLeft:"30px" 
              }}
            >
              It's the food and groceries you love, <br />
              delivered
            </Typography>
            <Box sx={{ display: 'flex',  alignItems: 'center', marginLeft:"10px" }}>
              <TextField  
                sx={{
                  width: '79%',
                
              
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
        <Grid style={{}} item xs={12} md={5}>
  <Box
    sx={{
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  
      minHeight: '100%',
      maxHeight: '100%',
      minWidth: '100%',
      maxWidth: '100%',
 
     
    
    
    
    }}
  />
</Grid>
      </Grid>
     
    </Box>
  )
}

export default HeroSection