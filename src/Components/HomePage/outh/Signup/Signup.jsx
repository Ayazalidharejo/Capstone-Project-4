import * as React from 'react';


import Modal from '@mui/material/Modal';
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import  { useState } from "react";

import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import { yupResolver } from '@hookform/resolvers/yup';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form";
import {  Controller } from "react-hook-form";
import { json, Link } from "react-router-dom";







const schema = yup.object({
  firstName: yup.string().min(3).max(10).required("First Name is requied"),
  lastname: yup.string().required("second Name is requied"),
  email: yup.string().required("Email is requied"),
  Password: yup.string().required("Password is requied"),
  

})



 


  

 function SignupModal(props) {
 
 console.log("hello this is ayaz ali")
  const { opeen,handlesClose }=props
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors },reset } = useForm({
   
    defaultValues: {
      firstName: "",
      lastname: "",
      email: "",
      Password: "",
 
      
    },
    resolver :yupResolver(schema),
  });
  

  return (
    <div>
              
      <Modal
        open={opeen}
        onClose={handlesClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <div style={{position:"relative", }} className="mt-3 ">
        <div >
      <Grid className='bg-white p-5 rounded-3'  style={{position:"absolute", marginTop:"8%",
  left: '35%',}} >
        <Grid className="text-center" item >
          {/* <img className="img-filud" src={Hero} alt="" /> */}
        </Grid>
        <Grid >
          <Box className="text-center mb-3">
            <Typography className='fw-bold ' variant='h4'>Welcome!</Typography>
            <Typography className='text-start'>
             Sign up  or log in to continue
            </Typography>
          </Box>

          <form
            onSubmit={handleSubmit((data) => {
            
              console.log(data);
      const Userjson = JSON.stringify(data);

               localStorage.setItem("User", Userjson)

              
              
             
               reset(); // Reset the form after submission
              
             alert('Registration successfully');
             
                  
             handlesClose()
              
            })}
          >
            <Box className=" ">
              <Grid >
                <Grid >
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <TextField 
                    error={errors?.firstName?.message || ""}
                    type="text"
                    size="small"
                    {...field}
                    fullWidth
                    placeholder="First Name"
                  />}
                  />
                 <p className="text-danger">{errors?. firstName?.message}</p>
                </Grid>
                <Grid className="mx-1 " >
                <Controller 
                    name="lastname"
                    control={control}
                    render={({ field }) => <TextField 
                    error={errors?.lastname?.message || ""}
                  
                    type="text"
                    size="small"
                    {...field}
                    fullWidth
                    placeholder="Second  Name"
                  />}
                  />
                    <p className="text-danger">{errors?.lastname?.message}</p>
                </Grid>
                <Grid className=" my-3" >
                <Controller 
                    name="email"
                    control={control}
                    render={({ field }) => <TextField
                    error={errors?.email?.message || ""}
                    type="email"
                    size="small"
                    {...field}
                    fullWidth
                    placeholder="Email"
                  />}
                  />
                   <p className="text-danger">{errors?.  email?.message}</p>
                </Grid>
                <Grid className="mb-2" >
                  <Controller
                    name="Password"
                    control={control}
                    render={({ field }) => (
                      <OutlinedInput
                        {...field}
                        fullWidth
                        size="small"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        error={errors?.Password?.message || ""}

                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    )}
                  />
                  <p className="text-danger">{errors?.Password?.message}</p>
                </Grid>
                <Grid className=" mb-3" >
                                                                                               
            
                 
                </Grid>
                <Grid >
                  <Button style={{backgroundColor:"#e21b70"}} type="submit" fullWidth variant="contained">
                    Log in
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
    </div>
      </Modal>
     
    </div>
  );
}
export default SignupModal;