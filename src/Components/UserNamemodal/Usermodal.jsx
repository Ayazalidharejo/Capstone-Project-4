import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    
    // boxShadow: 24,

    p: 4,
};

 function TransitionsModal(props) {
 const { open,handleClose,inputValue,handleClick,handleInputChange} =props   
 const notyf = new Notyf({
    duration: 1000,
    position: {
      x: 'center',
      y: 'top',
    },
    types: [
      {
        type: 'warning',
        background: 'blue',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning'
        }
      },
      {
        type: 'error',
        background: 'blue',
        duration: 2000,
        dismissible: true
      }
    ]
  });
    return (
        <div>
        
            <Modal className='Rounded-2'
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                     
                     <Box>
                     <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
   Change UserName
  </Typography>
                           <TextField className='my-3' size='small' fullWidth
                             type="text"
                             value={inputValue} 
                             onChange={handleInputChange}
                             placeholder="Enter your name"
                           />
                     
                         
                     <Button className='text-white'  
    
    fullWidth
    sx={{
      bgcolor: "#ff009d", 
      "&:hover": {
        bgcolor: "#ff009d",
      },
    }} 
    onClick={() => {
        handleClick();
        handleClose();
        notyf.error('UserName Change Successfully'); // Show toast after button click
      }}
      disabled={inputValue.trim() === ""}
    >
  Save Name
</Button>


                     
                      
                           
                         </Box>
                    </Box>
                </Fade>
                
            </Modal>
        </div>
    );
}

export default TransitionsModal;