// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
// import { Grid, Typography } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { Delete, minus, Plus } from '../../../Slices/Addtocart/Addtocart';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useState } from 'react';

// function Drawerpage(props) {
//   const { opendraw, toggleDrawer } = props;
//   const { cartitems } = useSelector((state) => state.Cart);
//   const { Cartitem } = useSelector((state) => state.Carttwo);
//   console.log(Cartitem);


//   const [selectedItem, setSelectedItem] = useState(null);
  
//   const Usedispach =useDispatch()

//   const DrawerList = (
//     <Box sx={{ width: 300 }} role="presentation">
//       <Divider />
//       <Typography
//         variant="h4"
//         sx={{
//           py: 2,
//           fontWeight: 'bold',
//           textAlign: 'center',
//           backgroundColor: '#f5f5f5',
//           borderBottom: '1px solid #ddd',
//         }}
//       >
//         Cart Items
//       </Typography>
//     </Box>
//   );

//   return (
//     <div className="d-flex align-items-center">
//       <Drawer open={opendraw} onClose={toggleDrawer(false)}>
//         {DrawerList}

//         {cartitems?.length > 0 ? (
//           cartitems?.map((item, index) => (
//             <Grid
//               container
//               key={index}
//               sx={{
//                 py: 2,
//                 px: 2,
//                 borderBottom: '1px solid #ddd',
//                 alignItems: 'center',
//                 gap: 2,
//               }}
//             >
//               {/* Image Section */}
//               <Grid item xs={3} sx={{ textAlign: 'center' }}>
//                 <img
//                   src={item?.strMealThumb }
//                   alt={item?.strCategory }
//                   style={{
//                     width: '80px',
//                     height: '80px',
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                   }}
//                 />
//               </Grid>

//               {/* Item Details */}
//               <Grid item xs={3}>
//                 <Typography className='pe-5'
//                   variant="h6"
//                   sx={{ fontWeight: 500, color: '#333', mb: 1 }}
//                 >
//                   {item?.strCategory }
//                 </Typography>
//                 <Typography className='pe-5'
//                   variant="body2"
//                   sx={{
//                     color: '#555',
//                     fontSize: '0.9rem',
//                     lineHeight: 1.5,
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                   }}
//                 >
//                   {item?.strMeal }
//                <span> {item?.quanitity} </span> </Typography>
//               </Grid>

//               {/* Action Buttons */}
//               <Grid
//                 item
//                 xs={3}
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'row',
//                   justifyContent: 'flex-end',
//                   alignItems: 'center',
//                   gap: 1,
//                 }}
//               >
//                 <Button className='ms-5' onClick={()=>(Usedispach((Plus(item))))}
//                   variant="outlined"
//                   size="small"
//                   sx={{ minWidth: '30px', fontSize: '0.8rem' }}
//                 >
//                  <AddIcon/>
//                 </Button>
//                 <Button onClick={()=>(Usedispach((minus(item))))}
//                   variant="outlined"
//                   size="small"
//                   sx={{ minWidth: '30px', fontSize: '0.8rem' }}
//                 >
//              <RemoveIcon/>
//                 </Button>
//                 <Button onClick={()=>(Usedispach((Delete(item))))}
//                   variant="outlined"
//                   size="small"
//                   color="error"
//                   sx={{ minWidth: '60px', fontSize: '0.8rem' }}
//                 >
//               <DeleteIcon/>
//                 </Button>
//               </Grid>
//             </Grid>
//           ))
//         ) : (
//           <Typography
//             sx={{
//               textAlign: 'center',
//               py: 4,
//               color: '#999',
//               fontSize: '1rem',
//             }}
//           >
//             No items in the cart
//           </Typography>
//         )}
//       </Drawer>




     
// {/* 
// {Cartitem?.map((item, index)=>{
//   return(
//     <>
//     <img 
//       src={item?.strCategoryThumb} 
//       alt="" 
//       onClick={() => setSelectedItem(index)}
//       style={{ display: selectedItem === index ? 'block' : 'none' }}
//     />
//     </>
//   )
// })} */}

//     </div>
//   );
// }

// export default Drawerpage;
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Showoff( props) {
  // // const [Showof, setShowof] = React.useState(false); 
  // const handleOpen = () => setShowof(true);
  // const handleClose = () => setShowof(false);
  const {Showof,handlehidden, handleshow}=props

  return (
    <div>
      <Button onClick={handleshow}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={Showof} // Correctly using Showof here
        onClose={handlehidden}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={Showof}> {/* Correctly using Showof here */}
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Showoff;
