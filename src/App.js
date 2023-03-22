import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { useState,useEffect } from "react";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")==null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  const deleteTask=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const addTask = (task)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno= todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      task:task,
    }
    setTodos([...todos,myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  const setUpdate=(updatedTitle, id)=>{
    setTodos(
      todos.map((todo=>{
        if(todo.sno==id){
          todo.task=updatedTitle;
        }
        return todo
      }))
    )
  };

  return (
    <div className="App">
      <div className='h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 overflow-x-hidden'>  
        <Navbar/> 
        <div className='flex h-10 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-20'>
          <div className='my-20 sm:mt-10 mx-auto space-y-3 bg-white'>
            <Form addTask={addTask}/>
            <Todo todos={todos} deleteTask={deleteTask} setUpdate={setUpdate}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
