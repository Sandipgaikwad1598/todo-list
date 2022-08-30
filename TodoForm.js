import React from "react";
import './style.css';
const TodoForm =()=>{
//   // const [inputlist ,setinputlist]=useState();
  
//   // const itemEvent = (event)=>{
//   //   setinputlist(event.target.value);
//   // };
  return(
    <>
    <header>
      <h1>Todo List</h1>
      <form  id ="to-do-form">
      <input type="text" id ="task" ></input>
      <button >Add Task</button>
      
      <ol>
        <li></li>
      </ol>
      </form>
    </header>
    </>
  )
}

export default TodoForm;