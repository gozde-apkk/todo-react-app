import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {

   //todo state
  const [todos, setTodos] = useState([]); //10 elemanlı

  //todo adding function
  const addTodo = todo => {

   const newTodo = [todo, ...todos]; // newTodo 11 eleman 

    // virtual dom'a girdik 
   setTodos(todos); // virtual ve real dom da 10 eleman
   console.log(setTodos(todos)); // virtual ve real dom da 10 eleman 

   setTodos(newTodo); // virtual dom da 11 ve real dom da 10 eleman
   console.log(todos); // virtual dom da 11 ve real dom da 10 eleman
 
  }

  //todo completing function
  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

   //todo removing function
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
    console.log(removeArr);
  }


  //todo updating function
  const updatedTodos = (todoId, newInput) => {
    setTodos(prev => prev.map(item => (item.id === todoId ? newInput : item)));
  }

  
  return (
    <div>
      <h1>What's the Plan for today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todo={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodos={updatedTodos}/>
    </div>
  );
};

export default TodoList;
