
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from '../../../Slices/Addtocart/Addtocart';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius :"30px",

  boxShadow: 24,
  p: 4,
};

function RestorentModal(props) {
     const { cartitems } = useSelector((state) => state.Cart);
    console.log(cartitems,"something ghave ");
   
    
    const { open, handleClose } = props;
  
    return (
      <div>
     
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          
         <Box className="d-flex justify-content-between"> 
          
         <Typography> What's your Email address?</Typography>
         
         <Button  onClick={handleClose}>    <CloseIcon />     </Button>
           </Box>
          <Typography>Please Sign up frisrt</Typography>
     
 
          </Box>
        </Modal>
      </div>
    );
  }
  
  export default RestorentModal;