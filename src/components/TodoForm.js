import React, { useEffect, useRef, useState } from 'react'

const TodoForm = (props) => {

    //state
    const[inputValue, setInputValue] = useState(props.edit ? props.edit.value : '');

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

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}  >
     {props.edit ? (<> <input className='todo-input' onChange={handleChange} ref={inputRef} type='text' id='text' placeholder='Update todo' value={inputValue} name='input' />
        <button className='todo-button'>Update </button></>) : ( <>  <input className='todo-input' onChange={handleChange} ref={inputRef} type='text' id='text' placeholder='Add a todo' value={inputValue} name='input' />
        <button className='todo-button'>Add Todo</button></>)}
      </form>


    </div>
  )
}

export default TodoForm
