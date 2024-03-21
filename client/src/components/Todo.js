import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
import { Grid } from "@mui/material";
import { Modal } from 'flowbite-react';
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
const Todo = ({ todo, completeTodo, removeTodo, updatedTodos }) => {


  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  //update state
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  });

  const submitUpdate = value => {
    updatedTodos(edit.id, value);
    setEdit({
      id: null,
      value: ""
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todo.map((todo, index) =>
    <Grid
      item
      xs={8}
      style={{ margin: "31px" }}
      display={"flex"}
      justifyContent={"space-around"}
      height={59}
      alignContent={"stretch"}
      alignItems={"center"}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={handleOpen}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>


      {openModal && (
        <>
      <Modal style={style} show={openModal}   size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle style={{width : "100%", height:"34px"}} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this todo?
            </h3>
            <div style={{display:"flex", justifyContent:"center", gap:"5px"}} className="flex justify-center gap-4">
              <button color="failure" style={{height:"43px", borderRadius : "22px"}}  onClickCapture={() => {removeTodo(todo.id)}} onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"} 
              </button>
              <button  style={{height:"43px", borderRadius : "22px"}} color="gray" onClick={() => setOpenModal(false)} >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
      )}
    </Grid>
  );
};

export default Todo;
