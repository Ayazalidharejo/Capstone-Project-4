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





// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';  // Importing Grid for responsiveness
// import Typography from '@mui/material/Typography';
// import Headerimg from "../../../images/headericon.svg"
// import Logo from "../../../images/logo.png"
// import { Button, Modal } from '@mui/material';
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
//   const [up, setup] = useState(false);

//   return (
//     <>
//       <Box className="flex" sx={{ flexGrow: 1 }}>

//         <AppBar className="bg-success" position="static">
//           <Grid container className="bg-custom-color flex items-center justify-center h-16" alignItems="center">
//             <Grid item>
//               <img style={{ width: "50px" }} src={Headerimg} alt="" />
//             </Grid>

//             <Grid item xs={6} sm={4}>
//               <Typography className='px-5' variant="h5" component="div">
//                 Do you need a business account?
//               </Typography>
//             </Grid>

//             <Grid item xs={1} sm={2}>
//               <Button sx={{ backgroundColor: '#e21b70', color: '#ffff', borderColor: "white", border: "1px solid" }} variant='text' className="bg-custom-color flex items-center">
//                 SIGN UP NOW
//               </Button>
//             </Grid>
//           </Grid>
//         </AppBar>
//       </Box>

//       <Box className="flex" sx={{ flexGrow: 1 }}>
//         <AppBar className="relative" position="static">
//           <Grid container sx={{ paddingLeft: "200px", paddingRight: "200px" }} className="bg-white flex items-center justify-between h-16">
//             <Grid item className="flex items-center justify-center">
//               <img style={{ width: "35px" }} src={Logo} alt="" />
//               <Typography className='px-1' sx={{ color: '#e21b70' }} variant='body1'> foodpanda</Typography>
//             </Grid>

//             <Grid item xs={12} sm="auto" className="flex justify-end">
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item>
//                   <Button sx={{ color: 'black', borderRadius: '10px', borderColor: "white", border: "1px solid" }} variant='text' className="flex items-center">
//                     log in
//                   </Button>
//                 </Grid>

//                 <Grid item>
//                   <Button sx={{ borderRadius: '10px', backgroundColor: '#e21b70', color: '#ffff', borderColor: "white", border: "1px solid" }} variant='text' className="flex items-center">
//                     Sign up
//                   </Button>
//                 </Grid>

//                 <Grid item>
//                   <Button sx={{ color: 'black', '&:hover': { backgroundColor: '#e9ecef' } }} onClick={handleOpen}>
//                     <LanguageIcon />
//                     <span className='mx-1'>EN</span>
//                     {open ? <KeyboardArrowUpIcon style={{ color: '#e21b70' }} /> : <KeyboardArrowDownIcon style={{ color: '#e21b70' }} />}
//                   </Button>
//                   <Modal
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                   >
//                     <Box style={{ width: "120px", height: "80px", cursor: 'pointer' }} className="flex items-center bg-white justify-center absolute top-32 end-64 rounded-2xl">
//                       <Typography className='pe-1 py-5' variant='body2'>English</Typography>
//                       <CheckCircleOutlineIcon sx={{ color: '#e21b70', '&:hover': { color: 'black' } }} style={{ width: "16px" }} />
//                     </Box>
//                   </Modal>
//                 </Grid>

//                 <Grid item>
//                   <Button sx={{
//                     color: 'black',
//                     '&:hover': {
//                       color: 'black',
//                       backgroundColor: '#e9ecef',
//                       borderRadius: '40%',
//                       paddingY: '7px',
//                       paddingX: '0px'
//                     },
//                   }} variant='text'>
//                     <Icon className="text-2xl" icon="iconamoon:shopping-bag-thin" />
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </AppBar>
//       </Box>









      
//     </>
//   );
// }

