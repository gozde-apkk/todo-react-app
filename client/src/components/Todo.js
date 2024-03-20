import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
import { Grid } from "@mui/material";

const Todo = ({ todo, completeTodo, removeTodo, updatedTodos }) => {
 
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

  return todo.map((todo, index) => (
    <Grid item xs={8}
    style={{margin:"31px"}}
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
      </div>
    </Grid>
  ));
};

export default Todo;
