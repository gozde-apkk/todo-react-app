import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  console.log("Todoform,", props);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <Box component = "form"  sx={{display:"flex", justifyContent:"center",gap:"5px"}}
    noValidate
      autoComplete="off" onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <TextField
             required
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            variant="outlined"
            className='todo-input edit'
          />
          <Button onClick={handleSubmit} className='todo-button edit'>
            Update
          </Button>
        </>
      ) : (
        <>
          <TextField
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <Button onClick={handleSubmit} className='todo-button'>
            Add todo
          </Button>
        </>
      )}
    </Box>
  );
}

export default TodoForm;