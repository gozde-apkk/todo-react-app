import React, { useEffect, useRef, useState } from 'react'
import Todo from './Todo';

const TodoForm = (props) => {

    //state
    const [todos, setTodos] = useState([]);
    const[inputValue, setInputValue] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text : inputValue
        })
        setInputValue("");
    }
    
    //   const addTodo = (inputValue) => {
    //     const newTodo = {
    //         id : Date.now(),
    //        text :  inputValue
    //     }
    //     setTodos([...todos, newTodo]);
    //     console.log(todos);
    //     setInputValue("");
    //   }

  return (
    <div>
      <form onSubmit={handleSubmit}  >
        <input onChange={handleChange} type='text' id='text' placeholder='Add a todo' value={inputValue} name='input' />
        <button>Add Todo</button>
      </form>
      {/* {todos && todos.map(( todo, index) => (
        <div key={todo.id}>{todo.text} </div>
      ))} */}
 
    </div>
  )
}

export default TodoForm
