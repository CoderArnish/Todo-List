import React, { useState } from 'react'
import { Item } from "./Item";

const Todo = ({ todos, deleteTask, setUpdate}) => {

  
  
  return (
    <div className="bg-white h-ful min-h-300 rounded-2xl">
      {todos.length === 0 ? <div className='p-4'>"No task to dispay"</div> :
        todos.map((todo) => {
          return (
            <>
             <Item todo={todo} key={todo.sno} deleteTask={deleteTask} setUpdate={setUpdate}/>
            </>
          )
        })}
    </div>
  )
};

export default Todo;