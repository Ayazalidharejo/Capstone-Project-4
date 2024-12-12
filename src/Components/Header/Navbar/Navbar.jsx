// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';

// import Typography from '@mui/material/Typography';


// import Headerimg from "../../../images/headericon.svg"
// import Logo from "../../../images/logo.png"
// import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Modal, Select } from '@mui/material';
// import { useState } from 'react';
// import LanguageIcon from '@mui/icons-material/Language';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// import { Icon } from "@iconify/react";



// function Navbar() {

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [up, setup] = useState(false)
//   return (
//     <>
//       <Box className="flex" sx={{ flexGrow: 1 }}>

//         <AppBar className="bg-success " position="static">




//           <Box className="bg-custom-color flex   items-center justify-center h-16	">



//             <img style={{ width: "50px" }} src={Headerimg} alt="" />

//             <Typography className='px-5 ' variant="h5" component="div">
//               Do you need a business account?

//             </Typography>
//             <Button sx={{ backgroundColor: '#e21b70', color: '#ffff', borderColor: "white", border: "1px solid" }} variant='text' className="bg-custom-color flex   items-center 	"  > SIGN UP NOW </Button>



//           </Box>


//         </AppBar>


//       </Box>


//       <Box  className="flex" sx={{ flexGrow: 1 }}>

//         <AppBar className="relative  " position="static">




//           <Box sx={{  paddingLeft: "60px", paddingRight: "40px" }}
//  className="bg-white flex   items-center justify-between	 h-16	 ">



//             <Box className="flex items-center justify-center">
//               <img style={{ width: "35px" }} src={Logo} alt="" />
//               <Typography className='px-1' sx={{ color: '#e21b70' }} variant='body1'> foodpanda</Typography>
//             </Box>


//             <Box className="flex">
//             <Box sx={{              height: "40px",




//     }}  className="me-5">

//             <Button
//              sx={{ 
      
      
  
    
//      color: 'black',   borderRadius: '10px', borderColor: "white", border: "1px solid" }} variant='text' className=" flex   items-center 	"  > log in </Button>

// </Box>
    
//               <Button sx={{  borderRadius: '10px',  backgroundColor: '#e21b70', color: '#ffff', borderColor: "white", border: "1px solid" }} variant='text' className=" flex   items-center 	"  > Sign up </Button>


//               <div >
//                 <Button sx={{ color: 'black', '&:hover': { backgroundColor: '#e9ecef' } }} onClick={handleOpen}> <LanguageIcon /> <span className='mx-1'>EN</span> {open ? <KeyboardArrowUpIcon style={{ color: '#e21b70' }} /> : <KeyboardArrowDownIcon style={{ color: '#e21b70' }} />}  </Button>
//                 <Modal
//                   open={open}
//                   onClose={handleClose}
//                   aria-labelledby="modal-modal-title"
//                   aria-describedby="modal-modal-description"
//                 >
//                   <Box style={{ width: "100px", Height: "250px", cursor: 'pointer' }} className="flex items-center bg-white justify-center absolute top-32 end-2 rounded-2xl" >
//                     <Typography className='pe-1 py-5 ' variant='body2'> English</Typography>
//                     <CheckCircleOutlineIcon sx={{ color: '#e21b70', '&:hover': { color: 'black' } }} style={{ width: "16px" }} />
//                   </Box>
//                 </Modal>
//               </div>
//               <Button   sx={{
//     color: 'black',
   
    
//     '&:hover': {
//       color: 'black',
//       backgroundColor: '#e9ecef',
//       borderRadius: '40%',
//        paddingY: '7px',
//        paddingx: '0px'
//     },
//   }} variant='text'  > <Icon className="text-2xl	" icon="iconamoon:shopping-bag-thin" /> </Button>
//             </Box>



//           </Box>


//         </AppBar>


//       </Box>
//     </>
//   );
// }
// export default Navbar;





import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';  // Importing Grid for responsiveness
import Typography from '@mui/material/Typography';
import Headerimg from "../../../images/headericon.svg"
import Logo from "../../../images/logo.png"
import { Button, Modal } from '@mui/material';
import { useState } from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Icon } from "@iconify/react";

function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [up, setup] = useState(false);

  return (
    <>
      <Box className="flex" sx={{ flexGrow: 1 }}>

        <AppBar className="bg-success" position="static">
          <Grid container className="bg-custom-color flex items-center justify-center h-16" alignItems="center">
            <Grid item>
              <img style={{ width: "50px" }} src={Headerimg} alt="" />
            </Grid>

            <Grid item xs={6} sm={4}>
              <Typography className='px-5' variant="h5" component="div">
                Do you need a business account?
              </Typography>
            </Grid>

            <Grid item xs={1} sm={2}>
              <Button sx={{ backgroundColor: '#e21b70', color: '#ffff', borderColor: "white", border: "1px solid" }} variant='text' className="bg-custom-color flex items-center">
                SIGN UP NOW
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </Box>

      <Box className="flex" sx={{ flexGrow: 1 }}>
        <AppBar className="relative" position="static">
          <Grid container sx={{ paddingLeft: "60px", paddingRight: "40px" }} className="bg-white flex items-center justify-between h-16">
            <Grid item className="flex items-center justify-center">
              <img style={{ width: "35px" }} src={Logo} alt="" />
              <Typography className='px-1' sx={{ color: '#e21b70' }} variant='body1'> foodpanda</Typography>
            </Grid>

            <Grid item xs={12} sm="auto" className="flex justify-end">
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Button sx={{ color: 'black', borderRadius: '10px', borderColor: "white", border: "1px solid" }} variant='text' className="flex items-center">
                    log in
                  </Button>
                </Grid>

                <Grid item>
                  <Button sx={{ borderRadius: '10px', backgroundColor: '#e21b70', color: '#ffff', borderColor: "white", border: "1px solid" }} variant='text' className="flex items-center">
                    Sign up
                  </Button>
                </Grid>

                <Grid item>
                  <Button sx={{ color: 'black', '&:hover': { backgroundColor: '#e9ecef' } }} onClick={handleOpen}>
                    <LanguageIcon />
                    <span className='mx-1'>EN</span>
                    {open ? <KeyboardArrowUpIcon style={{ color: '#e21b70' }} /> : <KeyboardArrowDownIcon style={{ color: '#e21b70' }} />}
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box style={{ width: "120px", height: "80px", cursor: 'pointer' }} className="flex items-center bg-white justify-center absolute top-32 end-2 rounded-2xl">
                      <Typography className='pe-1 py-5' variant='body2'>English</Typography>
                      <CheckCircleOutlineIcon sx={{ color: '#e21b70', '&:hover': { color: 'black' } }} style={{ width: "16px" }} />
                    </Box>
                  </Modal>
                </Grid>

                <Grid item>
                  <Button sx={{
                    color: 'black',
                    '&:hover': {
                      color: 'black',
                      backgroundColor: '#e9ecef',
                      borderRadius: '40%',
                      paddingY: '7px',
                      paddingX: '0px'
                    },
                  }} variant='text'>
                    <Icon className="text-2xl" icon="iconamoon:shopping-bag-thin" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Box>









      
    </>
  );
}

export default Navbar;
