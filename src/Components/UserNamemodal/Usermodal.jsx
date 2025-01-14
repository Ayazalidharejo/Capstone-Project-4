import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';


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
    }} onClick={() => { handleClick(); handleClose(); }} disabled={inputValue.trim() === ""}>
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