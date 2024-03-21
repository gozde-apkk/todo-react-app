import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'flowbite-react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { HiOutlineExclamationCircle } from 'react-icons/hi';






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 341,
  background: 'lavender',
  boxShadow: 24,
  height : 250,
  p: 4,
};
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  console.log("Todoform,", props);
  const [isValid, setIsValid] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);


  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    const pattern = /^[A-Za-z]+$/;

    if (!input.trim()) {
      return;
  }
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
          <Button  onClick={handleOpen} className='todo-button edit'>
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
      <Box sx={{background : "black"}}>
      {openModal && (
        <>
      <Modal style={style} show={openModal}   size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header style={{position : "relative", left : "0px"}} />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle style={{width : "100%", height:"34px"}} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to update this product?
            </h3>
            <div style={{ display:"flex", justifyContent:"center", gap:"5px"}} className="flex justify-center gap-4">
              <button style={{height:"43px", borderRadius : "22px"}} color="failure" onClickCapture={handleSubmit} onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </button>
              <button style={{borderRadius:"22px"}} color="gray" onClick={() => setOpenModal(false)} >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
      )}
      </Box>
    </Box>
    
  );
}

export default TodoForm;