// export default Navbar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Icon } from "@iconify/react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Headerimg from "../../../images/headericon.svg";
import Logo from "../../../images/logo.png";
import { Outlet } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Top Bar */}
            <AppBar position="static" sx={{ backgroundColor: '#c21760' }}>
                <Grid container alignItems="center" justifyContent="center" sx={{ height: 64, px: 2 }}>
                <img style={{ width: "40px" }} src={Headerimg} alt="Header Icon" />

                <Typography className='mx-4' variant="h6" component="div" align="center" sx={{ color: '#fff', fontWeight: 'bold', fontSize: isMobile ? '14px' : '18px' }}>
                            Do you need a business account?
                        </Typography>
                        <Button
                            sx={{
                                backgroundColor: '#e21b70',
                                color: '#fff',
                                fontSize: isMobile ? '12px' : '14px',
                                padding: isMobile ? '6px 12px' : '8px 16px',
                                '&:hover': {
                                    backgroundColor: '#c2185b'
                                },
                            }}
                            variant="contained"
                        >
                            SIGN UP NOW
                        </Button>
                  
                   
                </Grid>
            </AppBar>

            {/* Main Navbar */}
            <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
                <Grid className='container-fuild' container alignItems="center" justifyContent="space-between" sx={{ px: isMobile ? 2 : 8, height: 64 }}>
                    <Grid item display="flex" alignItems="center">
                        <img style={{ width: isMobile ? "30px" : "35px" }} src={Logo} alt="Logo" />
                        <Typography variant="h6" sx={{ color: '#e21b70', ml: 1, fontWeight: 'bold', fontSize: isMobile ? '16px' : '20px' }}>
                            foodpanda
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container spacing={isMobile ? 1 : 2} alignItems="center">
                            <Grid item>
                                <Button
                                onClick={handleOpen}
                                    sx={{
                                        color: '#000',
                                        fontSize: isMobile ? '12px' : '14px',
                                        borderRadius: '10px',
                                        border:"1px solid",
                                        '&:hover': { backgroundColor: '#f0f0f0' },
                                    }}
                                >
                                    Log In
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        backgroundColor: '#e21b70',
                                        color: '#fff',
                                        fontSize: isMobile ? '12px' : '14px',
                                        borderRadius: '10px',
                                        border:"1px solid",
                                        '&:hover': { backgroundColor: '#c2185b' },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={handleOpen} sx={{ color: '#000', fontSize: isMobile ? '12px' : '14px' }}>
                                    <LanguageIcon />
                                    <Typography variant="body2" sx={{ mx: 1 }}>
                                        EN
                                    </Typography>
                                    {open ? (
                                        <KeyboardArrowUpIcon sx={{ color: '#e21b70' }} />
                                    ) : (
                                        <KeyboardArrowDownIcon sx={{ color: '#e21b70' }} />
                                    )}
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="language-selector"
                                    aria-describedby="language-selector-description"
                                >
                                    <Box
                                        sx={{
                                            display:"flex",
                                           
                                            position: 'absolute',
                                            top: '25%',
                                            left: '80%',
                                            transform: 'translate(-50%, -50%)',
                                            width: 150,
                                            height: 80,
                                            bgcolor: 'background.paper',
                                            boxShadow: 24,
                                            borderRadius: 2,
                                            p: 3,
                                            textAlign: 'center',
                                            cursor:"pointer"
                                        }}
                                    >
                                        <Typography className='mt-1' variant="body2" sx={{ marginX:"10px",textAlign:"center" }}>English</Typography>
                                        <CheckCircleOutlineIcon sx={{ color: '#e21b70'  , '&:hover': {color:"black"} }} />
                                    </Box>
                                </Modal>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        color: '#000',
                                        '&:hover': {
                                            backgroundColor: '#f0f0f0',
                                            borderRadius: '50%',
                                        },
                                    }}
                                >
                                    <Icon icon="iconamoon:shopping-bag-thin" fontSize={isMobile ? 20 : 24} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
            <Outlet/>
        </>
    );
}

export default Navbar;