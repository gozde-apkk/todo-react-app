import React, { useEffect, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = e => {
    setUsername(e.target.value);
    console.log(username);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("object");
    axios
      .post("http://192.168.1.37:3001/user/register", {
        username: username,
        password: password
      })
      .then(response => {
        console.log(response.data);
        if(response.data){
            navigate("/");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container
      fixed
      sx={{ justifyContent: "center", display: "flex", marginTop: "65px" }}
    >
      <Box
        width={500}
        height={540}
        bgcolor={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-start"}
      >
        <h1>Register</h1>
        <form onSubmit={handleSubmit} style={{ width: "300px" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            value={username}
            autoFocus
            onChange={handleUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            id="password"
            label="password"
            autoFocus
            onChange={handlePassword}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "26px"
            }}
          >
            <Button type="submit" style={{ background: "crimson", color:"white" }}>
              Register
            </Button>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterForm;
