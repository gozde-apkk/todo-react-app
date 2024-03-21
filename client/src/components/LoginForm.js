import {
  Box,
  Button,
  Container,
  TextField
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [formData, setFormData] = useState({

    });
  
 const handleChange = (e) => {
    setFormData({...formData , [e.target.id]  : e.target.value});
    console.log(formData);
 }

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =  await axios.post("192.168.1.37:3001/user/login", {
        username : formData.username,
        password : formData.password
      })
      .then(response => {console.log(response)});
      console.log(res);
  } catch (error) {
      console.log(error);
  }
 }
  return (
    <Container fixed sx={{ justifyContent: "center", display: "flex" , marginTop:"65px"}}>
      <Box
        width={500}
        height={540}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <h1>Login</h1>
         <form style={{width : "285px"}} onSubmit={handleSubmit} >
            <TextField variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            autoFocus
            onChange={handleChange}
    />
              <TextField variant="outlined"
            margin="normal"
    
            required
            fullWidth
            id="password"
            label="password"
            autoFocus
            onChange={handleChange}/>

          <div style={{display:"flex" , justifyContent:"center", marginTop : "26px"}}>
          <Button type="submit" style={{background : "crimson" , color:"white"}}>Login</Button>
          </div>
         </form>
         
      </Box>
    </Container>
  );
};

export default LoginForm;


/****
 *         <Modal.Body style={{background : "crimson", width : "376px", height:"271px", position:"relative"}}>
          <div  style={{color:"white", alignItems:"center"}} className='text-center'>
            <h3 style={{marginBottom : "5px", fontSize : "large"}} className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to update this comment?
            </h3>
            <div className='flex justify-center gap-4'>
            <button
                color='failure'
                onClick={handleSubmit}
              >
                Yes, I'm sure
              </button>
              <button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
 */