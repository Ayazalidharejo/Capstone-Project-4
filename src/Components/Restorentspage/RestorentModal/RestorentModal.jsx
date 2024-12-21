
import { useDispatch, useSelector } from 'react-redux';
import { Addtocart } from '../../../Slices/Addtocart/Addtocart';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
        <Button>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          
           
           {cartitems?.map((item)=>{
            return(
                <Box className="d-flex flex-column" sx={{
                
                    width: '100%',
                    height: '150px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <img src={item?.strMealThumb} alt="" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                   
                  </Box>
            )
           })}

<Button className=' w-100 bg-success text-white'>Add to cart </Button>
          </Box>
        </Modal>
      </div>
    );
  }
  
  export default RestorentModal;