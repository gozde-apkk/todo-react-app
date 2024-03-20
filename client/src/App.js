
import { Box, Container } from '@mui/material';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
 <Container fixed sx={{justifyContent : "center", display:"flex"}}>
     <Box 
    width={685}
    display="flex"
    flexDirection={'column'}
    justifyContent={'start'}
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
