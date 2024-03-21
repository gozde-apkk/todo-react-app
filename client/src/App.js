
import { Box, Container } from '@mui/material';
import './App.css';
import TodoList from './components/TodoList';

import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { Button } from 'flowbite-react';

function App() {
  return (
 <Container fixed sx={{justifyContent : "center", display:"flex", flexDirection:"column"}}>

   <div style={{display : 'flex' , justifyContent:"flex-end", marginTop:"2rem"}}>
   <Link to="/login"><Button style={{width:"100px", height:"45px", marginRight:"20px", borderRadius : "22px"}}>Login</Button></Link>
  <Link to="/register"><Button style={{width:"100px", height:"45px", borderRadius : "22px"}}>Register</Button></Link>
   </div>

     <Box 
    
    display="flex"
    flexDirection={'column'}
    justifyContent={'center'}
    bgcolor={'white'}
    textAlign={'center'}
    margin={10} 
    borderRadius={10}
    pb={32}>
     <TodoList/>
    </Box>
 </Container>
  );
}

export default App;
